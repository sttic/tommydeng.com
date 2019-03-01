<template>
  <div :class="showNavPanelClass">
    <NavButton @click.native="toggleNavPanel"/>
    <NavPanel/>
    <NavBar/>
  </div>
</template>

<script>
import NavButton from "@/components/NavButton.vue";
import NavPanel from "@/components/NavPanel.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavButton,
    NavPanel,
    NavBar
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  mounted() {
    this.handleResize();
    this.$store.dispatch("showNavPanelFalse");
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      if (window.innerWidth > 840 && this.$store.getters.getShowNavPanel) {
        this.$store.dispatch("showNavPanelFalse");
      }
    },
    toggleNavPanel() {
      this.$store.dispatch("toggleShowNavPanel");
    }
  },
  computed: {
    showNavPanelClass() {
      return this.$store.getters.getShowNavPanel ? "navPanel-visible" : "";
    }
  }
};
</script>

<style scoped>
.navPanel-visible #page-wrapper {
  -moz-transform: translateX(275px);
  -webkit-transform: translateX(275px);
  -ms-transform: translateX(275px);
  transform: translateX(275px);
}

.navPanel-visible #navButton {
  -moz-transform: translateX(275px);
  -webkit-transform: translateX(275px);
  -ms-transform: translateX(275px);
  transform: translateX(275px);
}

.navPanel-visible #navPanel {
  -moz-transform: translateX(0);
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}
</style>
