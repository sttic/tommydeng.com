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
      <h3>Method</h3>
      <ol>
        <li>Create the background element in Cinema 4D from importing a world save</li>
        <li>Create the foreground posed-character in Cinema 4D by adjusting joints</li>
        <li>Render and bring into Photoshop</li>
        <li>Composite image elements together</li>
        <li>Color correct and grade</li>
      </ol>
    </div>

    <div class="box">
      <h3>Showcase</h3>
      <ProjectImageArray :images="projectImageArray.avatars"/>
      <ProjectImageArray :images="projectImageArray.celebratory"/>
      <ProjectImageArray :images="projectImageArray.thumbnails"/>
    </div>
  </div>
</template>

<script>
import ProjectTitle from "@/components/ProjectTitle.vue";
import ProjectIntro from "@/components/ProjectIntro.vue";
import ProjectImageArray from "@/components/ProjectImageArray.vue";

export default {
  components: {
    ProjectTitle,
    ProjectIntro,
    ProjectImageArray
  },
  created() {
    this.setDocumentTitle(this.documentTitle);
  },
  data() {
    return {
      documentTitle: `Minecraft Art`,
      projectTitle: {
        title: `Minecraft Art`,
        caption: `Digital art that I made for others.`
      },
      projectIntro: {
        image: `https://i.imgur.com/sZGC81P.jpg`,
        tools: [{ name: `Cinema 4D` }, { name: `Photoshop` }],
        skills: [`3D graphics`, `Photomanipulation`]
      },
      projectImageArray: {
        avatars: [
          `https://i.imgur.com/HWp5gTR.jpg`,
          `https://i.imgur.com/VVflmG8.jpg`,
          `https://i.imgur.com/I7k2Cd4.jpg`,
          `https://i.imgur.com/xWiZzU9.jpg`,
          `https://i.imgur.com/S8hvr71.jpg`,
          `https://i.imgur.com/HFFn8Ne.jpg`
        ],
        celebratory: [
          `https://i.imgur.com/sZGC81P.jpg`,
          `https://i.imgur.com/N6P1RDE.gif`,
          `https://i.imgur.com/CqSL2MG.png`
        ],
        thumbnails: [
          `https://i.imgur.com/MBXpt2V.png`,
          `https://i.imgur.com/qsmRXvC.png`,
          `https://i.imgur.com/VnNjZPC.png`,
          `https://i.imgur.com/DRf7AL8.png`,
          `https://i.imgur.com/PpxWd11.png`,
          `https://i.imgur.com/yZm8nfM.png`,
          `https://i.imgur.com/viKZJcw.png`,
          `https://i.imgur.com/flooX9O.png`,
          `https://i.imgur.com/UEsGXPN.png`
        ]
      }
    };
  }
};
</script>
