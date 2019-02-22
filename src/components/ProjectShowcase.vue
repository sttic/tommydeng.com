<template>
  <div class="box">
    <h3>{{ title || `Showcase` }}</h3>
    <div class="box alt">
      <div class="row no-collapse 50% uniform">
        <div class="4u" v-for="(image, index) in images" :key="index">
          <span class="image fit">
            <a :href="image" target="_blank">
              <img :src="image">
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    images: Array
  }
};
</script>
