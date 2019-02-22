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
          <source src="https://i.imgur.com/PJkBOEM.mp4" type="video/mp4">
        </video>
      </div>
    </div>

    <ProjectShowcase :images="projectShowcase.images"/>
  </div>
</template>

<script>
import ProjectTitle from "@/components/ProjectTitle.vue";
import ProjectIntro from "@/components/ProjectIntro.vue";
import ProjectShowcase from "@/components/ProjectShowcase.vue";

export default {
  components: {
    ProjectTitle,
    ProjectShowcase,
    ProjectIntro
  },
  data() {
    return {
      projectTitle: {
        title: `Synthetic Data Generator`,
        caption: `Automating Blender with Python to render photorealistic images/videos of racing tracks to be used as training data and driving simulation of an autonomous vehicle.`
      },
      projectIntro: {
        image: `https://i.imgur.com/oolcato.png`,
        general: `This is an in-progress project to train multiple networks for an autonomous vehicle to compete in the International Autonomous Robot Racing Competition (<a href="https://robotracing.wordpress.com/">IARRC</a>).`,
        tools: [
          { name: `Python` },
          { name: `Blender`, link: `https://www.blender.org/` },
          { name: `Pillow`, link: `http://python-pillow.org` }
        ],
        skills: [`Computer Graphics`, `Image Processing`]
      },
      projectShowcase: {
        images: [
          `https://i.imgur.com/oolcato.png`,
          `https://i.imgur.com/lqK6bR1.png`,
          `https://i.imgur.com/Vo6TP6N.png`,
          `https://i.imgur.com/XSrW27p.png`,
          `https://i.imgur.com/jRDCWtq.png`,
          `https://i.imgur.com/3pXdmmt.png`
        ]
      }
    };
  }
};
</script>
