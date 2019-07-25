/* global chrome: false */

import Vue from "vue";
import Vuex from "vuex";
import { getModule } from "vuex-module-decorators";

import createMutationsSharer from "vuex-shared-mutations";
import {
  LTM,
  chromeSyncStorage,
  dummyFilter,
  executeWithDelay,
  localStorage,
  saveAll,
  shallowMerge
} from "vuex-ltm";

import Common from "./Common";
import Widgets from "./Widgets";

Vue.use(Vuex);

const ltm = new LTM<any>({
  execute: executeWithDelay(1000),
  filter: dummyFilter,
  merge: shallowMerge,
  reduce: saveAll,
  storage:
    chrome && chrome.storage && chrome.storage.sync
      ? chromeSyncStorage("YANT")
      : localStorage("YANT")
});
export const storeReady = ltm.ready;

export const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",

  modules: {
    common: Common,
    widgets: Widgets
  },

  plugins: [
    ltm.plugin,
    createMutationsSharer({ predicate: (): boolean => true })
  ]
});

export const commonModule = getModule(Common, store);
export const widgetsModule = getModule(Widgets, store);

export * from "./types";
export * from "./widgetDefaults";
