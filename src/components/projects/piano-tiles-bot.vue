<template>
  <div id="project-content">
    <ProjectTitle :title="projectTitle.title" :caption="projectTitle.caption"/>
    <ProjectIntro
      :image="projectIntro.image"
      :general="projectIntro.general"
      :tools="projectIntro.tools"
      :skills="projectIntro.skills"
    />
    <ProjectShowcase :title="projectShowcase.title" :images="projectShowcase.images"/>
    <ProjectText :title="projectText.title" :text="projectText.text"/>
    <ProjectLinks :links="projectLinks.links"/>
  </div>
</template>

<script>
import ProjectTitle from "@/components/ProjectTitle.vue";
import ProjectIntro from "@/components/ProjectIntro.vue";
import ProjectShowcase from "@/components/ProjectShowcase.vue";
import ProjectText from "@/components/ProjectText.vue";
import ProjectLinks from "@/components/ProjectLinks.vue";

export default {
  metaInfo: {
    title: "Piano Tiles Bot",
    titleTemplate: "Tommy Deng - %s",
    meta: [
      {
        vmid: "description",
        name: "description",
        content: `Automated gameplay of "Piano Tiles" mobile game with PyAutoGUI.`
      }
    ]
  },
  components: {
    ProjectTitle,
    ProjectIntro,
    ProjectShowcase,
    ProjectText,
    ProjectLinks
  },
  data() {
    return {
      projectTitle: {
        title: `Piano Tiles Bot`,
        caption: `Automated gameplay of "Piano Tiles" mobile game with PyAutoGUI.`
      },
      projectIntro: {
        image: require("@/assets/images/projects/piano-tiles-bot/LRvj1Rk.png"),
        general: `Piano Tiles is a mobile rhythm game where the goal is to only tap only the black (piano) tiles as they move across the screen at a steadily increasing pace. This project automates this and plays in place of the user with super-human performance.`,
        tools: [
          { name: `Python` },
          {
            name: `PyAutoGUI`,
            link: `https://pyautogui.readthedocs.io/en/latest/`
          },
          { name: `Pillow`, link: `http://python-pillow.org` }
        ],
        skills: [`General User Input Automation`, `Image Processing`]
      },
      projectShowcase: {
        title: `Image`,
        images: [require("@/assets/images/projects/piano-tiles-bot/DzAxJVQ.png")]
      },
      projectText: {
        title: `Method`,
        text: `I had the game open on my phone and interfaced with it using ApowerMirror. ApowerMirror is a screen mirroring application that also has the functionality to control the phone on a computer. The program plays the game by scanning the image and reacting to black pixels in each of the piano tiles lanes. It then sorts it by distance/priority and performs rapid mouse movements and clicks. The mouse control was done with the PyAutoGUI python library.`
      },
      projectLinks: {
        links: [
          {
            name: `Github repository`,
            ref: `https://github.com/sttic/Piano-Tiles-Bot`
          }
        ]
      }
    };
  }
};
</script>
