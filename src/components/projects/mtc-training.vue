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
  components: {
    ProjectTitle,
    ProjectIntro,
    ProjectShowcase
  },
  created() {
    this.setDocumentTitle(this.documentTitle);
  },
  data() {
    return {
      documentTitle: `MTC Training`,
      projectTitle: {
        title: `MTC Training`,
        caption: `Training done at the uOttawa's Brunsfield Centre.`
      },
      projectIntro: {
        image: `https://engineering.uottawa.ca/sites/default/files/brunsfieldlandingpage_0.jpg`,
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
          `https://i.imgur.com/pTPdA0f.jpg`,
          `https://i.imgur.com/1EfcrjI.jpg`
        ]
      }
    };
  }
};
</script>
