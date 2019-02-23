<template>
  <div id="main">
    <header class="project-title">
      <h2>{{ title }}</h2>
      <p v-html="caption"></p>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    caption: String
  }
};
</script>

<style scoped>
#main {
  padding: 0;
}
</style>
