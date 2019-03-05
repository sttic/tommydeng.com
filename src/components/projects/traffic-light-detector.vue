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
      <div class="box alt">
        <div class="row no-collapse 50% uniform">
          <div class="4u">
            <span class="image fit">
              <a href="https://i.imgur.com/BdR0gXC.jpg" target="_blank">
                <img src="https://i.imgur.com/BdR0gXC.jpg" alt>
              </a>
            </span>
          </div>
          <div class="4u">
            <span class="image fit">
              <a href="https://i.imgur.com/3jgnP5t.jpg" target="_blank">
                <img src="https://i.imgur.com/3jgnP5t.jpg" alt>
              </a>
            </span>
          </div>
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
    title: "Traffic Light Detector",
    titleTemplate: "Tommy Deng - %s"
  },
  components: {
    ProjectTitle,
    ProjectIntro,
    ProjectLinks
  },
  data() {
    return {
      projectTitle: {
        title: `Traffic Light Detector`,
        caption: `A computer vision system to detect traffic light states.`
      },
      projectIntro: {
        image: `https://i.imgur.com/PSrbi1J.jpg`,
        general: `A computer vision system to detect traffic light states in real-time.`,
        tools: [
          { name: `Python` },
          {
            name: `OpenCV`,
            link: `https://opencv.org/`
          }
        ],
        skills: [`Computer Vision`, `Image Processing`]
      },
      projectLinks: {
        links: [
          {
            name: `Github repository`,
            ref: `https://github.com/OttaboticsRobotRacing/traffic-light-detector`
          }
        ]
      }
    };
  }
};
</script>
