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
      <h3>Demo</h3>
      <div class="box alt">
        <video preload="auto" autoplay="autoplay" loop="loop" width="100%">
          <source src="https://i.imgur.com/hLsjyED.mp4" type="video/mp4">
        </video>
      </div>
    </div>

    <ProjectText :title="projectText.title" :text="projectText.text"/>
    <ProjectLinks :links="projectLinks.links"/>
  </div>
</template>

<script>
import ProjectTitle from "@/components/ProjectTitle.vue";
import ProjectIntro from "@/components/ProjectIntro.vue";
import ProjectText from "@/components/ProjectText.vue";
import ProjectLinks from "@/components/ProjectLinks.vue";

export default {
  components: {
    ProjectTitle,
    ProjectIntro,
    ProjectText,
    ProjectLinks
  },
  created() {
    this.setDocumentTitle(this.documentTitle);
  },
  data() {
    return {
      documentTitle: `Interframe Compression`,
      projectTitle: {
        title: `Interframe Compression`,
        caption: `A system to send only the difference between the current and previous image in a video feed to reduce bandwidth usage in video streaming.`
      },
      projectIntro: {
        image: `https://i.imgur.com/LaqL9Nw.png`,
        general: `This interframe compression system is to send only the difference between the current and previous image in a video feed to reduce bandwidth usage in video streaming.`,
        tools: [
          { name: `Python` },
          {
            name: `OpenCV`,
            link: `https://opencv.org/`
          }
        ],
        skills: [`Image Processing`]
      },
      projectText: {
        title: `Method`,
        text: `To find the differences, it first compares the present present and previous frame with OpenCV's <code>absdiff</code> function which will produce a 'soft mask' (as seen in the demonstration). Next, that is thresholded for values greater than zero and used as a mask for the current image. The reconstruction is formed by continuously layering on the differences between each frame.`
      },
      projectLinks: {
        links: [
          {
            name: `Github repository`,
            ref: `https://github.com/OttaboticsRobotRacing/POC/tree/tom/difference-packet/video`
          }
        ]
      }
    };
  }
};
</script>
