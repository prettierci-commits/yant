import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { generateStyleAttr, IStyling } from './lib'

@Module({ namespaced: true, name: 'motto' })
export default class MottoModule extends VuexModule {
  text = 'So what are you waiting for?\nLive your life in a way that makes traveling light years just to hang out with you worth it.'
  styling: IStyling = {
    fontScale: 1.5
  }

  get styleAttr () {
    return generateStyleAttr(this.styling)
  }

  @Mutation
  setStyling (v: IStyling) {
    this.styling = v
  }

  @Mutation
  setText (text: string) {
    this.text = text
  }
}
