import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

type order = string[]

@Module({ namespaced: true, name: 'order' })
export default class Order extends VuexModule {
  // Vuex-persist merges states, without null it's impossible to remove items.
  orderNullTerminated: (string | null)[] = ['motto', 'clock', null]
  items: {
    [key: string]: {
      name: string,
      icon: string,
      componentName: string
    }
  } = {
    clock: {
      name: 'Clock',
      icon: 'mdi-clock',
      componentName: 'Clock'
    },
    motto: {
      name: 'Motto',
      icon: 'mdi-text',
      componentName: 'Motto'
    }
  }

  get order (): order {
    return this.orderNullTerminated.slice(
      0,
      this.orderNullTerminated.indexOf(null)
    ) as order
  }

  get activeList () {
    return this.order.map((type, i) => ({
      ...this.items[type],
      type,
      id: `a${i}`
    }))
  }

  get inactiveList () {
    return Object
      .entries(this.items)
      .filter(([type]) => !this.order.includes(type))
      .map(([type, values], i) => {
        return {
          ...values,
          type,
          id: `i${i}` }
      })
  }

  get componentOrder () {
    return this.order.map(type => this.items[type].componentName)
  }

  @Mutation
  setOrder (v: order) {
    this.orderNullTerminated = [...v, null]
  }
}
