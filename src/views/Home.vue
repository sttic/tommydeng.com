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
  metaInfo: {
    title: "Home",
    titleTemplate: "Tommy Deng - %s",
    meta: [
      {
        vmid: "description",
        name: "description",
        content:
          "Hi, I'm Tommy. Welcome to my website! I am a software engineering student who likes to make all sorts of things. Consider taking a look at some of my projects."
      }
    ]
  },
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
