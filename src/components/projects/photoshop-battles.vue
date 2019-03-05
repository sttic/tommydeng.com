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
      <h3>Battle #257: Classic Car</h3>
      <h4 style="text-align:center">Original</h4>
      <span class="image fit">
        <img src="https://i.imgur.com/mOGwh8V.jpg" alt>
      </span>
      <br>
      <h4 style="text-align:center">Shopped</h4>
      <span class="image fit">
        <img src="https://i.imgur.com/O80byZ0.jpg" alt>
      </span>
      <span class="image fit">
        <img src="https://i.imgur.com/4DcWIQd.jpg" alt>
      </span>
    </div>

    <div class="box">
      <h3>Battle #217: Vulture</h3>
      <h4 style="text-align:center">Original</h4>
      <span class="image fit">
        <img src="https://i.imgur.com/KkTVtJO.jpg" alt>
      </span>
      <br>
      <h4 style="text-align:center">Shopped</h4>
      <span class="image fit">
        <img src="http://i.imgur.com/8xp3voq.png" alt>
      </span>
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
    title: "Photoshop Battles",
    titleTemplate: "Tommy Deng - %s"
  },
  components: {
    ProjectTitle,
    ProjectIntro,
    ProjectLinks
  },
  data() {
    return {
      projectTitle: {
        title: `Photoshop Battles`,
        caption: `Friendly Photoshop competitions at <a href="https://www.reddit.com/r/photoshopbattles/">/r/photoshopbattles</a> on Reddit.`
      },
      projectIntro: {
        image: `https://i.imgur.com/0fujxDx.jpg`,
        tools: [{ name: `Photoshop` }],
        skills: [`Photo manipulation`]
      },
      projectLinks: {
        links: [
          {
            name: `Battle #217`,
            ref: `https://www.reddit.com/r/photoshopbattles/comments/4pxwkw/battle_217_vulture_via_previous_winner_twerpless/`
          },
          {
            name: `Battle #257`,
            ref: `https://www.reddit.com/r/photoshopbattles/comments/68g116/battle_257_classic_car_via_previous_winner/`
          }
        ]
      }
    };
  }
};
</script>
