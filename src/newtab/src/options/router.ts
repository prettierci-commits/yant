import Router, { RouteConfig } from "vue-router";
import Vue from "vue";
import { drawerMap } from "@/options/widgetMetadata";

import Options from "@/components/Options.vue";

import ClockOptions from "@/components/clock/Options.vue";
import CommonOptions from "@/components/common/Options.vue";
import DateOptions from "@/components/date/Options.vue";
import MottoOptions from "@/components/motto/Options.vue";
import SeparatorOptions from "@/components/separator/Options.vue";
import SnowOptions from "@/components/snow/Options.vue";
import StyleOptions from "@/components/style/Options.vue";
import WidgetsOptions from "@/components/widgets/Options.vue";

Vue.use(Router);

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "options",
    redirect: {
      name: "options-common"
    },
    component: Options,
    children: [
      {
        path: "common",
        name: "options-common",
        component: CommonOptions,
        meta: drawerMap.get("common")
      },
      {
        path: "clock/:id",
        name: "options-clock",
        component: ClockOptions,
        meta: drawerMap.get("clock")
      },
      {
        path: "date/:id",
        name: "options-date",
        component: DateOptions,
        meta: drawerMap.get("date")
      },
      {
        path: "motto/:id",
        name: "options-motto",
        component: MottoOptions,
        meta: drawerMap.get("motto")
      },
      {
        path: "separator/:id",
        name: "options-separator",
        component: SeparatorOptions,
        meta: drawerMap.get("separator")
      },
      {
        path: "snow/:id",
        name: "options-snow",
        component: SnowOptions,
        meta: drawerMap.get("snow")
      },
      {
        path: "widgets",
        name: "options-widgets",
        component: WidgetsOptions,
        meta: drawerMap.get("widgets")
      },
      {
        path: "style",
        name: "options-style",
        component: StyleOptions,
        meta: drawerMap.get("style")
      }
    ]
  },
  {
    path: "*",
    redirect: {
      name: "options"
    }
  }
];

export default new Router({
  mode: "hash",
  routes
});
export { routes };
