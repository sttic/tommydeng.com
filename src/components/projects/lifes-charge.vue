<template>
  <div id="project-content">
    <ProjectTitle :title="projectTitle.title" :caption="projectTitle.caption"/>

    <div class="box special" style="background:#000;">
      <video preload="auto" autoplay="autoplay" loop="loop" width="60%">
        <source src="https://imgur.com/S1L4tOT.mp4" type="video/mp4">
      </video>
      <div style="padding: 4% 0 2% 0;">
        <img src="https://i.imgur.com/2b4INHV.png" style="width:30%;" alt>
        <img src="https://i.imgur.com/AqIllUs.png" style="width:30%;" alt>
        <img src="https://i.imgur.com/fhUyCqk.png" style="width:30%;" alt>
      </div>
      <p>The charges for ages 20, 40, and 60 years old respectively.</p>
    </div>

    <ProjectIntro
      :image="projectIntro.image"
      :general="projectIntro.general"
      :tools="projectIntro.tools"
      :skills="projectIntro.skills"
    />
    <ProjectText :title="projectText.title" :text="projectText.text"/>

    <div class="box">
      <h3>Thoughts</h3>
      <p>
        I posted this project on Reddit and at first wasn't sure what to think of it. Even though I liked it, I thought
        others wouldn't. It is, of course, relatively simple to make an animated gif like this.
        <br>
        <br>It made it to the front page of Reddit, got over 12,000 upvotes and 100,000 views.
        <br>
        <br>I like this project not because of any complexity or technical hurdle, but how people responded to it instead.
        Even though it wasn't particularly hard to make, it felt great when it ended up reaching a large number of people
        and affecting many of them on an emotional level. The comments indicated various responses from existential
        crises to motivation in making the most out of their life. Two of my favourites are:
      </p>
      <blockquote>
        … At 35 I found myself a bit surprised at how much had gone by. But then I thought, ‘Well, I'd better get
        going doing what I want to in life.’ Thanks for the motivation.
      </blockquote>
      <span style="float:right;">
        <a
          href="https://www.reddit.com/r/dataisbeautiful/comments/6ry4dz/lifes_charge_a_finite_existence_demonstrated/dl8v74l/"
          target="_blank"
        >– FartassaurusRex</a>
      </span>
      <br>
      <p>and</p>
      <blockquote>
        This made me really sad too. But then I thought about how my 5 month old son is at the very beginning
        and has about a 99% charge left. So life is good and everything will be ok.
      </blockquote>
      <span style="float:right;">
        <a
          href="https://www.reddit.com/r/dataisbeautiful/comments/6ry4dz/lifes_charge_a_finite_existence_demonstrated/dl8zvi5/"
          target="_blank"
        >– bgsnydermd</a>
      </span>
      <br>
      <p>They made me smile and think to myself about how making this would’ve been worth it even if it affected just a few people.</p>
    </div>

    <ProjectLinks :links="projectLinks.links"/>
  </div>
</template>

<script>
import ProjectTitle from "@/components/ProjectTitle.vue";
import ProjectIntro from "@/components/ProjectIntro.vue";
import ProjectText from "@/components/ProjectText.vue";
import ProjectLinks from "@/components/ProjectLinks.vue";

export default {
  components: {
    ProjectTitle,
    ProjectIntro,
    ProjectText,
    ProjectLinks
  },
  created() {
    this.setDocumentTitle(this.documentTitle);
  },
  data() {
    return {
      documentTitle: `Life's Charge`,
      projectTitle: {
        title: `Life's Charge – A Countdown to Death`,
        caption: `A finite existence demonstrated through a visual countdown of a typical 4160-week life.<br><br>Each dot represents a week, and each row is a year.`
      },
      projectIntro: {
        general: `This is "Life's Charge." It is a minimal counter, resembling a battery, showing how long a life typically is. Each dot represents a week, and each row is a year.`,
        tools: [
          { name: `C++` },
          {
            name: `CImg library`,
            link: `http://www.cimg.eu/`
          },
          { name: `Adobe After Effects` }
        ],
        skills: [`Image generation`, `Design`]
      },
      projectText: {
        title: `Method`,
        text: `I first generated the individual frames of the main countdown with CImg. With that, imported those images into After Effects as an image sequence. I then manually keyframed and masked over sections to create the looping action.`
      },
      projectLinks: {
        links: [
          {
            name: `Direct link`,
            ref: `https://imgur.com/S1L4tOT.gifv`
          },
          {
            name: `Reddit post`,
            ref: `https://www.reddit.com/r/dataisbeautiful/comments/6ry4dz/lifes_charge_a_finite_existence_demonstrated/`
          },
          {
            name: `Github repository`,
            ref: `https://github.com/sttic/Life-Battery`
          }
        ]
      }
    };
  }
};
</script>
