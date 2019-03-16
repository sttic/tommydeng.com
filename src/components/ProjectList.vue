<template>
  <div id="projectList">
    <div class="row">
      <div id="left" class="6u 12u(narrower)">
        <ProjectCard
          v-for="(item, index) in projects.slice(0, 9)"
          :key="index"
          :id="item.id"
          :link="`/projects/${item.id}/`"
          :img="item.img"
          :imgSize="item.imgSize"
          :title="item.title"
          :description="item.description"
          :cardWidth="cardWidth"
        />
      </div>

      <div id="right" class="6u 12u(narrower)">
        <ProjectCard
          v-for="(item, index) in projects.slice(9)"
          :key="index"
          :id="item.id"
          :link="`/projects/${item.id}/`"
          :img="item.img"
          :imgSize="item.imgSize"
          :title="item.title"
          :description="item.description"
          :cardWidth="cardWidth"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  name: "projectList",
  components: {
    ProjectCard
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  mounted() {
    this.firstCard = document.getElementById(this.projects[0].id);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.cardWidth = this.firstCard.getBoundingClientRect().width;
    }
  },
  data() {
    return {
      firstCard: null,
      cardWidth: 0,
      projects: [
        {
          id: `synthetic-data-generator`,
          img: `https://i.imgur.com/oolcato.png`,
          imgSize: { x: 1920, y: 1080 },
          title: `Synthetic Data Generator`,
          description: `Automating Blender with Python to render photorealistic images/videos of racing tracks to be used as training data and driving simulation of an autonomous vehicle.`
        },
        {
          id: `traffic-light-detector`,
          img: `https://i.imgur.com/PSrbi1J.jpg`,
          imgSize: { x: 3024, y: 2596 },
          title: `Traffic Light Detector`,
          description: `A computer vision system to detect traffic light states.`
        },
        {
          id: `interframe-compression`,
          img: `https://i.imgur.com/LaqL9Nw.png`,
          imgSize: { x: 764, y: 767 },
          title: `Interframe Compression`,
          description: `A system to send only the difference between the current and previous image in a video feed to reduce bandwidth usage in video streaming.`
        },
        {
          id: `ottabotics-learn`,
          img: `https://i.imgur.com/5TTl1fA.jpg`,
          imgSize: { x: 3503, y: 2122 },
          title: `Ottabotics Learning Project`,
          description: `An introductory team project for uOttawa's robotics club.`
        },
        {
          id: `lifes-charge`,
          img: `https://i.imgur.com/appche5.png`,
          imgSize: { x: 5400, y: 7200 },
          title: `Life’s Charge – A Countdown to Death`,
          description: `A finite existence demonstrated through a visual countdown of a typical 4160-week life. Each dot represents a week, and each row is a year. The video is a perfect loop if repeated; the perpetual cycle is seen as the charge dwindles away to reveal a new life.`
        },
        {
          id: `potato-simulator`,
          img: `https://i.imgur.com/rRFIcrA.png`,
          imgSize: { x: 1919, y: 909 },
          title: `Potato Simulator`,
          description: `A silly Unity 3D game that revolves around the player being a high-speed, tumbling potato mindlessly rolling around to explore the world.`
        },
        {
          id: `spells-and-steel`,
          img: `https://i.imgur.com/bbgMk1Y.png`,
          imgSize: { x: 1920, y: 817 },
          title: `Spells and Steel`,
          description: `A silly short film filled with magic and action.`
        },
        {
          id: `minecraft-art`,
          img: `https://i.imgur.com/sZGC81P.jpg`,
          imgSize: { x: 1920, y: 1080 },
          title: `Minecraft Art`,
          description: `Digital art that I made for others.`
        },
        {
          id: `pusheen-coins`,
          img: `https://i.imgur.com/uBfj15Q.png`,
          imgSize: { x: 1920, y: 1080 },
          title: `Pusheen Coins`,
          description: `Coins based on a cute Internet cat named Pusheen.`
        },
        {
          id: `inventure`,
          img: `https://i.imgur.com/I0zsAfK.png`,
          imgSize: { x: 1980, y: 1980 },
          title: `Inventure Website`,
          description: `Inventure is a platform that brings together youth and business opportunities.`
        },
        {
          id: `piano-tiles-bot`,
          img: `https://i.imgur.com/LRvj1Rk.png`,
          imgSize: { x: 1080, y: 904 },
          title: `Piano Tiles Bot`,
          description: `Automated gameplay of "Piano Tiles" mobile game with PyAutoGUI.`
        },
        {
          id: `habit-visualization`,
          img: `https://i.imgur.com/NgXNej5.png`,
          imgSize: { x: 1584, y: 1584 },
          title: `Habit Visualization`,
          description: `A python rework of "My terrible sleep habits visualized." It's now more generalized and does not rely on any external programs to create the images.`
        },
        {
          id: `sleep-visualization`,
          img: `https://i.imgur.com/XRJPNOE.png`,
          imgSize: { x: 2000, y: 2000 },
          title: `My terrible sleep habits visualized`,
          description: `Sleep visualizations based on manually logged sleep entries.`
        },
        {
          id: `gotta-go`,
          img: `https://i.imgur.com/s7ZxgTP.jpg`,
          imgSize: { x: 1920, y: 1080 },
          title: `Gotta Go`,
          description: `A mock startup project for SEG2900 where my group was tasked with creating a website and pitch for a fictional company.`
        },
        {
          id: `photoshop-battles`,
          img: `https://i.imgur.com/0fujxDx.jpg`,
          imgSize: { x: 1920, y: 830 },
          title: `Photoshop Battles`,
          description: `Friendly Photoshop competitions at /r/photoshopbattles on Reddit.`
        },
        {
          id: `moon-photos`,
          img: `https://i.imgur.com/1MV0JY8.png`,
          imgSize: { x: 700, y: 700 },
          title: `Moon Photo`,
          description: `An attempt to capture the highest quality moon photos possible with an entry-level camera setup.`
        },
        {
          id: `photography`,
          img: `https://i.imgur.com/qr7ywEy.jpg`,
          imgSize: { x: 5184, y: 3456 },
          title: `Photography`,
          description: `Pretty pixels?`
        },
        {
          id: `mtc-training`,
          img: `https://engineering.uottawa.ca/sites/default/files/brunsfieldlandingpage_0.jpg`,
          imgSize: { x: 980, y: 500 },
          title: `MTC Training`,
          description: `Training done at the uOttawa's Brunsfield Centre.`
        }
      ]
    };
  }
};
</script>

<style scoped>
@media only screen and (max-width: 736px) {
  .row {
    padding: 0 1em;
  }

  .row div {
    width: 100%;
    margin-left: 0;
    margin-top: 0;
  }
}

@media only screen and (max-width: 480px) {
  .row {
    padding: 0;
  }

  .row div {
    margin-top: 1em;
  }
}
</style>
