<template>
  <div id="project-content">
    <ProjectTitle :title="projectTitle.title" :caption="projectTitle.caption"/>
    <ProjectIntro
      :image="projectIntro.image"
      :general="projectIntro.general"
      :tools="projectIntro.tools"
      :skills="projectIntro.skills"
    />
    <ProjectLinks :links="projectLinks.links"/>
  </div>
</template>

<script>
import ProjectTitle from "@/components/ProjectTitle.vue";
import ProjectIntro from "@/components/ProjectIntro.vue";
import ProjectLinks from "@/components/ProjectLinks.vue";

export default {
  metaInfo: {
    title: "Inventure Website",
    titleTemplate: "Tommy Deng - %s",
    meta: [
      {
        vmid: "description",
        name: "description",
        content:
          "Inventure is a platform that brings together youth and business opportunities. This is the website I built for it using Vue.js."
      }
    ]
  },
  components: {
    ProjectTitle,
    ProjectIntro,
    ProjectLinks
  },
  data() {
    return {
      projectTitle: {
        title: `Inventure`,
        caption: `Website for Inventure built with Vue.js.`
      },
      projectIntro: {
        image: `https://i.imgur.com/I0zsAfK.png`,
        general: `Inventure is a platform that brings together youth and business opportunities. I developed <a href="https://meetinventure.com/">meetinventure.com</a> for Inventure using Vue.js.`,
        tools: [
          { name: `Vue` },
          { name: `HTML, CSS, JavaScript` },
          { name: `Netlify` }
        ],
        skills: [
          `Front-end development`,
          `Web design`,
          `Communication with client`
        ]
      },
      projectText: {
        title: `Method`,
        text: `As team leader I worked on, coordinated, and oversaw virtually all aspects of the project. This includes the main development of the website, planning meetings, communicating with team members, submitting the deliverables and weekly reports, and creating the custom PowerPoint for the final pitch.`
      },
      projectLinks: {
        links: [
          {
            name: `meetinventure.com`,
            ref: `https://meetinventure.com/`
          }
        ]
      }
    };
  }
};
</script>
