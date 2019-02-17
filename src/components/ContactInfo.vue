<template>
  <section id="main" class="container 75%">
    <header>
      <h2>Contact Information</h2>
      <p>Feel free to share your thoughts and connect with me.</p>
      <ul class="icons">
        <li v-for="(item, index, id) in contactIcons" :key="id">
          <a :href="item.link" :class="item.icon"></a>
        </li>
      </ul>
    </header>

    <div class="box">
      <div v-for="(item, index, id) in contactInfo" :key="id">
        <h3>{{ item.title }}</h3>
        <ul class="contact alt">
          <li v-for="(item, index, id) in item.infoList" :key="id">
            {{ item.type }}
            <a v-if="item.link" :href="item.link">{{ item.data }}</a>
            <span v-else>{{ item.data }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactInfo",
  data() {
    return {
      contactIcons: [
        {
          icon: "icon fa-linkedin",
          link: "https://www.linkedin.com/in/tommydeng"
        },
        { icon: "icon fa-envelope", link: "mailto:contact@tommydeng.com" },
        { icon: "icon fa-github", link: "https://github.com/sttic" }
      ],
      contactInfo: [
        {
          title: "General",
          infoList: [
            { type: "Name", data: "Tommy Deng" },
            { type: "Location", data: "Ottawa, ON" },
            {
              type: "LinkedIn",
              data: "linkedin.com/in/tommydeng",
              link: "https://www.linkedin.com/in/tommydeng"
            },
            {
              type: "Email",
              data: "contact@tommydeng.com",
              link: "mailto:contact@tommydeng.com"
            },
            {
              type: "Github",
              data: "github.com/sttic",
              link: "https://github.com/sttic"
            }
          ]
        },
        {
          title: "Education",
          infoList: [
            { type: "Program", data: "BASc Software Engineering" },
            { type: "Year of study", data: "2" },
            { type: "Expected", data: "Dec 2021" }
          ]
        },
        {
          title: "Employment",
          infoList: [
            { type: "Status", data: "Seeking position" },
            { type: "Availability", data: "Fall 2019" }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
ul.contact span,
ul.contact a {
  float: right;
}
</style>
