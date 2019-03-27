import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { generateStyleAttr, IStyling } from './lib'

@Module({ namespaced: true, name: 'common' })
export default class Common extends VuexModule {
  styling: IStyling = {
    backgroundColor: '#282828',
    color: '#ffffff',
    fontFamily: 'Source Serif Pro',
    fontSize: 15,
    fontWeight: 100,
    lineHeight: 1.5
  }
  style: string = ''

  get styleAttr () {
    return generateStyleAttr(this.styling)
  }

  @Mutation
  setStyling (v: IStyling) {
    this.styling = v
  }

  @Mutation
  setStyle (v: string) {
    this.style = v
  }
}
