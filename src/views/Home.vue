<template>
  <div class="page-wrapper">
    <NavComponents/>

    <div id="home">
      <Banner/>
      <section id="main" class="container landing">
        <Welcome/>
        <ProjectList/>
      </section>
      <CTA/>
    </div>

    <Footer/>
  </div>
</template>

<script>
import NavComponents from "@/components/NavComponents.vue";
import Footer from "@/components/Footer.vue";

import Banner from "@/components/Banner.vue";
import Welcome from "@/components/Welcome.vue";
import ProjectList from "@/components/ProjectList.vue";
import CTA from "@/components/CTA.vue";

export default {
  name: "home",
  components: {
    NavComponents,
    Footer,
    Banner,
    Welcome,
    ProjectList,
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
