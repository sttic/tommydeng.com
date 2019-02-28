<template>
  <div id="project-content">
    <ProjectTitle :title="projectTitle.title" :caption="projectTitle.caption"/>
    <ProjectImageArray :images="projectImageArray.moons"/>
    <ProjectIntro
      :image="projectIntro.image"
      :general="projectIntro.general"
      :tools="projectIntro.tools"
      :skills="projectIntro.skills"
    />
    <ProjectText :title="projectText.title" :text="projectText.text"/>

    <div class="box">
      <h3>Thoughts</h3>
      <p>The averaging of frames had a massive impact on the final image quality, particularly the noise of it.</p>
      <div style="text-align:center;">
        <img src="https://i.imgur.com/EnJl1ie.png">
        <p>With frame averaging.</p>
        <img src="https://i.imgur.com/cmGR4Kx.png">
        <p>Without frame averaging.</p>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectTitle from "@/components/ProjectTitle.vue";
import ProjectImageArray from "@/components/ProjectImageArray.vue";
import ProjectIntro from "@/components/ProjectIntro.vue";
import ProjectText from "@/components/ProjectText.vue";

export default {
  components: {
    ProjectTitle,
    ProjectImageArray,
    ProjectIntro,
    ProjectText
  },
  created() {
    this.setDocumentTitle(this.documentTitle);
  },
  data() {
    return {
      documentTitle: `Moon Photos`,
      projectTitle: {
        title: `Moon Photos`,
        caption: `To the moon!`
      },
      projectImageArray: {
        moons: [
          `https://i.imgur.com/cuW7U9u.png`,
          `https://i.imgur.com/1MV0JY8.png`,
          `https://i.imgur.com/EnJl1ie.png`
        ]
      },
      projectIntro: {
        general: `I attempted to capture the highest quality moon photos possible with the entry-level camera setup I had.`,
        tools: [
          { name: `Photoshop` },
          {
            name: `Magic Lantern`,
            link: `https://www.magiclantern.fm/`
          },
          { name: `Canon T5i/700D` },
          { name: `Canon 55-200mm f5.6 lens` }
        ],
        skills: [`Image manipulation`, `Photography`]
      },
      projectText: {
        title: `Method`,
        text: `The process I used was to record the moon for a few seconds using the raw video mode of Magic Lantern at maximum crop. This helps preserve as much information as possible with its high bit-rate. Due to camera limitations, recordings go up to roughly 5 seconds in length. Next, I selected 16 frames to process. I aligned the images and then averaged them before applying a slight sharpening and simple color correction. This is necessary as the moon moves across the sky slightly, vibrations are magnified with high zoom levels, and there are many atmospheric effects that disturb the image.`
      }
    };
  }
};
</script>
