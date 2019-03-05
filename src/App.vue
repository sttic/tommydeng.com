<template>
  <div id="app">
    <div v-if="onMainRoute" class="page-wrapper">
      <NavComponents/>
      <router-view/>
      <Footer/>
    </div>
    <router-view v-else/>
  </div>
</template>

<script>
import NavComponents from "@/components/NavComponents.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  metaInfo: {
    title: "Tommy Deng"
  },
  components: {
    NavComponents,
    Footer
  },
  computed: {
    onMainRoute() {
      return "home;projects;contact".split(";").includes(this.$route.name);
    }
  }
};
</script>

<style>
@import "./assets/css/style.css";

a {
  cursor: pointer;
}

.orange-ify {
  transition: 0.5s;
}

.orange-ify:hover {
  color: #e89980;
  transition: 0.5s;
}

#project {
  padding: 4em 0;
}

.actions.fit {
  padding-top: 1em;
}

@media only screen and (min-width: 840px) {
  #project,
  #contact {
    margin-top: 3.25em;
  }
}

@media screen and (min-width: 480.5px) and (max-width: 736px) {
  .actions.fit {
    margin: 1em;
  }
}
</style>
