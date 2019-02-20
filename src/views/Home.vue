<template>
  <div id="home">
    <Banner/>
    <section id="main" class="container landing">
      <Welcome/>
      <ProjectList/>
    </section>
    <CTA/>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Welcome from "@/components/Welcome.vue";
import ProjectList from "@/components/ProjectList.vue";
import CTA from "@/components/CTA.vue";

export default {
  name: "home",
  components: {
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
