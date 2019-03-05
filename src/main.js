import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store.js";

Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    smoothScrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
