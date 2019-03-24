import { Module, VuexModule, Mutation, getModule } from 'vuex-module-decorators'
export { getModule }

@Module({ namespaced: true, name: 'motto' })
export default class Motto extends VuexModule {
  text = 'So what are you waiting for?\nLive your life in a way that makes traveling light years just to hang out with you worth it.'
  fontScale: number | null = 2

  @Mutation
  setText (text: string) {
    this.text = text
  }

  @Mutation
  setFontSize (size: number | null) {
    this.fontScale = size
  }
}
