<template>
  <div id="project">
    <div class="container" v-if="component">
      <div class="actions fit">
        <component :is="component"></component>
        <router-link :to="`/#${id}`" class="button fit">Back to projects</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "project",
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
