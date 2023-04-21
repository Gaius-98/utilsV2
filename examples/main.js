import Vue from "vue";
import App from "./App.vue";
import page from "../packages/index";
Vue.config.productionTip = false;
Vue.use(page);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
