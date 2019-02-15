<template>
  <div id="app">
    <div class="page-wrapper">
      <Header/>
      <router-view/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>
