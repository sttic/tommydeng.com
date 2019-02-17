<template>
  <div id="home">
    <Banner/>
    <section id="main" class="container landing">
      <Welcome/>
      <Projects/>
    </section>
    <CTA/>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Welcome from "@/components/Welcome.vue";
import Projects from "@/components/Projects.vue";
import CTA from "@/components/CTA.vue";

export default {
  name: "home",
  components: {
    Banner,
    Welcome,
    Projects,
    CTA
  }
};
</script>

<style scoped>
@media only screen and (max-width: 736px) {
  #main {
    padding: 0;
    margin-top: 0;
  }
}
</style>
