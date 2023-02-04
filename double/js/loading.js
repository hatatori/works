import cards from "./cards.js";
import stats from "./stats.js";

let loading = {
  div: div_aguardar,
  pink: bar_pink,
  time: 0,

  setTime(n) {
    this.time = n;
    this.pink.style.width = `${(n * bar_pink.parentElement.offsetWidth) / 1000}px`;

    if (n > 0) {
      this.div.style.opacity = 1;
    }

    if (this.time == 0) {
      this.start();
      this.div.style.opacity = 0;
    }
  },

  down() {
    this.setTime(--this.time);
  },

  end() {
    console.log("ok");
  },

  start() {
    cards.choice(parseInt(Math.random() * 10 + 1));
    // cards.choice(2);
    stats.hud_off();
  },

  update() {
    if (this.time > 0) this.down();

    window.requestAnimationFrame(this.update.bind(this));
  },
};

window.requestAnimationFrame(loading.update.bind(loading));

export default loading;
