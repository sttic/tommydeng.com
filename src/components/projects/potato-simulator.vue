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
              <a :href="require('@/assets/images/projects/potato-simulator/P5LgVBt.png')" target="_blank">
                <img :src="require('@/assets/images/projects/potato-simulator/P5LgVBt.png')">
              </a>
            </span>
          </div>
          <div class="4u">
            <span class="image fit">
              <a :href="require('@/assets/images/projects/potato-simulator/x5zCEDt.jpg')" target="_blank">
                <img :src="require('@/assets/images/projects/potato-simulator/x5zCEDt.jpg')">
              </a>
            </span>
          </div>
          <div class="4u">
            <span class="image fit">
              <a :href="require('@/assets/images/projects/potato-simulator/zyF7Llc.jpg')" target="_blank">
                <img :src="require('@/assets/images/projects/potato-simulator/zyF7Llc.jpg')">
              </a>
            </span>
          </div>
        </div>
        <div class="row no-collapse 50% uniform">
          <div class="4u">
            <span class="image fit">
              <a :href="require('@/assets/images/projects/potato-simulator/HzzSg51.png')" target="_blank">
                <img :src="require('@/assets/images/projects/potato-simulator/HzzSg51.png')">
              </a>
            </span>
          </div>
          <div class="4u">
            <span class="image fit">
              <a :href="require('@/assets/images/projects/potato-simulator/eMxprvQ.png')" target="_blank">
                <img :src="require('@/assets/images/projects/potato-simulator/eMxprvQ.png')">
              </a>
            </span>
          </div>
          <div class="4u">
            <span class="image fit">
              <a :href="require('@/assets/images/projects/potato-simulator/bkcLjEM.png')" target="_blank">
                <img :src="require('@/assets/images/projects/potato-simulator/bkcLjEM.png')">
              </a>
            </span>
          </div>
        </div>
        <div class="row no-collapse 50% uniform">
          <div class="4u">
            <span class="image fit">
              <a :href="require('@/assets/images/projects/potato-simulator/rgrVjhl.png')" target="_blank">
                <img :src="require('@/assets/images/projects/potato-simulator/rgrVjhl.png')">
              </a>
            </span>
          </div>
          <div class="4u">
            <span class="image fit">
              <a :href="require('@/assets/images/projects/potato-simulator/a83U1vD.png')" target="_blank">
                <img :src="require('@/assets/images/projects/potato-simulator/a83U1vD.png')">
              </a>
            </span>
          </div>
          <div class="4u">
            <span class="image fit">
              <a :href="require('@/assets/images/projects/potato-simulator/h1VGY18.png')" target="_blank">
                <img :src="require('@/assets/images/projects/potato-simulator/h1VGY18.png')">
              </a>
            </span>
          </div>
        </div>
        <div class="row no-collapse 50% uniform">
          <div class="4u">
            <span class="image fit">
              <a :href="require('@/assets/images/projects/potato-simulator/mvxXMGS.png')" target="_blank">
                <img :src="require('@/assets/images/projects/potato-simulator/mvxXMGS.png')">
              </a>
            </span>
          </div>
          <div class="4u">
            <span class="image fit">
              <a :href="require('@/assets/images/projects/potato-simulator/KZTOgTK.png')" target="_blank">
                <img :src="require('@/assets/images/projects/potato-simulator/KZTOgTK.png')">
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
    title: "Potato Simulator",
    titleTemplate: "Tommy Deng - %s",
    meta: [
      {
        vmid: "description",
        name: "description",
        content:
          "A silly Unity 3D game that revolves around the player being a high-speed,<br>tumbling potato mindlessly rolling around to explore the world. Potato is not a typical game one might come along. There are no definite rules, there are not clear objectives, and there is no promise of an end. Potato is a game where the player, a high-speed tumbling potato, mindlessly rolls around exploring the world."
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
        title: `Potato Simulator`,
        caption: `A silly Unity 3D game that revolves around the player being a high-speed,<br>tumbling potato mindlessly rolling around to explore the world.`
      },
      projectIntro: {
        image: require("@/assets/images/projects/potato-simulator/P5LgVBt.png"),
        general: `Potato is not a typical game one might come along. There are no definite rules, there are not clear objectives, and there is no promise of an end. Potato is a game where the player, a high-speed tumbling potato, mindlessly rolls around exploring the world.`,
        tools: [{ name: `C#` }, { name: `Unity 3D` }],
        skills: [`Game development`, `Level design`]
      },
      projectLinks: {
        links: [
          {
            name: `Github repository`,
            ref: `https://github.com/sttic/Potato-Simulator`
          }
        ]
      }
    };
  }
};
</script>
