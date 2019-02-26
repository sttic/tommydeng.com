<template>
  <div id="app">
    <div class="page-wrapper">
      <div :class="showNavPanelClass">
        <div @click="toggleNavPanel">
          <NavButton/>
        </div>
        <NavPanel/>
        <NavBar/>
      </div>
      <router-view/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import NavButton from "@/components/NavButton.vue";
import NavPanel from "@/components/NavPanel.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    NavButton,
    NavPanel,
    NavBar,
    Footer
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  mounted() {
    this.handleResize();
    this.$store.dispatch("showNavPanelFalse");
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

<style>
a {
  cursor: pointer;
}

#project {
  padding: 4em 0;
}

.actions.fit {
  padding-top: 1em;
}

@media only screen and (min-width: 840px) {
  #project,
  #contact {
    margin-top: 3.25em;
  }
}

@media screen and (min-width: 480.5px) and (max-width: 736px) {
  .actions.fit {
    margin: 1em;
  }
}

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
