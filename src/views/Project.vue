<template>
  <div class="page-wrapper">
    <NavComponents/>

    <div id="project">
      <div class="container" v-if="component">
        <component :is="component"/>
        <div class="actions fit">
          <router-link :to="`/#${id}`" class="button fit">Back to projects</router-link>
        </div>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
import NavComponents from "@/components/NavComponents.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "project",
  components: {
    NavComponents,
    Footer
  },
  props: {
    id: String
  },
  data() {
    return {
      component: null
    };
  },
  computed: {
    loader() {
      return () => import(`@/components/projects/${this.id}.vue`);
    }
  },
  mounted() {
    this.loader()
      .then(() => {
        this.component = () => this.loader();
      })
      .catch(() => {
        this.$router.push({ path: "/" });
      });
  }
};
</script>
