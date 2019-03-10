<template>
  <div id="navPanel">
    <nav>
      <a class="link depth-0" v-if="isRoute('home')" @click="sameRouteHandler">Home</a>
      <router-link class="link depth-0" v-else @click.native="hideNavPanel" to="/">Home</router-link>
      <a class="link depth-0" href="https://resume.tommydeng.com/">Resume</a>
      <a class="link depth-0" v-if="isRoute('contact')" @click="sameRouteHandler">Contact</a>
      <router-link class="link depth-0" v-else @click.native="hideNavPanel" to="/contact/">Contact</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    isRoute(name) {
      return this.$route.name === name;
    },
    hideNavPanel() {
      this.$store.dispatch("showNavPanelFalse");
    },
    sameRouteHandler() {
      this.smoothScrollTop();
      this.hideNavPanel();
    }
  }
};
</script>
