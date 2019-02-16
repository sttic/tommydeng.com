<template>
  <div id="contact">
    <ContactInfo/>
  </div>
</template>

<script>
import ContactInfo from "@/components/ContactInfo.vue";

export default {
  name: "contact",
  components: {
    ContactInfo
  }
};
</script>

<style scoped>
@media only screen and (min-width: 840px) {
  #contact {
    margin-top: 3.25em;
  }
}
</style>
