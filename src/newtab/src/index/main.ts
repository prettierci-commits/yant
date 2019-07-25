import "source-serif-pro/source-serif-variable.css";
import App from "./App.vue";
import Vue, { VNode } from "vue";
import { store, storeReady } from "@/store";

Vue.config.productionTip = false;
(async (): Promise<void> => {
  const app = new Vue({
    store,
    render: (h): VNode => h(App)
  });
  await storeReady;
  app.$mount("#app");
})();
