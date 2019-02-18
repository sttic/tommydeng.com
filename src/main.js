import Vue from "vue";
import App from "./App.vue";
import router from "./router";

require("./assets/css/style.css");

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
  render: h => h(App)
}).$mount("#app");
