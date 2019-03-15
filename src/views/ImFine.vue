<template>
  <div id="im-fine">
    <div class="title">
      <h1>I'm fine</h1>
    </div>
    <div id="mind"></div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "I'm fine.",
    meta: [{ vmid: "description", name: "description", content: "I'm fine." }]
  },
  created() {
    this.requestId = window.requestAnimationFrame(this.animate);
  },
  mounted() {
    this.mind = document.getElementById("mind");
  },
  destroyed() {
    window.cancelAnimationFrame(this.requestId);
  },
  methods: {
    rand(min, max) {
      return Math.random() * (max - min) + min;
    },
    addThought(list, light) {
      var index = Math.floor(Math.random() * list.length);
      var node = document.createElement("p");
      node.appendChild(document.createTextNode(list[index]));
      this.mind.appendChild(node);

      var x = document.body.clientWidth;
      var y = Math.floor(
        Math.random() * (document.body.clientHeight - node.clientHeight)
      );

      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
      if (light) {
        node.className = "fake";
        node.style.zIndex = 2;
      }
      var speed = this.rand(this.speed.min, this.speed.max);

      this.thoughts.push({ node, x, y, speed });
    },
    spawnLight(frequency) {
      if (Math.random() < frequency / this.framerate)
        this.addThought(this.light, true);
    },
    spawnDark(frequency) {
      if (Math.random() < frequency / this.framerate)
        this.addThought(this.dark, false);
    }
  },
  data() {
    return {
      light: [
        "Don't worry about me.",
        "I can handle this.",
        "I'll be okay.",
        "I'll live.",
        "I'll manage.",
        "I'm alright.",
        "I'm okay.",
        "I'm used to this."
      ],
      dark: [
        "All this is my fault.",
        "Bad thoughts.",
        "Broken thoughts.",
        "Don't bother helping me. I'm not worth the time. I'm hopeless.",
        "I am the problem. It's all my fault.",
        "I can't be left alone with my own thoughts.",
        "I can't let people know about this.",
        "I could disappear off the face of the earth and nothing would change.",
        "I could stop existing, from one moment to another, without anybody noticing.",
        "I do not see a future with myself.",
        "I don't belong.",
        "I don't know how I should feel.",
        "I don't know if people even like me.",
        "I don't know what I should think.",
        "I don't know what to believe in.",
        "I don't matter to anyone.",
        "I fail at what it means to be human.",
        "I fantasize about dying daily.",
        "I feel so alone.",
        "I feel terrible.",
        "I feel ugly.",
        "I hate myself.",
        "I have nothing to gain if I'm alive.",
        "I lie to myself.",
        "I want to break down.",
        "I want to run away but I don't even know what from.",
        "I wish I didn't exist.",
        "I wish the worst upon myself.",
        "I'm a burden to everyone I know and meet.",
        "I'm a fraud.",
        "I'm a freak of nature.",
        "I'm a horrible person.",
        "I'm a lost soul.",
        "I'm a monster.",
        "I'm afraid I'm not good enough.",
        "I'm afraid of being found out as a fraud.",
        "I'm afraid of letting everyone down.",
        "I'm afraid of not being good enough.",
        "I'm afraid you'll think badly of me.",
        "I'm an abomination of a human.",
        "I'm an entirely different person when I'm alone.",
        "I'm an imposter.",
        "I'm ashamed of who I am.",
        "I'm conflicted.",
        "I'm constantly tired.",
        "I'm crueler to myself than I would ever dare to be to another person.",
        "I'm doomed to be the person I am.",
        "I'm dumb.",
        "I'm jealous.",
        "I'm lonely.",
        "I'm mediocre at best.",
        "I'm not as smart as I thought I was.",
        "I'm not going to make it.",
        "I'm not good enough.",
        "I'm not the person you think I am.",
        "I'm powerless.",
        "I'm so fake.",
        "I'm so stupid.",
        "I'm surprised that people don't hate me as much as I do.",
        "I'm terrified of disappointing you.",
        "I'm too bothersome.",
        "I'm trapped in my thoughts.",
        "I'm useless.",
        "I'm worried that I don't matter to you.",
        "I'm worthless.",
        "If dying is so easy, why don't I do it?",
        "Intrusive thoughts.",
        "It would've been better if I never existed in the first place.",
        "It's 2 in the morning and I want to die.",
        "It's never gonna get better.",
        "It's too late for me.",
        "Maybe I should just sleep forever.",
        "My joy has departed.",
        "My seemingly outwardly display of niceness and positivity is there to conceal the true darkness of my inner being.",
        "No one cares about me.",
        "No one will miss me when I'm gone.",
        "Nobody cares how I feel.",
        "Nobody likes me, but that's okay. I don't like me too.",
        "Nobody understands me.",
        "Nothing feels like home to me, not even home.",
        "On a regular day I'll find myself ruminating over depressive thoughts for no real reason.",
        "Out of all the people I've met and gotten to know, I hate myself the most by far.",
        "Sometimes it's hard to tell if people like me or merely tolerate me.",
        "The best outcome for me is if I just keep myself busy with unimportant nonsense and then eventually I'll be dead.",
        "The light has gone out of my life.",
        "The past is the only thing I have in common with others.",
        "The world would be a better place if I was gone.",
        "There's no cure to being me.",
        "This is the hill I die on.",
        "What will I do with myself as a person?",
        "What's the point of it all? I'm going to die unhappy anyway.",
        "When I say I'll manage, I really mean that I'm one step away from death.",
        "Why am I miserable so often?",
        "Why do I even keep trying?",
        "Why do I feel so empty?",
        "Why would anybody want to be friends with me?"
      ],
      thoughts: [],
      mind: null,
      requestId: null,
      framerate: 60,
      spawnrate: { light: 0.05, dark: 1.5 },
      speed: { min: 0.6, max: 4 },
      animate: () => {
        for (var i = this.thoughts.length - 1; i >= 0; i--) {
          var element = this.thoughts[i];
          element.x -= element.speed;
          element.node.style.left = `${element.x}px`;

          if (element.node.getBoundingClientRect().right < 0) {
            element.node.remove();
            this.thoughts.splice(i, 1);
          }
        }

        this.spawnLight(this.spawnrate.light);
        this.spawnDark(this.spawnrate.dark);

        this.requestId = window.requestAnimationFrame(this.animate);
      }
    };
  }
};
</script>

<style scoped>
#im-fine {
  background-color: #101010;
  font-family: "Trebuchet MS", "Helvetica", sans-serif;
}

#im-fine >>> h1,
#im-fine >>> p {
  margin: 0;
  padding: 0;
  user-select: none;
}

.title {
  width: 100%;
  margin-top: -2em;
  position: absolute;
  top: 50%;
  text-align: center;
  z-index: 2;
}

.title > h1 {
  font-weight: bold;
  color: #f0f0f0;
  font-size: 64px;
}

#mind {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

#mind >>> .fake {
  color: #f0f0f0;
}

#mind >>> p {
  position: absolute;
  font-family: "Arial", "Helvetica", sans-serif;
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;
  color: #404040;
}
</style>
