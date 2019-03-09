<template>
  <div class="box special">
    <span class="image featured showcase">
      <router-link :to="link">
        <VueClazyLoad :src="img" :ratio="0.0001" :margin="`512px`">
          <img :src="img">
          <div class="preloader" slot="placeholder" :style="`padding-bottom: ${aspectRatio}%`"></div>
        </VueClazyLoad>
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
import { VueClazyLoad } from "vue-clazy-load";

export default {
  components: {
    VueClazyLoad
  },
  props: {
    link: String,
    img: String,
    imgSize: Object,
    title: String,
    description: String
  },
  computed: {
    aspectRatio() {
      return (this.imgSize.y / this.imgSize.x) * 100;
    }
  }
};
</script>
