<template>
  <div id="project-content">
    <ProjectTitle :title="projectTitle.title" :caption="projectTitle.caption"/>
    <ProjectIntro
      :image="projectIntro.image"
      :general="projectIntro.general"
      :tools="projectIntro.tools"
      :skills="projectIntro.skills"
    />

    <div class="box">
      <h3>Showcase</h3>
      <div class="row">
        <div class="6u 12u(mobilep)">
          <span class="image fit">
            <a href="https://i.imgur.com/MZm88oW.jpg" target="_blank">
              <img src="https://i.imgur.com/MZm88oW.jpg" alt>
            </a>
          </span>
          <span class="image fit">
            <a href="https://i.imgur.com/B43lBiu.png" target="_blank">
              <img src="https://i.imgur.com/B43lBiu.png" alt>
            </a>
          </span>
          <span class="image fit">
            <a href="https://i.imgur.com/qnC5HLp.png" target="_blank">
              <img src="https://i.imgur.com/qnC5HLp.png" alt>
            </a>
          </span>
          <span class="image fit">
            <a href="https://i.imgur.com/rpkWALS.png" target="_blank">
              <img src="https://i.imgur.com/rpkWALS.png" alt>
            </a>
          </span>
        </div>
        <div class="6u 12u(mobilep)">
          <span class="image fit">
            <a href="https://i.imgur.com/izUzoxH.png" target="_blank">
              <img src="https://i.imgur.com/izUzoxH.png" alt>
            </a>
          </span>
          <span class="image fit">
            <a href="https://i.imgur.com/MABlxM8.png" target="_blank">
              <img src="https://i.imgur.com/MABlxM8.png" alt>
            </a>
          </span>
          <span class="image fit">
            <a href="https://i.imgur.com/XwX627U.png" target="_blank">
              <img src="https://i.imgur.com/XwX627U.png" alt>
            </a>
          </span>
        </div>
      </div>
    </div>

    <ProjectLinks :links="projectLinks.links"/>
  </div>
</template>

<script>
import ProjectTitle from "@/components/ProjectTitle.vue";
import ProjectIntro from "@/components/ProjectIntro.vue";
import ProjectLinks from "@/components/ProjectLinks.vue";

export default {
  metaInfo: {
    title: "Sleep Visualization",
    titleTemplate: "Tommy Deng - %s",
    meta: [
      {
        vmid: "description",
        name: "description",
        content: "My terrible sleep habits visualized."
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
        title: `Sleep visualization`,
        caption: `My terrible sleep habits visualized.`
      },
      projectIntro: {
        image: `https://i.imgur.com/MZm88oW.jpg`,
        tools: [
          { name: `C++` },
          {
            name: `CImg library`,
            link: `http://www.cimg.eu/`
          },
          { name: `Adobe Photoshop` }
        ],
        skills: [`Image generation`, `Design`, `Data visualization`]
      },
      projectLinks: {
        links: [
          {
            name: `Reddit post`,
            ref: `https://www.reddit.com/r/dataisbeautiful/comments/6jtxrn/my_terrible_sleep_habits_visualized_oc/`
          },
          {
            name: `Github repository`,
            ref: `https://github.com/sttic/Sleep-Visualization`
          }
        ]
      }
    };
  }
};
</script>
