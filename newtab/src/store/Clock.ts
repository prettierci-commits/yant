import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { generateStyleAttr, IStyling } from './lib'

@Module({ namespaced: true, name: 'clock' })
export default class Clock extends VuexModule {
  styling: IStyling = {
    fontScale: 9
  }
  separator = ':'
  showSeconds = true
  showDate = true
  showWeek = true
  dimSeconds = true
  dimSeparators = true

  get styleAttr () {
    return generateStyleAttr(this.styling)
  }

  @Mutation
  setStyling (v: IStyling) {
    this.styling = v
  }

  @Mutation
  setSeparator (v: string) {
    this.separator = v
  }

  @Mutation
  setShowSeconds (v: boolean) {
    this.showSeconds = v
  }

  @Mutation
  setShowDate (v: boolean) {
    this.showDate = v
  }

  @Mutation
  setShowWeek (v: boolean) {
    this.showWeek = v
  }

  @Mutation
  setDimSeconds (v: boolean) {
    this.dimSeconds = v
  }

  @Mutation
  setDimSeparators (v: boolean) {
    this.dimSeparators = v
  }
}
