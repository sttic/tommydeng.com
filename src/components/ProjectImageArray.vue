<template>
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
</template>

<script>
export default {
  props: {
    images: Array
  }
}
</script>

