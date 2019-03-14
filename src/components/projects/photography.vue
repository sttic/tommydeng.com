<template>
  <div id="project-content">
    <ProjectTitle :title="projectTitle.title" :caption="projectTitle.caption"/>
    <ProjectIntro
      :image="projectIntro.image"
      :general="projectIntro.general"
      :tools="projectIntro.tools"
      :skills="projectIntro.skills"
    />
    <ProjectShowcase :title="projectShowcase.title" :images="projectShowcase.images"/>
  </div>
</template>

<script>
import ProjectTitle from "@/components/ProjectTitle.vue";
import ProjectIntro from "@/components/ProjectIntro.vue";
import ProjectShowcase from "@/components/ProjectShowcase.vue";

export default {
  metaInfo: {
    title: "Photography",
    titleTemplate: "Tommy Deng - %s",
    meta: [
      { vmid: "description", name: "description", content: "Pretty pixels?" }
    ]
  },
  components: {
    ProjectTitle,
    ProjectIntro,
    ProjectShowcase
  },
  data() {
    return {
      projectTitle: {
        title: `Photography`,
        caption: `Pretty pixels?`
      },
      projectIntro: {
        image: require("@/assets/images/projects/photography/qr7ywEy.jpg"),
        tools: [{ name: `Photoshop` }, { name: `Canon T5i/700D` }],
        skills: [`Photomanipulation`, `Cinematography`]
      },
      projectShowcase: {
        title: `Showcase`,
        images: [
          require("@/assets/images/projects/photography/qr7ywEy.jpg"),
          require("@/assets/images/projects/photography/JOx1cfb.jpg"),
          require("@/assets/images/projects/photography/FvQSCTQ.jpg")
        ]
      }
    };
  }
};
</script>
