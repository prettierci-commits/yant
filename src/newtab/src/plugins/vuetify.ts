import "./vuetify.styl";
import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/es5/util/colors";

const color = colors.yellow;

Vue.use(Vuetify, {
  theme: {
    primary: color.base,
    secondary: color.base,
    accent: color.base
  },
  options: {
    customProperties: true
  },
  iconfont: "mdi"
});
