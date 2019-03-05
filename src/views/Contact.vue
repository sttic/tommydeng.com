<template>
  <div id="contact">
    <section id="main" class="container 75%">
      <header>
        <h2>Contact Information</h2>
        <p>Feel free to share your thoughts and connect with me.</p>
        <ContactIcons/>
      </header>
      <ContactInfo/>
    </section>
  </div>
</template>

<script>
import ContactIcons from "@/components/ContactIcons.vue";
import ContactInfo from "@/components/ContactInfo.vue";

export default {
  name: "contact",
  metaInfo: {
    title: "Contact",
    titleTemplate: "Tommy Deng - %s"
  },
  components: {
    ContactIcons,
    ContactInfo
  }
};
</script>
