<template>
  <div id="project-content">
    <ProjectTitle :title="projectTitle.title" :caption="projectTitle.caption"/>
    <ProjectIntro
      :image="projectIntro.image"
      :general="projectIntro.general"
      :tools="projectIntro.tools"
      :skills="projectIntro.skills"
    />
    <ProjectText :title="projectText.title" :text="projectText.text"/>
    <ProjectShowcase :title="projectShowcase.title" :images="projectShowcase.images"/>
  </div>
</template>

<script>
import ProjectTitle from "@/components/ProjectTitle.vue";
import ProjectIntro from "@/components/ProjectIntro.vue";
import ProjectText from "@/components/ProjectText.vue";
import ProjectShowcase from "@/components/ProjectShowcase.vue";

export default {
  components: {
    ProjectTitle,
    ProjectIntro,
    ProjectText,
    ProjectShowcase
  },
  created() {
    this.setDocumentTitle(this.documentTitle);
  },
  data() {
    return {
      documentTitle: `Pusheen Coins`,
      projectTitle: {
        title: `Pusheen Coins`,
        caption: `Coins based on a cute Internet cat named Pusheen.`
      },
      projectIntro: {
        image: `https://i.imgur.com/uBfj15Q.png`,
        tools: [
          { name: `Cinema 4D` },
          { name: `Cura` },
          { name: `Ultimaker 2+` }
        ],
        skills: [`3D modelling`, `3D printing`, `3D graphics`]
      },
      projectText: {
        title: `Method`,
        text: `I created Pusheen coins/tokens and renders by modelling them in Cinema 4D and 3D printing them.`
      },
      projectShowcase: {
        title: `Showcase`,
        images: [
          `https://i.imgur.com/uBfj15Q.png`,
          `https://i.imgur.com/uMDzScm.png`,
          `https://i.imgur.com/h7dNM7x.gif`,
          `https://i.imgur.com/YvEV7GO.png`,
          `https://i.imgur.com/il8XfPL.png`,
          `https://i.imgur.com/BD4Mj6D.png`,
          `https://i.imgur.com/RwAqPjp.png`
        ]
      }
    };
  }
};
</script>
