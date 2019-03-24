import { Module, VuexModule, Mutation, getModule } from 'vuex-module-decorators'
export { getModule }

@Module({ namespaced: true, name: 'clock' })
export default class Clock extends VuexModule {
  fontScale = 6

  @Mutation
  setFontSize (size: number) {
    this.fontScale = size
  }
}
