<template>
  <ul class="icons">
    <li v-for="(item, index, id) in contactIcons" :key="id">
      <a :href="item.link" :class="item.icon"></a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      contactIcons: [
        {
          icon: "icon fa-linkedin",
          link: "https://www.linkedin.com/in/tommydeng"
        },
        { icon: "icon fa-envelope", link: "mailto:contact@tommydeng.com" },
        { icon: "icon fa-github", link: "https://github.com/sttic" }
      ]
    };
  }
};
</script>

