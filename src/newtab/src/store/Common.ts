import { Module, VuexModule, Mutation } from "vuex-module-decorators";
import { generateStyleAttr, StylingConfig, StyleObject } from "./lib";

@Module({ namespaced: true, name: "common" })
export default class Common extends VuexModule {
  public styling: StylingConfig = {
    fontFamily: "Source Serif Pro",
    fontSize: 15,
    fontWeight: 300,
    lineHeight: 1.5,
    animationColors: [
      { fg: "#000000", bg: "#f44336" },
      { fg: "#000000", bg: "#ff5722" },
      { fg: "#000000", bg: "#ff9800" },
      { fg: "#000000", bg: "#ffc107" },
      { fg: "#000000", bg: "#ffeb3b" },
      { fg: "#000000", bg: "#cddc39" },
      { fg: "#000000", bg: "#8bc34a" },
      { fg: "#000000", bg: "#4caf50" },
      { fg: "#ffffff", bg: "#009688" },
      { fg: "#000000", bg: "#00bcd4" },
      { fg: "#000000", bg: "#03a9f4" },
      { fg: "#000000", bg: "#2196f3" },
      { fg: "#ffffff", bg: "#3f51b5" },
      { fg: "#ffffff", bg: "#673ab7" },
      { fg: "#ffffff", bg: "#9c27b0" },
      { fg: "#000000", bg: "#e91e63" }
    ]
  };
  public fadeIn: boolean = true;
  public style: string = "";

  public get styleAttr(): StyleObject {
    const animations = [...(this.fadeIn ? ["fade-in 2s forwards"] : [])];

    return {
      ...generateStyleAttr(this.styling),
      animation: animations.join(", ")
    };
  }

  @Mutation
  public setStyling(v: StylingConfig): void {
    this.styling = v;
  }

  @Mutation
  public setFadeIn(v: boolean): void {
    this.fadeIn = v;
  }

  @Mutation
  public setStyle(v: string): void {
    this.style = v;
  }
}
