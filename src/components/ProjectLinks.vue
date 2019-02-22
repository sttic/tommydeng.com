<template>
  <div class="box">
    <h3>Links</h3>
    <a v-for="(item, index) in links" :key="index" :href="item.ref" target="_blank">{{ item.name }}</a>
  </div>
</template>

<script>
export default {
  props: {
    links: Array
  }
}
</script>
