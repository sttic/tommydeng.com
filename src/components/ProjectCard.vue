<template>
  <div class="box special">
    <span class="image featured showcase">
      <router-link :to="link">
        <img :src="img">
      </router-link>
    </span>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <ul class="actions">
      <li>
        <router-link :to="link" class="button alt">Read More</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    link: String,
    img: String,
    title: String,
    description: String
  }
};
</script>
