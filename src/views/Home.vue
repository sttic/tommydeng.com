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
@-moz-keyframes reveal-header {
  0% {
    top: -5em;
  }

  100% {
    top: 0;
  }
}

@-webkit-keyframes reveal-header {
  0% {
    top: -5em;
  }

  100% {
    top: 0;
  }
}

@-ms-keyframes reveal-header {
  0% {
    top: -5em;
  }

  100% {
    top: 0;
  }
}

@keyframes reveal-header {
  0% {
    top: -5em;
  }

  100% {
    top: 0;
  }
}
</style>

