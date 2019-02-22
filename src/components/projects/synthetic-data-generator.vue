<template>
  <div id="project-content">
    <ProjectTitle
      title="Synthetic Data Generator"
      caption="Automating Blender with Python to render photorealistic images/videos of racing tracks to be used as training data and driving simulation of an autonomous vehicle."
    />
    <div class="box">
      <span class="image featured">
        <img src="https://i.imgur.com/oolcato.png">
      </span>
      <h3>General</h3>
      <p>
        This is an in-progress project to train multiple networks for an autonomous vehicle to compete in
        the International Autonomous Robot Racing Competition (
        <a
          href="https://robotracing.wordpress.com/"
        >IARRC</a>).
      </p>

      <div class="row">
        <div class="6u 12u(mobilep)">
          <h3>Tools</h3>
          <ul>
            <li>Python</li>
            <li>
              <a href="https://www.blender.org/" target="_blank">Blender</a>
            </li>
            <li>
              <a href="http://python-pillow.org" target="_blank">Pillow</a>
            </li>
          </ul>
        </div>
        <div class="6u 12u(mobilep)">
          <h3>Skills developed</h3>
          <ul>
            <li>Computer Graphics</li>
            <li>Image Processing</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="box">
      <h3>Demo</h3>
      <div class="box alt">
        <video preload="auto" autoplay="autoplay" loop="loop" width="100%">
          <source src="https://i.imgur.com/PJkBOEM.mp4" type="video/mp4">
        </video>
      </div>
    </div>

    <div class="box">
      <h3>Showcase</h3>
      <div class="box alt">
        <div class="row no-collapse 50% uniform">
          <div class="4u">
            <span class="image fit">
              <a href="https://i.imgur.com/oolcato.png" target="_blank">
                <img src="https://i.imgur.com/oolcato.png" alt>
              </a>
            </span>
          </div>
          <div class="4u">
            <span class="image fit">
              <a href="https://i.imgur.com/lqK6bR1.png" target="_blank">
                <img src="https://i.imgur.com/lqK6bR1.png" alt>
              </a>
            </span>
          </div>
          <div class="4u">
            <span class="image fit">
              <a href="https://i.imgur.com/Vo6TP6N.png" target="_blank">
                <img src="https://i.imgur.com/Vo6TP6N.png" alt>
              </a>
            </span>
          </div>
          <div class="4u">
            <span class="image fit">
              <a href="https://i.imgur.com/XSrW27p.png" target="_blank">
                <img src="https://i.imgur.com/XSrW27p.png" alt>
              </a>
            </span>
          </div>
          <div class="4u">
            <span class="image fit">
              <a href="https://i.imgur.com/jRDCWtq.png" target="_blank">
                <img src="https://i.imgur.com/jRDCWtq.png" alt>
              </a>
            </span>
          </div>
          <div class="4u">
            <span class="image fit">
              <a href="https://i.imgur.com/3pXdmmt.png" target="_blank">
                <img src="https://i.imgur.com/3pXdmmt.png" alt>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectTitle from "@/components/ProjectTitle";

export default {
  components: {
    ProjectTitle
  }
};
</script>
