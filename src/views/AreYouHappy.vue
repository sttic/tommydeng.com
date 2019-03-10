<template>
  <div id="happy">
    <div class="happy-container">
      <h1>Are you happy?</h1>
      <ul class="actions">
        <li>
          <router-link to="/">Yes</router-link>
        </li>
        <li>
          <router-link to="/cat/">No</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Are you happy?",
    meta: [{ vmid: "description", name: "description", content: "Are you happy?" }]
  }
};
</script>

<style scoped>
#happy {
  background-color: #101010;
  font-family: "Trebuchet MS", "Helvetica", sans-serif;
  height: 100vh;
}

.happy-container {
  width: 100%;
  margin-top: -4em;
  position: absolute;
  top: 50%;
  text-align: center;
}

h1 {
  font-weight: bold;
  color: #f0f0f0;
  font-size: 64px;
}

ul {
  list-style-type: none;
}

li {
  font-size: 24px;
  font-weight: bold;
}

li > a {
  color: #404040;
}

li > a:hover {
  color: #f0f0f0;
}
</style>
