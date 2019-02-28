<template>
  <div id="project-content">
    <ProjectTitle :title="projectTitle.title" :caption="projectTitle.caption"/>
    <ProjectIntro
      :image="projectIntro.image"
      :general="projectIntro.general"
      :tools="projectIntro.tools"
      :skills="projectIntro.skills"
    />
    <ProjectText :title="projectText.title" :text="projectText.text"/>
    <ProjectShowcase :title="projectShowcase.title" :images="projectShowcase.images"/>
    <ProjectLinks :links="projectLinks.links"/>
  </div>
</template>

<script>
import ProjectTitle from "@/components/ProjectTitle.vue";
import ProjectIntro from "@/components/ProjectIntro.vue";
import ProjectText from "@/components/ProjectText.vue";
import ProjectShowcase from "@/components/ProjectShowcase.vue";
import ProjectLinks from "@/components/ProjectLinks.vue";

export default {
  components: {
    ProjectTitle,
    ProjectIntro,
    ProjectText,
    ProjectShowcase,
    ProjectLinks
  },
  created() {
    this.setDocumentTitle(this.documentTitle);
  },
  data() {
    return {
      documentTitle: `Gotta Go`,
      projectTitle: {
        title: `Gotta Go`,
        caption: `A mock startup project for SEG2900 where my group<br>was tasked with creating a website and pitch for a fictional company.<br><br>We settled on the idea of Gotta Go.`
      },
      projectIntro: {
        image: `https://i.imgur.com/s7ZxgTP.jpg`,
        general: `Gotta Go is a mobile application that uses mapping services and public reviews to allow users to locate the nearest and highest quality public restrooms around.`,
        tools: [
          { name: `Git` },
          { name: `HTML, CSS, JavaScript` },
          { name: `Photoshop` }
        ],
        skills: [`Leadership`, `Teamwork`, `Communication`, `Web development`]
      },
      projectText: {
        title: `Method`,
        text: `As team leader I worked on, coordinated, and oversaw virtually all aspects of the project. This includes the main development of the website, planning meetings, communicating with team members, submitting the deliverables and weekly reports, and creating the custom PowerPoint for the final pitch.`
      },
      projectShowcase: {
        title: `Presentation Slides`,
        images: [
          `https://i.imgur.com/s7ZxgTP.jpg`,
          `https://i.imgur.com/9peL1zW.jpg`,
          `https://i.imgur.com/UIHb69z.jpg`,
          `https://i.imgur.com/c7vktsk.jpg`,
          `https://i.imgur.com/bkRHlZN.jpg`,
          `https://i.imgur.com/deAVJtL.jpg`,
          `https://i.imgur.com/EN9eKp0.jpg`,
          `https://i.imgur.com/iR2Cue1.jpg`,
          `https://i.imgur.com/kujKAno.jpg`,
          `https://i.imgur.com/Tf5VoCi.jpg`
        ]
      },
      projectLinks: {
        links: [
          {
            name: `Website`,
            ref: `https://gotta-go.github.io/`
          },
          {
            name: `Github repository`,
            ref: `https://github.com/Gotta-Go/Gotta-Go.github.io`
          }
        ]
      }
    };
  }
};
</script>
