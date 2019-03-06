<template>
  <div id="cat">
    <img src="https://i.imgur.com/7umbgSd.jpg">
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "have cat meöw",
    meta: [
      {
        vmid: "description",
        name: "description",
        content: "Here, have this cat pic :3"
      }
    ]
  }
};
</script>

<style scoped>
#cat {
  height: 100vh;
}

img {
  padding: 0;
  display: block;
  margin: 0 auto;
  max-height: 100%;
  max-width: 100%;
}
</style>
