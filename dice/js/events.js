import game from "./game.js";
import input from "./input.js";

let events = {
  start() {
    btn_half.onmousedown = () => game.setValor_aposta(game.valor_aposta / 2);
    btn_double.onmousedown = () => game.setValor_aposta(game.valor_aposta * 2);
    btn_alto.onmousedown = () => game.setBtEscolha(0);
    btn_baixo.onmousedown = () => game.setBtEscolha(1);

    btn_play.onmousedown = () => {
      if (game.n == 200) {
        game.choice(Math.random() * 100 + 1);
        game.setWallet(game.wallet - game.valor_aposta);
      }
      game.setCanBet(false);
    };

    // btn_half.ontouchstart = () => game.setValor_aposta(game.valor_aposta / 2);
    // btn_double.ontouchstart = () => game.setValor_aposta(game.valor_aposta * 2);
    // btn_alto.ontouchstart = () => game.setBtEscolha(0);
    // btn_baixo.ontouchstart = () => game.setBtEscolha(1);

    // section.oninput = () => input.change();

    input.section.onmousedown = () => {
      if (game.canBet == false) {
        input.input.setAttribute("disabled", true);
      } else {
        input.input.removeAttribute("disabled");
      }
    };

    input.section.oninput = () => {
      input.change();
      game.render();
    };
  },
};

export default events.start();
