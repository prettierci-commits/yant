import { MutationPayload, Plugin, Store } from 'vuex'

import { AsyncStorage, localStorageWrapper } from './storages'
import { Executor, simplyExecute } from './executors'
import { Filter, dummyFilter } from './filters'
import { Merger, replace } from './mergers'
import { Reducer, saveAll } from './reducers'

export class LTM<S> {
  private readonly execute: Executor
  private readonly filter: Filter
  private readonly merge: Merger<S>
  private readonly reduce: Reducer<S>
  private readonly storage: AsyncStorage<Partial<S>>

  public readonly ready: Promise<void>
  private resolveReady: () => void = (): void => {}
  private rejectReady: () => void = (): void => {}

  public constructor (
    {
      execute = simplyExecute,
      filter = dummyFilter,
      merge = replace,
      reduce = saveAll,
      storage = localStorageWrapper()
    }: {
      execute?: Executor
      filter?: Filter
      merge?: Merger<S>
      reduce?: Reducer<S>
      storage?: AsyncStorage<Partial<S>>
    } = {}
  ) {
    this.execute = execute
    this.filter = filter
    this.merge = merge
    this.reduce = reduce
    this.storage = storage

    this.ready = new Promise((resolve, reject): void => {
      this.resolveReady = resolve
      this.rejectReady = reject
    })
  }

  private async save (mutation: MutationPayload, state: S): Promise<void> {
    if (!await this.filter(mutation)) {
      return
    }

    const partialState = await this.reduce(state)

    if (!partialState) {
      return
    }

    this.execute((): void => {
      this.storage.save(partialState)
    })
  }

  private async load (store: Store<S>): Promise<void> {
    const loaded = await this.storage.load()

    if (!loaded) {
      return
    }

    const merged = await this.merge(loaded, store.state)

    store.replaceState(merged)

    this.resolveReady()
  }

  public get plugin (): Plugin<S> {
    return (store: Store<S>): void => {
      store.subscribe((mutation, state): void => {
        this.save(mutation, state)
      })

      this.load(store)
    }
  }
}
