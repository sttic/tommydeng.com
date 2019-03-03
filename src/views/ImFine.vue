<template>
  <div id="im-fine">
    <div class="title">
      <h1>I'm fine</h1>
    </div>
    <div id="me">
      <p
        class="thought"
        v-for="(item, index) in thoughts"
        :key="index"
        :style="thoughtStyle(item)"
      >{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.requestId = window.requestAnimationFrame(this.animate);
  },
  destroyed() {
    window.cancelAnimationFrame(this.requestId);
  },
  methods: {
    thoughtStyle(thought) {
      var styles = [];
      styles.push(`left: ${thought.x}%`);
      styles.push(`top: ${thought.y}%`);
      if (thought.light) {
        styles.push(`color: #f0f0f0`);
        styles.push(`z-index: ${2}`);
      }
      return styles.join(`;`);
    },
    rand(min, max) {
      return Math.random() * (max - min) + min;
    },
    addThought(list, light) {
      var index = Math.floor(Math.random() * list.length);
      var y = this.rand(5, 95);
      var speed = this.rand(0.05, 0.5);

      this.thoughts.push({
        time: Date.now(),
        light,
        text: list[index],
        x: 100,
        y,
        speed
      });
    },
    spawnLight(frequency) {
      if (Math.random() < frequency / 60) {
        this.addThought(this.light, true);
      }
    },
    spawnDark(frequency) {
      if (Math.random() < frequency / 60) {
        this.addThought(this.dark, false);
      }
    }
  },
  data() {
    return {
      light: `I'm okay.;Don't worry about me.;I'll manage.;I'm used to this.;I'll live.;I can handle this.;I'm alright.;I'll be okay.`.split(
        ";"
      ),
      dark: `I hate myself.;I'm surprised that people don't hate me as much as I do.;I wish I didn't exist.;It would've been better if I never existed in the first place.;Bad thoughts.;Broken thoughts.;Intrusive thoughts.;When I say I'll manage, I really mean that I'm one step away from death.;If dying is so easy, why don't I do it?;No one will miss me when I'm gone.;I feel terrible.;I'm a horrible person.;It's 2 in the morning and I want to die.;I can't be left alone with my own thoughts.;I'm a lost soul.;I'm crueler to myself than I would ever dare to be to another person.;I can't let people know about this.;I'm lonely.;Nobody understands me.;All this is my fault.;Why do I even keep trying?;I'm constantly tired.;Maybe I should just sleep forever.;I'm not as smart as I thought I was.;I'm so stupid.;I'm dumb.;I'm useless.;My joy has departed.;I'm not the person you think I am.;I'm a monster.;I'm a freak of nature.;I'm an abomination of a human.;What's the point of it all? I'm going to die unhappy anyway.;I'm not good enough.;I'm jealous.;It's never gonna get better.;I feel so alone.;The past is the only thing I have in common with others.;I want to break down.;I'm so fake.;I'm worthless.;Don't bother helping me. I'm not worth the time. I'm hopeless.;I'm not going to make it.;This is the hill I die on.;I have nothing to gain if I'm alive.;My seemingly outwardly display of niceness and positivity is there to conceal the true darkness of my inner being.;Why am I miserable so often?;I'm a fraud.;Sometimes it's hard to tell if people like me or merely tolerate me.;I'm too bothersome.;I'm a burden to everyone I know and meet.;I do not see a future with myself.;What will I do with myself as a person?;I fail at what it means to be human.;I could disappear off the face of the earth and nothing would change.;Out of all the people I've met and gotten to know, I hate myself the most by far.;I'm afraid I'm not good enough.;I'm an entirely different person when I'm alone.;I'm powerless.;I am the problem. It's all my fault.;No one cares about me.;I don't matter to anyone.;I wish the worst upon myself.;I'm mediocre at best.;I'm an imposter.;Why do I feel so empty?;The light has gone out of my life.;I could stop existing, from one moment to another, without anybody noticing.;The best outcome for me is if I just keep myself busy with unimportant nonsense and then eventually I'll be dead.;I'm trapped in my thoughts.;Nobody cares how I feel.;I'm doomed to be the person I am.;It's too late for me.;There's no cure to being me.;On a regular day I'll find myself ruminating over depressive thoughts for no real reason.;I fantasize about dying daily.;Nothing feels like home to me, not even home.;I want to run away but I don't even know what from.;I don't belong.;I'm conflicted.;I'm ashamed of who I am.;I don't know what I should think.;I don't know how I should feel.;I don't know if people even like me.;Why would anybody want to be friends with me?;I don't know what to believe in.;I lie to myself.;I'm worried that I don't matter to you.;I'm afraid of not being good enough.;I'm afraid you'll think badly of me.;I'm afraid of letting everyone down.;I'm afraid of being found out as a fraud.;I feel ugly.;I'm terrified of disappointing you.;Nobody likes me, but that's okay. I don't like me too.;The world would be a better place if I was gone.`.split(
        ";"
      ),
      thoughts: [],
      requestId: null,
      animate: () => {
        this.thoughts = this.thoughts.filter(element => element.x > -100);
        this.thoughts.forEach(element => {
          element.x -= element.speed;
        });

        this.spawnLight(0.05);
        this.spawnDark(1.5);

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

h1,
p {
  margin: 0;
  padding: 0;
}

.title {
  width: 100%;
  margin-top: -3em;
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

#me {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

#me > p {
  position: absolute;
  font-family: "Arial", "Helvetica", sans-serif;
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;
  color: #404040;
}
</style>
