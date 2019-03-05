<template>
  <div id="project">
    <div class="container" v-if="component">
      <component :is="component"/>
      <div class="actions fit">
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
  created() {
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
