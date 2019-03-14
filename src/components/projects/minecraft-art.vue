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
  metaInfo: {
    title: "Minecraft Art",
    titleTemplate: "Tommy Deng - %s",
    meta: [
      {
        vmid: "description",
        name: "description",
        content: "Digital art that I made for others."
      }
    ]
  },
  components: {
    ProjectTitle,
    ProjectIntro,
    ProjectImageArray
  },
  data() {
    return {
      projectTitle: {
        title: `Minecraft Art`,
        caption: `Digital art that I made for others.`
      },
      projectIntro: {
        image: require("@/assets/images/projects/minecraft-art/sZGC81P.jpg"),
        tools: [{ name: `Cinema 4D` }, { name: `Photoshop` }],
        skills: [`3D graphics`, `Photomanipulation`]
      },
      projectImageArray: {
        avatars: [
          require("@/assets/images/projects/minecraft-art/HWp5gTR.jpg"),
          require("@/assets/images/projects/minecraft-art/VVflmG8.jpg"),
          require("@/assets/images/projects/minecraft-art/I7k2Cd4.jpg"),
          require("@/assets/images/projects/minecraft-art/xWiZzU9.jpg"),
          require("@/assets/images/projects/minecraft-art/S8hvr71.jpg"),
          require("@/assets/images/projects/minecraft-art/HFFn8Ne.jpg")
        ],
        celebratory: [
          require("@/assets/images/projects/minecraft-art/sZGC81P.jpg"),
          require("@/assets/images/projects/minecraft-art/N6P1RDE.gif"),
          require("@/assets/images/projects/minecraft-art/CqSL2MG.png")
        ],
        thumbnails: [
          require("@/assets/images/projects/minecraft-art/MBXpt2V.png"),
          require("@/assets/images/projects/minecraft-art/qsmRXvC.png"),
          require("@/assets/images/projects/minecraft-art/VnNjZPC.png"),
          require("@/assets/images/projects/minecraft-art/DRf7AL8.png"),
          require("@/assets/images/projects/minecraft-art/PpxWd11.png"),
          require("@/assets/images/projects/minecraft-art/yZm8nfM.png"),
          require("@/assets/images/projects/minecraft-art/viKZJcw.png"),
          require("@/assets/images/projects/minecraft-art/flooX9O.png"),
          require("@/assets/images/projects/minecraft-art/UEsGXPN.png")
        ]
      }
    };
  }
};
</script>
