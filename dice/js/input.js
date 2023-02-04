import game from "./game.js";

let section = document.querySelector(".input");

let el = {
  section: document.querySelector(".input"),
  input: section.querySelector("input"),
  div: section.querySelector("div"),

  setValue(val) {
    // if (val <= 1) val = 1;
    // if (val >= 95) val = 95;

    // if (game.canBet == false) {
    //   this.input.setAttribute("disabled", true);
    //   return false;
    //   //   return false;
    // } else {
    //   this.input.setAttribute("disabled", false);
    // }

    this.input.value = val;
    this.div.innerText = val;
    this.div.style.left = `calc(${val}% + ${0 - val * 0.5}px)`;
  },

  change() {
    this.setValue(this.input.value);

    game.setPredicao(this.input.value);

    if (game.bt_escolha == 0) {
      if (this.input.value <= 10) game.setMultiplicador(100 - 50 * this.input.value ** 0.2);
      if (this.input.value > 10 && this.input.value < 20) game.setMultiplicador(100 - 50 * this.input.value ** 0.193);
      if (this.input.value > 20 && this.input.value <= 50) game.setMultiplicador(100 - 50 * this.input.value ** 0.17201);
      if (this.input.value > 50) game.setMultiplicador(2 - this.input.value / 100);
      game.setChance(this.input.value);
    }

    if (game.bt_escolha == 1) {
      game.setMultiplicador(1 + 0.04 * this.input.value ** 0.822);
      if (this.input.value > 50) game.setMultiplicador(1 + 0.04 * this.input.value ** 1.2);
      if (this.input.value > 80) game.setMultiplicador(1 + 0.04 * this.input.value ** 1.7);
      game.setChance(100 - this.input.value);
    }
  },
};

el.setValue(50);
el.change();

export default el;
