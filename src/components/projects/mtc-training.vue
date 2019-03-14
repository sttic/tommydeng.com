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
    title: "MTC Training",
    titleTemplate: "Tommy Deng - %s",
    meta: [
      {
        vmid: "description",
        name: "description",
        content: "Training done at the uOttawa's Brunsfield Centre."
      }
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
        title: `MTC Training`,
        caption: `Training done at the uOttawa's Brunsfield Centre.`
      },
      projectIntro: {
        image: require("@/assets/images/projects/mtc-training/brunsfieldlandingpage_0.jpg"),
        title: `Completed`,
        general: `<ul><li>Basic training</li><li>Mill training</li></ul>`,
        tools: [
          { name: `Bandsaw` },
          { name: `Drill press` },
          { name: `Mill` },
          { name: `Spot welder` },
          { name: `...` }
        ],
        skills: [
          `Shop awareness`,
          `Machining experience`,
          `Precision milling`,
          `Metal working`
        ]
      },
      projectShowcase: {
        title: `Showcase`,
        images: [
          require("@/assets/images/projects/mtc-training/pTPdA0f.jpg"),
          require("@/assets/images/projects/mtc-training/1EfcrjI.jpg")
        ]
      }
    };
  }
};
</script>
