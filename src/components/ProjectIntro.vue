<template>
  <div class="box">
    <span v-if="image" :class="imageStyle ? imageStyle : `image featured`">
      <img :src="image">
    </span>
    <h3 v-if="general">{{ title || `General` }}</h3>
    <p v-html="general"></p>

    <div class="row">
      <div class="6u 12u(mobilep)">
        <h3>Tools</h3>
        <ul>
          <li v-for="(tool, index) in tools" :key="index">
            <a v-if="tool.link" :href="tool.link">{{ tool.name }}</a>
            <span v-else>{{ tool.name }}</span>
          </li>
        </ul>
      </div>
      <div class="6u 12u(mobilep)">
        <h3>Skills developed</h3>
        <ul>
          <li v-for="(skill, index) in skills" :key="index">{{ skill }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    image: String,
    imageStyle: String,
    general: String,
    tools: Array,
    skills: Array
  }
}
</script>
