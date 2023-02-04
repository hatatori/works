import Valores from "./Valores.js";
import Frutas from "./Frutas.js";
import Events from "./Events.js";
import Message from "./Message.js";
import Square from './Square.js'

let Game = {

  config() {
    // Valores.setSaldoReal(200);
    // Valores.setSaldoJogo(100);
    // this.render();
  },

  render() {
    Frutas.render();
    Valores.render();
  },

  zerar() {
    Frutas.zerar();
  },
};

// Game.config();

Game.render();

window.onclick = () => {
  Game.render();
};

export default Game;
