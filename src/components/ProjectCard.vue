<template>
  <div class="box special">
    <span class="image featured showcase">
      <router-link :to="link">
        <VueClazyLoad
          :src="img"
          :ratio="0.0001"
          :margin="`512px`"
          :style="`min-height: ${minHeight}px;`"
        >
          <img :src="img">
          <div class="preloader" slot="placeholder">
            <div class="loading-spinner"></div>
          </div>
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
    description: String,
    cardWidth: Number
  },
  computed: {
    aspectRatio() {
      return this.imgSize.y / this.imgSize.x;
    },
    minHeight() {
      return this.cardWidth * this.aspectRatio;
    }
  }
};
</script>

<style scoped>
.preloader {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: perspective(1px) translateY(-50%);
}

.loading-spinner {
  margin: auto;
  border: 4px solid #fff;
  border-top: 4px solid #f5f5f5;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
