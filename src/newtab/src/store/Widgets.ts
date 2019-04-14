import Vue from 'vue'
import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

import { defaultWidgetConfigs as defaults } from './widgetDefaults'
import {
  ClockConfig,
  DateConfig,
  MottoConfig,
  SeparatorConfig,
  SnowConfig,
  StyleObject,
  StylingConfig,
  Widget,
  WidgetType,
  generateStyleAttr
} from './lib'

@Module({ namespaced: true, name: 'widgets' })
export default class WidgetsModule extends VuexModule {
  public clocks: { [key: string]: ClockConfig } = { 1: defaults.clock }
  public dates: { [key: string]: DateConfig } = { 1: defaults.date }
  public mottos: { [key: string]: MottoConfig } = { 1: defaults.motto }
  public separators: { [key: string]: SeparatorConfig } = { 1: defaults.separator, 2: defaults.separator, 3: defaults.separator }
  public snows: { [key: string]: SnowConfig } = {}

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
      case WidgetType.clock:
        Vue.set(this.clocks, widget.id, defaults.clock)
        break
      case WidgetType.date:
        Vue.set(this.dates, widget.id, defaults.date)
        break
      case WidgetType.motto:
        Vue.set(this.mottos, widget.id, defaults.motto)
        break
      case WidgetType.separator:
        Vue.set(this.separators, widget.id, defaults.separator)
        break
      case WidgetType.snow:
        Vue.set(this.snows, widget.id, defaults.snow)
        break
      default:
        const type: never = widget.type
        throw new TypeError(`Unknown widget: ${type}`)
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
      case WidgetType.snow:
        Vue.delete(this.snows, widget.id)
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

  @Mutation
  public setSnow ({ id, value }: { id: number; value: SnowConfig }): void {
    Vue.set(this.snows, id, value)
  }
}
