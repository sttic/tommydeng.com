<template>
  <div class="box">
    <h3>{{ title || `Links` }}</h3>
    <ul>
      <li v-for="(item, index) in links" :key="index">
        <a :href="item.ref" target="_blank">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    links: Array
  }
};
</script>
