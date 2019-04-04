import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { generateStyleAttr, IStyling } from './lib'

@Module({ namespaced: true, name: 'common' })
export default class Common extends VuexModule {
  styling: IStyling = {
    fontFamily: 'Source Serif Pro',
    fontSize: 15,
    fontWeight: 300,
    lineHeight: 1.5,
    animationColors: [
      { 'fg': '#000000', 'bg': '#f44336' },
      { 'fg': '#000000', 'bg': '#ff5722' },
      { 'fg': '#000000', 'bg': '#ff9800' },
      { 'fg': '#000000', 'bg': '#ffc107' },
      { 'fg': '#000000', 'bg': '#ffeb3b' },
      { 'fg': '#000000', 'bg': '#cddc39' },
      { 'fg': '#000000', 'bg': '#8bc34a' },
      { 'fg': '#000000', 'bg': '#4caf50' },
      { 'fg': '#ffffff', 'bg': '#009688' },
      { 'fg': '#000000', 'bg': '#00bcd4' },
      { 'fg': '#000000', 'bg': '#03a9f4' },
      { 'fg': '#000000', 'bg': '#2196f3' },
      { 'fg': '#ffffff', 'bg': '#3f51b5' },
      { 'fg': '#ffffff', 'bg': '#673ab7' },
      { 'fg': '#ffffff', 'bg': '#9c27b0' },
      { 'fg': '#000000', 'bg': '#e91e63' }
    ]
  }
  fadeIn: boolean = true
  style: string = ''

  get styleAttr () {
    const animations = [
      ...(this.fadeIn ? ['fade-in 2s forwards'] : [])
    ]

    return {
      ...generateStyleAttr(this.styling),
      animation: animations.join(', ')
    }
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
