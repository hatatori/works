import cards from "./cards.js";

let loading = {
  div: div_aguardar,
  pink: bar_pink,
  time: 0,

  setTime(n) {
    this.time = n;
    this.pink.style.width = `${(n * bar_pink.parentElement.offsetWidth) / 1000}px`;

    if (this.time == 0) {
      this.end();
      this.div.style.opacity = 0;
    } else {
      this.div.style.opacity = 1;
    }
  },

  down() {
    this.setTime(--this.time);
  },

  end() {
    cards.choice(parseInt(Math.random() * 10 + 1));
  },

  update() {
    if (this.time > 0) {
      this.down();
    }

    window.requestAnimationFrame(this.update.bind(this));
  },
};

window.requestAnimationFrame(loading.update.bind(loading));

export default loading;
