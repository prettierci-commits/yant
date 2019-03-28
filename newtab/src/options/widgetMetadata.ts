import { Location } from 'vue-router'

export interface IDrawerItem {
  icon: string
  id?: number
  name: string
  route: Location
}

const drawerMap: ReadonlyMap<string, IDrawerItem> = new Map([
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
  }],

  ['clock', {
    icon: 'mdi-clock',
    name: 'Clock',
    route: {
      name: 'options-clock'
    }
  }],
  ['date', {
    icon: 'mdi-calendar',
    name: 'Date',
    route: {
      name: 'options-date'
    }
  }],
  ['motto', {
    icon: 'mdi-text',
    name: 'Motto',
    route: {
      name: 'options-motto'
    }
  }]
])

export { drawerMap }
