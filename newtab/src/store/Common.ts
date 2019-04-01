import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { generateStyleAttr, IStyling } from './lib'

@Module({ namespaced: true, name: 'common' })
export default class Common extends VuexModule {
  styling: IStyling = {
    fontFamily: 'Source Serif Pro',
    fontSize: 15,
    fontWeight: 300,
    lineHeight: 1.5
  }
  fadeIn: boolean = true
  style: string = ''

  get styleAttr () {
    return generateStyleAttr(this.styling)
  }

  @Mutation
  setStyling (v: IStyling) {
    this.styling = v
  }

  @Mutation
  setFadeIn (v: boolean) {
    this.fadeIn = v
  }

  @Mutation
  setStyle (v: string) {
    this.style = v
  }
}
