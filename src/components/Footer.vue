<template>
  <footer id="footer">
    <ContactIcons/>
    <ul class="copyright">
      <li>
        <span>&#8203;</span>
      </li>
      <li>
        <a
          href="ö.html"
          onmouseover="this.style.color='#e89980'"
          onmouseout="this.style.color='#999'"
        >ö</a>
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
