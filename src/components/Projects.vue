<template>
  <div id="projects">
    <div class="row">
      <div id="left" class="6u 12u(narrower)">
        <div
          v-for="(item, index) in projects.slice(0, 9)"
          :key="index"
          :id="item.id"
          class="box special"
        >
          <span class="image featured showcase">
            <a :href="`/projects/${item.id}`">
              <img :src="item.img" alt>
            </a>
          </span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <ul class="actions">
            <li>
              <a :href="`/projects/${item.id}`" class="button alt">Read More</a>
            </li>
          </ul>
        </div>
      </div>

      <div id="right" class="6u 12u(narrower)">
        <div
          v-for="(item, index) in projects.slice(9)"
          :key="index"
          :id="item.id"
          class="box special"
        >
          <span class="image featured showcase">
            <a :href="`/projects/${item.id}`">
              <img :src="item.img" alt>
            </a>
          </span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <ul class="actions">
            <li>
              <a :href="`/projects/${item.id}`" class="button alt">Read More</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projects",
  data() {
    return {
      projects: [
        {
          id: `synthetic-data-generator`,
          img: `https://i.imgur.com/oolcato.png`,
          title: `Synthetic Data Generator`,
          description: `Automating Blender with Python to render photorealistic images/videos of racing tracks to be used as training data and driving simulation of an autonomous vehicle.`
        },
        {
          id: `traffic-light-detector`,
          img: `https://i.imgur.com/PSrbi1J.jpg`,
          title: `Traffic Light Detector`,
          description: `A computer vision system to detect traffic light states.`
        },
        {
          id: `interframe-compression`,
          img: `https://i.imgur.com/LaqL9Nw.png`,
          title: `Interframe Compression`,
          description: `A system to send only the difference between the current and previous image in a video feed to reduce bandwidth usage in video streaming.`
        },
        {
          id: `ottabotics-learn`,
          img: `https://i.imgur.com/5TTl1fA.jpg`,
          title: `Ottabotics Learning Project`,
          description: `An introductory team project for uOttawa's robotics club.`
        },
        {
          id: `lifes-charge`,
          img: `https://i.imgur.com/appche5.png`,
          title: `Life’s Charge – A Countdown to Death`,
          description: `A finite existence demonstrated through a visual countdown of a typical 4160-week life. Each dot represents a week, and each row is a year. The video is a perfect loop if repeated; the perpetual cycle is seen as the charge dwindles away to reveal a new life.`
        },
        {
          id: `potato-simulator`,
          img: `https://i.imgur.com/rRFIcrA.png`,
          title: `Potato Simulator`,
          description: `A silly Unity 3D game that revolves around the player being a high-speed, tumbling potato mindlessly rolling around to explore the world.`
        },
        {
          id: `spells-and-steel`,
          img: `https://i.imgur.com/bbgMk1Y.png`,
          title: `Spells and Steel`,
          description: `A silly short film filled with magic and action.`
        },
        {
          id: `minecraft-art`,
          img: `https://i.imgur.com/sZGC81P.jpg`,
          title: `Minecraft Art`,
          description: `Digital art that I made for others.`
        },
        {
          id: `pusheen-coins`,
          img: `https://i.imgur.com/uBfj15Q.png`,
          title: `Pusheen Coins`,
          description: `Coins based on a cute Internet cat named Pusheen.`
        },
        {
          id: `piano-tiles-bot`,
          img: `https://i.imgur.com/LRvj1Rk.png`,
          title: `Piano Tiles Bot`,
          description: `Automated gameplay of "Piano Tiles" mobile game with PyAutoGUI.`
        },
        {
          id: `habit-visualization`,
          img: `https://i.imgur.com/NgXNej5.png`,
          title: `Habit Visualization`,
          description: `A python rework of "My terrible sleep habits visualized." It's now more generalized and does not rely on any external programs to create the images.`
        },
        {
          id: `sleep-visualization`,
          img: `https://i.imgur.com/XRJPNOE.png`,
          title: `My terrible sleep habits visualized`,
          description: `Sleep visualizations based on manually logged sleep entries.`
        },
        {
          id: `gotta-go`,
          img: `https://i.imgur.com/s7ZxgTP.jpg`,
          title: `Gotta Go`,
          description: `A mock startup project for SEG2900 where my group was tasked with creating a website and pitch for a fictional company.`
        },
        {
          id: `photoshop-battles`,
          img: `https://i.imgur.com/0fujxDx.jpg`,
          title: `Photoshop Battles`,
          description: `Friendly Photoshop competitions at /r/photoshopbattles on Reddit.`
        },
        {
          id: `moon-photos`,
          img: `https://i.imgur.com/1MV0JY8.png`,
          title: `Moon Photo`,
          description: `An attempt to capture the highest quality moon photos possible with an entry-level camera setup.`
        },
        {
          id: `photography`,
          img: `https://i.imgur.com/qr7ywEy.jpg`,
          title: `Photography`,
          description: `Pretty pixels?`
        },
        {
          id: `mtc-training`,
          img: `https://engineering.uottawa.ca/sites/default/files/brunsfieldlandingpage_0.jpg`,
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
  .row div {
    width: 100%;
  }
}
</style>
