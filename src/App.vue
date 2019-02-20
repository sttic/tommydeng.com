<template>
  <div id="app">
    <div class="page-wrapper">
      <NavBar/>
      <router-view/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    NavBar,
    Footer
  }
};
</script>

<style>
a {
  cursor: pointer;
}

@media only screen and (min-width: 840px) {
  #project,
  #contact {
    margin-top: 3.25em;
  }
}
</style>
