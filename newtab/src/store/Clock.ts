import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { generateStyleAttr, IStyling } from './lib'

@Module({ namespaced: true, name: 'clock' })
export default class Clock extends VuexModule {
  styling: IStyling = {
    fontScale: 9
  }

  get styleAttr () {
    return generateStyleAttr(this.styling)
  }

  @Mutation
  setStyling (v: IStyling) {
    this.styling = v
  }
}
