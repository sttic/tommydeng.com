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
              <a href="https://i.imgur.com/P5LgVBt.png" target="_blank">
                <img src="https://i.imgur.com/P5LgVBt.png" alt>
              </a>
            </span>
          </div>
          <div class="4u">
            <span class="image fit">
              <a href="https://i.imgur.com/x5zCEDt.jpg" target="_blank">
                <img src="https://i.imgur.com/x5zCEDt.jpg" alt>
              </a>
            </span>
          </div>
          <div class="4u">
            <span class="image fit">
              <a href="https://i.imgur.com/zyF7Llc.jpg" target="_blank">
                <img src="https://i.imgur.com/zyF7Llc.jpg" alt>
              </a>
            </span>
          </div>
        </div>
        <div class="row no-collapse 50% uniform">
          <div class="4u">
            <span class="image fit">
              <a href="https://i.imgur.com/HzzSg51.png" target="_blank">
                <img src="https://i.imgur.com/HzzSg51.png" alt>
              </a>
            </span>
          </div>
          <div class="4u">
            <span class="image fit">
              <a href="https://i.imgur.com/eMxprvQ.png" target="_blank">
                <img src="https://i.imgur.com/eMxprvQ.png" alt>
              </a>
            </span>
          </div>
          <div class="4u">
            <span class="image fit">
              <a href="https://i.imgur.com/bkcLjEM.png" target="_blank">
                <img src="https://i.imgur.com/bkcLjEM.png" alt>
              </a>
            </span>
          </div>
        </div>
        <div class="row no-collapse 50% uniform">
          <div class="4u">
            <span class="image fit">
              <a href="https://i.imgur.com/rgrVjhl.png" target="_blank">
                <img src="https://i.imgur.com/rgrVjhl.png" alt>
              </a>
            </span>
          </div>
          <div class="4u">
            <span class="image fit">
              <a href="https://i.imgur.com/a83U1vD.png" target="_blank">
                <img src="https://i.imgur.com/a83U1vD.png" alt>
              </a>
            </span>
          </div>
          <div class="4u">
            <span class="image fit">
              <a href="https://i.imgur.com/h1VGY18.png" target="_blank">
                <img src="https://i.imgur.com/h1VGY18.png" alt>
              </a>
            </span>
          </div>
        </div>
        <div class="row no-collapse 50% uniform">
          <div class="4u">
            <span class="image fit">
              <a href="https://i.imgur.com/mvxXMGS.png" target="_blank">
                <img src="https://i.imgur.com/mvxXMGS.png" alt>
              </a>
            </span>
          </div>
          <div class="4u">
            <span class="image fit">
              <a href="https://i.imgur.com/KZTOgTK.png" target="_blank">
                <img src="https://i.imgur.com/KZTOgTK.png" alt>
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
        image: `https://i.imgur.com/P5LgVBt.png`,
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
