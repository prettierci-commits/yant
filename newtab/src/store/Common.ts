import { Module, VuexModule, Mutation, getModule } from 'vuex-module-decorators'
export { getModule }

export interface IFont {
  color: string,
  lineHeight: number,
  size: number,
  weight: number
}

@Module({ namespaced: true, name: 'common' })
export default class Motto extends VuexModule {
  font: IFont = {
    color: '#ffffff',
    lineHeight: 1.2,
    size: 30,
    weight: 500
  }
  background: string = '#303030'

  @Mutation
  setFont (font: IFont) {
    this.font = font
  }

  @Mutation
  setBackground (color: string) {
    this.background = color
  }
}
