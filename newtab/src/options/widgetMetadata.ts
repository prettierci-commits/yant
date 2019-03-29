import { Location } from 'vue-router'

export interface IDrawerItem {
  icon: string
  name: string
  route: Location
}
export interface IDrawerWidget extends IDrawerItem {
  componentName: string
  icon: string
  name: string
  route: Location
}

const items: [string, IDrawerItem][] = [
  ['common', {
    icon: 'mdi-domain',
    name: 'Common',
    route: {
      name: 'options-common'
    }
  }],
  ['widgets', {
    icon: 'mdi-reorder-horizontal',
    name: 'Widgets',
    route: {
      name: 'options-widgets'
    }
  }],
  ['style', {
    icon: 'mdi-language-css3',
    name: 'Style (custom CSS)',
    route: {
      name: 'options-style'
    }
  }]
]
const widgets: [string, IDrawerWidget][] = [
  ['clock', {
    icon: 'mdi-clock',
    name: 'Clock',
    componentName: 'ClockView',
    route: {
      name: 'options-clock'
    }
  }],
  ['date', {
    icon: 'mdi-calendar',
    name: 'Date',
    componentName: 'DateView',
    route: {
      name: 'options-date'
    }
  }],
  ['motto', {
    icon: 'mdi-text',
    name: 'Motto',
    componentName: 'MottoView',
    route: {
      name: 'options-motto'
    }
  }],
  ['separator', {
    icon: 'mdi-minus',
    name: 'Separator',
    componentName: 'SeparatorView',
    route: {
      name: 'options-separator'
    }
  }]
]

const widgetMap: ReadonlyMap<string, IDrawerWidget> = new Map(widgets)
const drawerMap: ReadonlyMap<string, IDrawerItem> = new Map([
  ...items,
  ...widgets
])

export { drawerMap }
export { widgetMap }
