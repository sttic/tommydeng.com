<template>
  <div class="box">
    <h3>{{ title || `Showcase` }}</h3>
    <ProjectImageArray :images="images"/>
  </div>
</template>

<script>
import ProjectImageArray from "@/components/ProjectImageArray.vue";

export default {
  components: {
    ProjectImageArray
  },
  props: {
    title: String,
    images: Array
  }
};
</script>
