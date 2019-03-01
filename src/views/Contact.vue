<template>
  <div class="page-wrapper">
    <NavComponents/>

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

    <Footer/>
  </div>
</template>

<script>
import NavComponents from "@/components/NavComponents.vue";
import Footer from "@/components/Footer.vue";

import ContactIcons from "@/components/ContactIcons.vue";
import ContactInfo from "@/components/ContactInfo.vue";

export default {
  name: "contact",
  components: {
    NavComponents,
    Footer,
    ContactIcons,
    ContactInfo
  }
};
</script>
