export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

/* composition-api を使用する場合、ここでuse()する */
import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
Vue.use(VueCompositionApi);