<template>
  <footer id="footer">
    <ContactIcons/>
    <ul class="copyright">
      <li>
        <span>&#8203;</span>
      </li>
      <li>
        <router-link to="happy"><span class="orange-ify">ö</span></router-link>
      </li>
      <li>
        <span>&#8203;</span>
      </li>
    </ul>
  </footer>
</template>

<script>
import ContactIcons from "@/components/ContactIcons.vue";

export default {
  components: {
    ContactIcons
  }
};
</script>
