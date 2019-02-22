<template>
  <div class="box">
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    text: String
  }
};
</script>
