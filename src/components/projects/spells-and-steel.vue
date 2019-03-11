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
      <h3>Poster</h3>
      <span class="image fit">
        <a href="https://i.imgur.com/DFC4s5M.jpg" target="_blank">
          <img src="https://i.imgur.com/DFC4s5M.jpg">
        </a>
      </span>
    </div>

    <div class="box">
      <div style="text-align:center;">
        <h3>Montage</h3>
        <video preload="auto" autoplay="autoplay" loop="loop" width="100%">
          <source src="https://i.imgur.com/DjYGhsW.mp4" type="video/mp4">
        </video>
      </div>
    </div>

    <ProjectShowcase :title="projectShowcase.title" :images="projectShowcase.images"/>
  </div>
</template>

<script>
import ProjectTitle from "@/components/ProjectTitle.vue";
import ProjectIntro from "@/components/ProjectIntro.vue";
import ProjectShowcase from "@/components/ProjectShowcase.vue";

export default {
  metaInfo: {
    title: "Spells and Steel",
    titleTemplate: "Tommy Deng - %s",
    meta: [
      {
        vmid: "description",
        name: "description",
        content: `A silly short film filled with magic and action. This film project based off of Film Riot's "Portal Gun."`
      }
    ]
  },
  components: {
    ProjectTitle,
    ProjectIntro,
    ProjectShowcase
  },
  data() {
    return {
      projectTitle: {
        title: `Spells and Steel`,
        caption: `A silly short film filled with magic and action.`
      },
      projectIntro: {
        image: `https://i.imgur.com/bbgMk1Y.png`,
        general: `Film project based off of Film Riot's "Portal Gun."`,
        tools: [
          { name: `Premiere Pro` },
          { name: `After Effects` },
          { name: `Photoshop` },
          { name: `Audition` },
          { name: `Cinema 4D` },
          { name: `Canon T5i/700D with kit lens` }
        ],
        skills: [
          `Video editing`,
          `Visual effects`,
          `Photo manipulation`,
          `3D graphics`,
          `Directing`,
          `Cinematography`
        ]
      },
      projectShowcase: {
        images: [
          `https://i.imgur.com/3POZbTu.png`,
          `https://i.imgur.com/tOcSkDu.png`,
          `https://i.imgur.com/efU5OdS.png`,
          `https://i.imgur.com/5qf8OFC.png`,
          `https://i.imgur.com/2r6xo11.png`,
          `https://i.imgur.com/GNfAnzp.png`,
          `https://i.imgur.com/s0zRUS1.png`,
          `https://i.imgur.com/MvXLb5M.png`,
          `https://i.imgur.com/duzklIP.png`,
          `https://i.imgur.com/pl3RWLD.png`,
          `https://i.imgur.com/aQzJxNp.png`,
          `https://i.imgur.com/00ArAEX.png`,
          `https://i.imgur.com/ex6aafR.png`,
          `https://i.imgur.com/I6e5gUn.png`,
          `https://i.imgur.com/bbgMk1Y.png`
        ]
      }
    };
  }
};
</script>
