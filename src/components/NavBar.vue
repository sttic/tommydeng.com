<template>
  <header id="header" :class="isRoute('home') ? css : ''">
    <h1>
      <a v-if="isRoute('home')" @click="this.smoothScrollTop">Tommy Deng</a>
      <router-link v-else to="/">Tommy Deng</router-link>
      <span>&nbsp;| Seeking Internship</span>
    </h1>
    <nav id="nav">
      <ul>
        <li>
          <a v-if="isRoute('home')" @click="this.smoothScrollTop">Home</a>
          <router-link v-else to="/">Home</router-link>
        </li>
        <li>
          <a href="https://resume.tommydeng.com/">Resume</a>
        </li>
        <li>
          <a v-if="isRoute('contact')" @click="this.smoothScrollTop">Contact</a>
          <router-link v-else to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      css: "reveal"
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.handleScroll();
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleResize);
  },
  methods: {
    handleScroll() {
      var y = window.scrollY;
      this.css = y < 260 ? "reveal alt" : "reveal";
    },
    isRoute(name) {
      return this.$route.name === name;
    },
    isNotRoute(name) {
      return this.$route.name !== name;
    }
  }
};
</script>
