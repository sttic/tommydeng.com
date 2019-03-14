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
          <source
            :src="require('@/assets/media/projects/synthetic-data-generator/PJkBOEM.mp4')"
            type="video/mp4"
          >
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
  metaInfo: {
    title: "Synthetic Data Generator",
    titleTemplate: "Tommy Deng - %s",
    meta: [
      {
        vmid: "description",
        name: "description",
        content:
          "Automating Blender with Python to render photorealistic images/videos of racing tracks to be used as training data and driving simulation of an autonomous vehicle. This is an in-progress project to train multiple networks for an autonomous vehicle to compete in the International Autonomous Robot Racing Competition (IARRC)."
      }
    ]
  },
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
        image: require("@/assets/images/projects/synthetic-data-generator/oolcato.png"),
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
          require("@/assets/images/projects/synthetic-data-generator/oolcato.png"),
          require("@/assets/images/projects/synthetic-data-generator/lqK6bR1.png"),
          require("@/assets/images/projects/synthetic-data-generator/Vo6TP6N.png"),
          require("@/assets/images/projects/synthetic-data-generator/XSrW27p.png"),
          require("@/assets/images/projects/synthetic-data-generator/jRDCWtq.png"),
          require("@/assets/images/projects/synthetic-data-generator/3pXdmmt.png")
        ]
      }
    };
  }
};
</script>
