// import game from "./game.js";
import historic from "./historic.js";
import loading from "./loading.js";
import stats from "./stats.js";

let cards = {
  force: 0,
  div: div_cards,

  add(number) {
    let div = document.createElement("div");
    div.className = number % 2 ? "card card--green" : "card card--blue";
    div.className = number % 2 == 0 ? "card card--green" : "card card--blue";
    div.number = number;

    if (number == 10) {
      div.className = "card card--white";
      number = "x";
    }

    div.innerHTML = `<div class="card"><p>${number}</p></div>`;
    cards.div.appendChild(div);
  },

  add_quantity(quantity) {
    for (let i = 0; i <= quantity; i++) this.add((i % 10) + 1);
  },

  update() {
    if (this.force > 0) {
      this.force *= 0.99;
      this.div.scrollLeft += this.force;
    }

    //onde termina
    if (parseInt(this.force) == 0 && stats.gameover == false) {
      historic.add(this.choice_number);
      loading.setTime(500);
      stats.setGameOver(true);

      if (stats.buttonText == "Apostou") {
        stats.setButtonText("Apostar");
      }
    }

    // onde começa a girar
    if (parseInt(this.force) == 0) {
      stats.hud_on();
    }

    window.requestAnimationFrame(this.update.bind(this));
  },

  choice(n) {
    this.div.scrollLeft = 0;
    this.force = 52.9 + 1.118 * (n + 4);
    this.choice_number = n;
    stats.setGameOver(false);
  },
};

cards.add_quantity(500);

window.requestAnimationFrame(cards.update.bind(cards));

export default cards;
