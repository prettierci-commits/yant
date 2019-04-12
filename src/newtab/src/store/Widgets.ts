import Vue from 'vue'
import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import {
  generateStyleAttr, StylingConfig, StyleObject,
  ClockConfig, DateConfig, MottoConfig, SeparatorConfig,
  DateUpdateRate, WidgetType, Widget
} from './lib'

const defaults: {
  clock: ClockConfig
  date: DateConfig
  motto: MottoConfig
  separator: SeparatorConfig
} = {
  clock: {
    styling: {
      fontScale: 9
    },
    separator: ':',
    showSeconds: true,
    dimSeconds: true,
    dimSeparators: true
  },
  date: {
    styling: {
      fontScale: 2.5
    },
    formatString: 'dddd, MMMM D, YYYY',
    updateRate: DateUpdateRate.Days
  },
  motto: {
    styling: {
      fontScale: 1.5
    },
    text: '<strong>So what are you waiting for?</strong>\nLive your life in a way that makes traveling light years just to hang out with you worth it.'
  },
  separator: {
    styling: {
      height: 40
    },
    flexGrow: 1
  }
}

@Module({ namespaced: true, name: 'widgets' })
export default class WidgetsModule extends VuexModule {
  public clocks: { [key: string]: ClockConfig } = { 1: defaults.clock }
  public dates: { [key: string]: DateConfig } = { 1: defaults.date }
  public mottos: { [key: string]: MottoConfig } = { 1: defaults.motto }
  public separators: { [key: string]: SeparatorConfig } = { 1: defaults.separator, 2: defaults.separator, 3: defaults.separator }

  public active: Widget[] = [{
    type: WidgetType.separator,
    id: 1
  }, {
    type: WidgetType.motto,
    id: 1
  }, {
    type: WidgetType.separator,
    id: 2
  }, {
    type: WidgetType.clock,
    id: 1
  }, {
    type: WidgetType.date,
    id: 1
  }, {
    type: WidgetType.separator,
    id: 3
  }]

  public get available (): Widget[] {
    return Object.values(WidgetType).map((newType: WidgetType): Widget => ({
      type: newType,
      id: this.active
        .filter(({ type }): boolean => type === newType)
        .reduce((newId, { id: oldId }): number => newId <= oldId ? oldId + 1 : newId, 1)
    }))
  }

  public get generateStyleAttr (): (styling: StylingConfig) => StyleObject {
    return (styling: StylingConfig): StyleObject => {
      return generateStyleAttr(styling)
    }
  }

  @Mutation
  public addToActive ({ index, widget }: { index: number; widget: Widget }): void {
    switch (widget.type) {
      case 'clock':
        Vue.set(this.clocks, widget.id, defaults.clock)
        break
      case 'date':
        Vue.set(this.dates, widget.id, defaults.date)
        break
      case 'motto':
        Vue.set(this.mottos, widget.id, defaults.motto)
        break
      case 'separator':
        Vue.set(this.separators, widget.id, defaults.separator)
        break
      default:
        throw new TypeError(`Unknown widget: ${widget.type}`)
    }
    this.active.splice(index, 0, widget)
  }

  @Mutation
  public removeFromActive ({ index, widget }: { index: number; widget: Widget }): void {
    this.active.splice(index, 1)
    switch (widget.type) {
      case WidgetType.clock:
        Vue.delete(this.clocks, widget.id)
        break
      case WidgetType.date:
        Vue.delete(this.dates, widget.id)
        break
      case WidgetType.motto:
        Vue.delete(this.mottos, widget.id)
        break
      case WidgetType.separator:
        Vue.delete(this.separators, widget.id)
        break
      default:
        const type: never = widget.type
        throw new TypeError(`Unknown widget: ${type}`)
    }
  }

  @Mutation
  public reorderActive ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }): void {
    const [widget] = this.active.splice(oldIndex, 1)
    this.active.splice(newIndex, 0, widget)
  }

  @Mutation
  public setClock ({ id, value }: { id: number; value: ClockConfig }): void {
    Vue.set(this.clocks, id, value)
  }

  @Mutation
  public setDate ({ id, value }: { id: number; value: DateConfig }): void {
    Vue.set(this.dates, id, value)
  }

  @Mutation
  public setMotto ({ id, value }: { id: number; value: MottoConfig }): void {
    Vue.set(this.mottos, id, value)
  }

  @Mutation
  public setSeparator ({ id, value }: { id: number; value: SeparatorConfig }): void {
    Vue.set(this.separators, id, value)
  }
}
