<template>
  <div id="project-content">
    <ProjectTitle :title="projectTitle.title" :caption="projectTitle.caption"/>
    <ProjectIntro
      :image="projectIntro.image"
      :imageStyle="projectIntro.imageStyle"
      :general="projectIntro.general"
      :tools="projectIntro.tools"
      :skills="projectIntro.skills"
    />

    <div class="box">
      <h3>Explanation</h3>
      <p>
        See
        <a href="https://imgur.com/a/fd5ih" target="_blank">this album</a> for past finished labeled versions to more quickly get a sense of what these represent.
      </p>
      <div class="row">
        <div class="6u 12u(mobilep)">
          <p>
            This is a rectilinear representation that plainly displays the data with each row being the day after the previous and
            each column being a different hour, with the leftmost starting at midnight (12 AM).
          </p>
        </div>
        <div class="6u 12u(mobilep)">
          <span class="image fit">
            <a href="https://i.imgur.com/BKWWOwt.png" target="_blank">
              <img src="https://i.imgur.com/BKWWOwt.png" alt>
            </a>
          </span>
        </div>
      </div>

      <br>
      <div class="row">
        <div class="6u 12u(mobilep)">
          <span class="image fit">
            <a href="https://i.imgur.com/o0l0hch.png" target="_blank">
              <img src="https://i.imgur.com/o0l0hch.png" alt>
            </a>
          </span>
        </div>
        <div class="6u 12u(mobilep)">
          <p>
            A heatmap of a week that goes by the hour. The rows span from Monday to Sunday starting at the top,
            and the columns start on the left and begin at midnight. Each 'pixel' is the likelihood
            of the activity taking place during a specific time and day of the week, averaged to the hour.
          </p>
        </div>
      </div>

      <br>
      <div class="row">
        <div class="6u 12u(mobilep)">
          <p>
            This is a heatmap of a week that goes by the minute. It is the same as the previous hourly one except that
            it is not averaged to provide a denser representation.
          </p>
        </div>
        <div class="6u 12u(mobilep)">
          <span class="image fit">
            <a href="https://i.imgur.com/68bw1Zd.png" target="_blank">
              <img src="https://i.imgur.com/68bw1Zd.png" alt>
            </a>
          </span>
        </div>
      </div>

      <br>
      <div class="row">
        <div class="6u 12u(mobilep)">
          <span class="image fit">
            <a href="https://i.imgur.com/y8VD2nV.png" target="_blank">
              <img src="https://i.imgur.com/y8VD2nV.png" alt>
            </a>
          </span>
        </div>
        <div class="6u 12u(mobilep)">
          <p>
            This is what I call a 'spectrum', given its vague resemblance to emission spectra for certain activities
            (I find the
            <a
              href="https://i.imgur.com/qOu54cB.png"
              target="_blank"
            >sleep one</a> to be best for this).
            It shows the same data as the previous heatmap but formatted so that it spans the entire week in a single line.
          </p>
        </div>
      </div>

      <br>
      <div class="row">
        <div class="6u 12u(mobilep)">
          <p>
            The polar visualizations are the rectilinear representations
            <a
              href="https://upload.wikimedia.org/wikipedia/commons/5/53/Cartesian_to_polar.gif"
              target="_blank"
            >'wrapped'</a>
            to a circular coordinate system.
            This one, for example, is the heatmap of a week from above. The spiral is achieved
            through an initial offset of its line height prior to the transformation. In this case, the outer part
            of the spiral starts with Monday and transitions to a new day with each full rotation. The time is
            positioned to represent a 24-hour clock: midnight at the top with it progressing clockwise.
          </p>
        </div>
        <div class="6u 12u(mobilep)">
          <span class="image fit">
            <a href="https://i.imgur.com/2Wfw6BJ.png" target="_blank">
              <img src="https://i.imgur.com/2Wfw6BJ.png" alt>
            </a>
          </span>
        </div>
      </div>

      <br>
      <span class="image fit">
        <a href="https://i.imgur.com/hCd8hij.png" target="_blank">
          <img src="https://i.imgur.com/hCd8hij.png" alt height="42">
        </a>
      </span>
      <p>Heatmap reference/key. From left to right, it represents 0% to 100% respectively.</p>
    </div>

    <div class="showcase box">
      <h3>Showcase</h3>
      <p>The images below are all unmodified outputs of the python scripts.</p>
      <ProjectImageArray :images="projectImageArray.oncampus"/>

      <h3 class="center">Transit</h3>
      <ProjectImageArray :images="projectImageArray.transit"/>

      <h3 class="center">Sleep</h3>
      <ProjectImageArray :images="projectImageArray.sleep"/>

      <h3 class="center">Work-In-Progress Polar Visualizations</h3>
      <ProjectImageArray :images="projectImageArray.wip"/>

      <h3 class="center">Derps – The Interesting or Unintentional</h3>
      <ProjectImageArray :images="projectImageArray.derps"/>
    </div>

    <ProjectLinks :links="projectLinks.links"/>
  </div>
</template>

<script>
import ProjectTitle from "@/components/ProjectTitle.vue";
import ProjectIntro from "@/components/ProjectIntro.vue";
import ProjectImageArray from "@/components/ProjectImageArray.vue";
import ProjectLinks from "@/components/ProjectLinks.vue";

export default {
  components: {
    ProjectTitle,
    ProjectIntro,
    ProjectImageArray,
    ProjectLinks
  },
  created() {
    this.setDocumentTitle(this.documentTitle);
  },
  data() {
    return {
      documentTitle: `Habit Visualization`,
      projectTitle: {
        title: `Habit Visualization`,
        caption: `A python rework of "My terrible sleep habits visualized".`
      },
      projectIntro: {
        image: `https://i.imgur.com/uZ28MYV.png`,
        imageStyle: `image fit`,
        general: `Given a text file containing instances of a certain activity, my scripts generates several visualizations to represent it. It also creates csv-like files that can be imported into software, such as Excel, to further work with the data.`,
        tools: [
          { name: `Python` },
          { name: `Pillow`, link: `http://python-pillow.org` }
        ],
        skills: [`Image generation`, `Data parsing`, `Data visualization`]
      },
      projectImageArray: {
        oncampus: [
          `https://i.imgur.com/BKWWOwt.png`,
          `https://i.imgur.com/o0l0hch.png`,
          `https://i.imgur.com/68bw1Zd.png`,
          `https://i.imgur.com/y8VD2nV.png`
        ],
        transit: [
          `https://i.imgur.com/rx3LbJa.png`,
          `https://i.imgur.com/UalDmoE.png`,
          `https://i.imgur.com/xlM5wh6.png`,
          `https://i.imgur.com/cq8CxW5.png`
        ],
        sleep: [
          `https://i.imgur.com/EQbZdKv.png`,
          `https://i.imgur.com/CgDlPtU.png`,
          `https://i.imgur.com/qZ6IzBt.png`,
          `https://i.imgur.com/qOu54cB.png`
        ],
        wip: [
          `https://i.imgur.com/L8VO21P.png`,
          `https://i.imgur.com/0AOOBjH.png`
        ],
        derps: [
          `https://i.imgur.com/uXO2PXG.png`,
          `https://i.imgur.com/gFsWx8U.png`,
          `https://i.imgur.com/aPLf8dh.png`
        ]
      },
      projectLinks: {
        links: [
          {
            name: `Github repository`,
            ref: `https://github.com/sttic/Habit-Visualization`
          }
        ]
      }
    };
  }
};
</script>

<style>
.center {
  text-align: center;
}
</style>
