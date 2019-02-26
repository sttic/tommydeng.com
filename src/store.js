import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    showNavPanel: false
  },
  mutations: {
    toggleShowNavPanel(state) {
      state.showNavPanel = !state.showNavPanel;
    },
    setShowNavPanel(state, payload) {
      state.showNavPanel = payload;
    }
  },
  actions: {
    toggleShowNavPanel(context) {
      context.commit("toggleShowNavPanel");
    },
    showNavPanelFalse(context) {
      context.commit("setShowNavPanel", false);
    },
    showNavPanelTrue(context) {
      context.commit("setShowNavPanel", true);
    }
  },
  getters: {
    getShowNavPanel(state) {
      return state.showNavPanel;
    }
  }
});
