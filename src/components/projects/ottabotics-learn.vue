<template>
  <div id="project-content">
    <ProjectTitle :title="projectTitle.title" :caption="projectTitle.caption"/>
    <ProjectIntro
      :image="projectIntro.image"
      :general="projectIntro.general"
      :tools="projectIntro.tools"
      :skills="projectIntro.skills"
    />
  </div>
</template>

<script>
import ProjectTitle from "@/components/ProjectTitle.vue";
import ProjectIntro from "@/components/ProjectIntro.vue";

export default {
  metaInfo: {
    title: "Ottabotics Learning Project",
    titleTemplate: "Tommy Deng - %s",
    meta: [
      {
        vmid: "description",
        name: "description",
        content:
          "An introductory team project for uOttawa's robotics club. The project was to build a simple autonomous vehicle using limited hardware."
      }
    ]
  },
  components: {
    ProjectTitle,
    ProjectIntro
  },
  data() {
    return {
      projectTitle: {
        title: `Ottabotics Learning Project`,
        caption: `An introductory team project for uOttawa's robotics club.`
      },
      projectIntro: {
        image: `https://i.imgur.com/5TTl1fA.jpg`,
        general: `The project was to build a simple autonomous vehicle, using limited hardware, that is capable of:
          <br><br>
          <ol>
            <li>Detecting and avoiding the edge of a table</li>
            <li>Pushing objects off the table</li>
            <li>Avoiding objects on the table</li>
            <li>Pushing other vehicles off the table</li>
            <li>Avoiding other vehicles on the table</li>
          </ol>`,
        tools: [
          { name: `C` },
          { name: `Arduino` },
          { name: `Solidworks` },
          { name: `Electronics` }
        ],
        skills: [
          `Teamwork`,
          `3D modelling and printing`,
          `Electrical`,
          `Programming for Arduino`
        ]
      }
    };
  }
};
</script>
