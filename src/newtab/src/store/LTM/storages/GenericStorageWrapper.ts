export interface AsyncStorage<T> {
  save(obj: T): Promise<void>
  load(): Promise<T | null>
}

type SetItem<T> = (
  (key: string, data: T) => Promise<void>
) | (
  (key: string, data: T) => void
)
type GetItem<T> = (
  (key: string) => Promise<T | null>
) | (
  (key: string) => T | null
)

export class GenericStorageWrapper<Outer, Inner> implements AsyncStorage<Outer> {
  private key: string
  private setItem: SetItem<Inner>
  private getItem: GetItem<Inner>
  private toInner: (data: Outer) => Inner
  private toOuter: (data: Inner) => Outer

  public constructor (
    key: string,
    setItem: SetItem<Inner>,
    getItem: GetItem<Inner>,
    toInner: (data: Outer) => Inner = (data): Inner => data as unknown as Inner,
    toOuter: (data: Inner) => Outer = (data): Outer => data as unknown as Outer
  ) {
    this.key = key
    this.setItem = setItem
    this.getItem = getItem
    this.toInner = toInner
    this.toOuter = toOuter
  }

  public async save (outer: Outer): Promise<void> {
    const inner = this.toInner(outer)
    this.setItem(this.key, inner)
  }

  public async load (): Promise<Outer | null> {
    const inner = await this.getItem(this.key)
    if (inner) {
      return this.toOuter(inner)
    } else {
      return null
    }
  }
}
