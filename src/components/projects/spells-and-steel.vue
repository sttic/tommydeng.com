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
        <a :href="require('@/assets/images/projects/spells-and-steel/DFC4s5M.jpg')" target="_blank">
          <img :src="require('@/assets/images/projects/spells-and-steel/DFC4s5M.jpg')">
        </a>
      </span>
    </div>

    <div class="box">
      <div style="text-align:center;">
        <h3>Montage</h3>
        <video preload="auto" autoplay="autoplay" loop="loop" width="100%">
          <source :src="require('@/assets/media/projects/spells-and-steel/DjYGhsW.mp4')" type="video/mp4">
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
        image: require("@/assets/images/projects/spells-and-steel/bbgMk1Y.png"),
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
          require("@/assets/images/projects/spells-and-steel/3POZbTu.png"),
          require("@/assets/images/projects/spells-and-steel/tOcSkDu.png"),
          require("@/assets/images/projects/spells-and-steel/efU5OdS.png"),
          require("@/assets/images/projects/spells-and-steel/5qf8OFC.png"),
          require("@/assets/images/projects/spells-and-steel/2r6xo11.png"),
          require("@/assets/images/projects/spells-and-steel/GNfAnzp.png"),
          require("@/assets/images/projects/spells-and-steel/s0zRUS1.png"),
          require("@/assets/images/projects/spells-and-steel/MvXLb5M.png"),
          require("@/assets/images/projects/spells-and-steel/duzklIP.png"),
          require("@/assets/images/projects/spells-and-steel/pl3RWLD.png"),
          require("@/assets/images/projects/spells-and-steel/aQzJxNp.png"),
          require("@/assets/images/projects/spells-and-steel/00ArAEX.png"),
          require("@/assets/images/projects/spells-and-steel/ex6aafR.png"),
          require("@/assets/images/projects/spells-and-steel/I6e5gUn.png"),
          require("@/assets/images/projects/spells-and-steel/bbgMk1Y.png")
        ]
      }
    };
  }
};
</script>
