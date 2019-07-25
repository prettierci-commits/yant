import { Module, VuexModule, Mutation } from "vuex-module-decorators";

import { defaultWidgetConfigs as defaults } from "./widgetDefaults";
import {
  AnyConfig,
  StyleObject,
  StylingConfig,
  Widget,
  WidgetType,
  generateStyleAttr
} from "./lib";

@Module({ namespaced: true, name: "widgets" })
export default class WidgetsModule extends VuexModule {
  public configs: AnyConfig[] = [
    defaults[WidgetType.separator],
    defaults[WidgetType.motto],
    defaults[WidgetType.separator],
    defaults[WidgetType.clock],
    defaults[WidgetType.date],
    defaults["alternative.date-week"],
    defaults[WidgetType.separator]
  ];

  public get active(): Widget[] {
    return this.configs.map(
      ({ type }, i): Widget => ({
        type,
        id: i
      })
    );
  }

  public get available(): Widget[] {
    return Object.values(WidgetType).map(
      (newType: WidgetType): Widget => ({
        type: newType,
        id: this.configs.length
      })
    );
  }

  public get generateStyleAttr(): (styling: StylingConfig) => StyleObject {
    return (styling: StylingConfig): StyleObject => {
      return generateStyleAttr(styling);
    };
  }

  @Mutation
  public add({ id, type }: { id: number; type: WidgetType }): void {
    this.configs.splice(id, 0, defaults[type]);
  }

  @Mutation
  public delete({ id }: { id: number }): void {
    this.configs.splice(id, 1);
  }

  @Mutation
  public reorder({ oldId, newId }: { oldId: number; newId: number }): void {
    const [widget] = this.configs.splice(oldId, 1);
    this.configs.splice(newId, 0, widget);
  }

  @Mutation
  public setConfig({ id, config }: { id: number; config: AnyConfig }): void {
    this.configs.splice(id, 1, config);
  }
}
