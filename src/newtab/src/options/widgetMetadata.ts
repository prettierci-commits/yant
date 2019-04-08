import { Location } from 'vue-router'

export interface DrawerItem {
  icon: string
  name: string
  route: Location
}
export interface DrawerWidget extends DrawerItem {
  componentName: string
  icon: string
  name: string
  route: Location
  type: string
}

const items: [string, DrawerItem][] = [
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
const widgets: [string, DrawerWidget][] = [
  ['clock', {
    icon: 'mdi-clock',
    name: 'Clock',
    type: 'clock',
    componentName: 'ClockView',
    route: {
      name: 'options-clock'
    }
  }],
  ['date', {
    icon: 'mdi-calendar',
    name: 'Date',
    type: 'date',
    componentName: 'DateView',
    route: {
      name: 'options-date'
    }
  }],
  ['motto', {
    icon: 'mdi-text',
    name: 'Motto',
    type: 'motto',
    componentName: 'MottoView',
    route: {
      name: 'options-motto'
    }
  }],
  ['separator', {
    icon: 'mdi-minus',
    name: 'Separator',
    type: 'separator',
    componentName: 'SeparatorView',
    route: {
      name: 'options-separator'
    }
  }]
]

const widgetMap: ReadonlyMap<string, DrawerWidget> = new Map(widgets)
const drawerMap: ReadonlyMap<string, DrawerItem> = new Map([
  ...items,
  ...widgets
])

export { drawerMap }
export { widgetMap }
