<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
@import "./assets/css/style.css";

a {
  cursor: pointer;
}

.orange-ify {
  transition: 0.5s;
}

.orange-ify:hover {
  color: #e89980;
  transition: 0.5s;
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
</style>
