import Square from "./Square.js";
import Message from "./Message.js";
import Valores from "./Valores.js";
import Frutas from "./Frutas.js";

const Logic = {
  canBet: true,

  setCanBet(value) {
    this.canBet = value
  },

  Win() {
    let fruit_name = squares.children[Square.position % 24].getAttribute("fruta");
    let fruit_data = squares.children[Square.position % 24].getAttribute("data");
    let fruit_quantity = Frutas.Frutas[fruit_name];

    if (fruit_data.includes("3x") && Frutas.Frutas[fruit_name] > 0) {
      Message.win("Ganhou!!");
      Valores.setSaldoJogo(Frutas.Valor[fruit_name] * 3);
    }

    if (fruit_data.includes("50x") && Frutas.Frutas[fruit_name] > 0) {
      Message.win("Ganhou!!");
      Valores.setSaldoJogo(Valores.apostaBase * 50);
    }

    if (fruit_data.includes("barbarbar") && Frutas.Frutas[fruit_name] > 0) {
      Message.win("Ganhou!!");
      Valores.setSaldoJogo(Frutas.Valor[fruit_name] * Frutas.Frutas[fruit_name]);
    }
    
    if(Frutas.Frutas[fruit_name] > 0){
      Message.win("Ganhou!!");
      Valores.setSaldoJogo(Frutas.Valor[fruit_name] * Frutas.Frutas[fruit_name]);
    }

    // Message.simples("eita")
    
    Valores.render();
  },

  Placa(ar) {
    if (this.canBet == false) return false;

    let n = 5;

    let s = setInterval(() => {
      Valores.setPlaca(parseInt(Math.random() * 14 + 1));
      Valores.render();
    }, 100);

    setTimeout(() => {
      clearInterval(s);

      Valores.setPlaca(n);

      if (ar.includes(n)) {
        Message.win("Ganhou!");
        Valores.setSaldoJogo(Valores.saldoJogo * 2);
      } else {
        Valores.setSaldoJogo(0);
      }

      Valores.render();
    }, 3000);

    Valores.render();
  },
};

// Logic.Placa([1,2,3,4,5])

export default Logic;
