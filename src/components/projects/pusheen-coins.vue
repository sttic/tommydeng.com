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
  metaInfo: {
    title: "Pusheen Coins",
    titleTemplate: "Tommy Deng - %s",
    meta: [
      {
        vmid: "description",
        name: "description",
        content: "3D printed coins based on a cute Internet cat named Pusheen."
      }
    ]
  },
  components: {
    ProjectTitle,
    ProjectIntro,
    ProjectText,
    ProjectShowcase
  },
  data() {
    return {
      projectTitle: {
        title: `Pusheen Coins`,
        caption: `Coins based on a cute Internet cat named Pusheen.`
      },
      projectIntro: {
        image: require("@/assets/images/projects/pusheen-coins/uBfj15Q.png"),
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
          require("@/assets/images/projects/pusheen-coins/uBfj15Q.png"),
          require("@/assets/images/projects/pusheen-coins/uMDzScm.png"),
          require("@/assets/images/projects/pusheen-coins/h7dNM7x.gif"),
          require("@/assets/images/projects/pusheen-coins/YvEV7GO.png"),
          require("@/assets/images/projects/pusheen-coins/il8XfPL.png"),
          require("@/assets/images/projects/pusheen-coins/BD4Mj6D.png"),
          require("@/assets/images/projects/pusheen-coins/RwAqPjp.png")
        ]
      }
    };
  }
};
</script>
