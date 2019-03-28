import Vue from 'vue'
import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { generateStyleAttr, IStyling, IClockConfig, IMottoConfig } from './lib'

const defaults: {
  clock: IClockConfig
  motto: IMottoConfig
} = {
  clock: {
    styling: {
      fontScale: 9
    },
    separator: ':',
    showSeconds: true,
    showDate: true,
    showWeek: true,
    dimSeconds: true,
    dimSeparators: true
  },
  motto: {
    styling: {
      fontScale: 1.5
    },
    text: '<strong>So what are you waiting for?</strong>\nLive your life in a way that makes traveling light years just to hang out with you worth it.'
  }
}

interface IWidget {
  type: string
  id: number
}

@Module({ namespaced: true, name: 'widgets' })
export default class WidgetsModule extends VuexModule {
  clocks: { [key: string]: IClockConfig } = { 1: defaults.clock }
  mottos: { [key: string]: IMottoConfig } = { 1: defaults.motto }

  active: IWidget[] = [{
    type: 'motto',
    id: 1
  }, {
    type: 'clock',
    id: 1
  }]

  get available (): IWidget[] {
    return ['clock', 'motto'].map(newType => ({
      type: newType,
      id: this.active
        .filter(({ type }) => type === newType)
        .reduce((newId, { id: oldId }) => newId <= oldId ? oldId + 1 : newId, 1)
    }))
  }

  get generateStyleAttr () {
    return function (styling: IStyling) {
      return generateStyleAttr(styling)
    }
  }

  @Mutation
  addToActive ({ index, widget }: { index: number, widget: IWidget }) {
    switch (widget.type) {
      case 'clock':
        Vue.set(this.clocks, widget.id, defaults.clock)
        break
      case 'motto':
        Vue.set(this.mottos, widget.id, defaults.motto)
        break
    }
    this.active.splice(index, 0, widget)
  }

  @Mutation
  removeFromActive ({ index, widget }: { index: number, widget: IWidget }) {
    this.active.splice(index, 1)
    switch (widget.type) {
      case 'clock':
        Vue.delete(this.clocks, widget.id)
        break
      case 'motto':
        Vue.delete(this.mottos, widget.id)
        break
    }
  }

  @Mutation
  reorderActive ({ oldIndex, newIndex }: { oldIndex: number, newIndex: number }) {
    const [widget] = this.active.splice(oldIndex, 1)
    this.active.splice(newIndex, 0, widget)
  }

  @Mutation
  setClock ({ id, value }: { id: number, value: IClockConfig }) {
    Vue.set(this.clocks, id, value)
  }

  @Mutation
  setMotto ({ id, value }: { id: number, value: IMottoConfig }) {
    Vue.set(this.mottos, id, value)
  }
}
