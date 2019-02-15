<template>
  <header id="header" :class="nav">
    <h1>
      <router-link to="/">Tommy Deng</router-link>&nbsp;| Seeking Internship
    </h1>
    <nav id="nav">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <a href="https://resume.tommydeng.com/">Resume</a>
        </li>
        <li>
          <router-link to="contact">Contact</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      nav: "reveal"
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.handleScroll();
  },
  methods: {
    handleScroll() {
      var y = window.scrollY;
      this.nav = y < 260 ? "reveal alt" : "reveal";
    }
  }
};
</script>
