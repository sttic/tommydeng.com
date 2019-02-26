<template>
  <div id="navPanel">
    <nav>
      <a class="link depth-0" v-if="isRoute('home')" @click="this.smoothScrollTop">Home</a>
      <router-link class="link depth-0" v-else to="/">Home</router-link>
      <a class="link depth-0" href="https://resume.tommydeng.com/">Resume</a>
      <a class="link depth-0" v-if="isRoute('contact')" @click="this.smoothScrollTop">Contact</a>
      <router-link class="link depth-0" v-else to="/contact">Contact</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    isRoute(name) {
      return this.$route.name === name;
    }
  }
};
</script>
