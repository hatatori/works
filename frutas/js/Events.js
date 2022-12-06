import Frutas from "./Frutas.js";
import Square from "./Square.js";
import Valores from "./Valores.js";
import Logic from "./Logic.js";
import Message from "./Message.js";
import Animation from './Animation.js'

let Events = {
  init() {
    function Add(fruit) {
      document.querySelector("#btn_" + fruit).onclick = () => {
        
        if (Logic.canBet == false) return false;

        

        Frutas.Frutas.setFruit(fruit, ++Frutas.Frutas[fruit]);
        Valores.setSomaTotal(Valores.somaTotal + Valores.apostaBase);
      };
    }

    ["barbarbar", "seven", "estrela", "melancia", "sino", "limao", "laranja", "maca"].map((el) => Add(el));

    bt_plus.onclick = () => {
      if (Logic.canBet == false) return false;
      Valores.setApostaBase(Valores.apostaBase * 2);
      Valores.setSomaTotal(0);
      Frutas.Zerar();
    };

    bt_less.onclick = () => {
      if (Logic.canBet == false) return false;
      Valores.setApostaBase(Valores.apostaBase / 2);
      Valores.setSomaTotal(0);
      Frutas.Zerar();
    };

    bt_to_right.onclick = () => Valores.Jogo2Real();
    bt_to_left.onclick = () => Valores.Real2Jogo();

    bt_group_1.onclick = () => Logic.Placa([1, 2, 3, 4, 5]);
    bt_group_2.onclick = () => Logic.Placa([6, 7, 8, 9, 10, 11, 12, 13, 14]);

    bt_play.onclick = () => {

      if (Logic.canBet == false) return false;

      if (Valores.somaTotal > Valores.saldoReal) {
        Message.simples("O valor apostado é maior que o valor em conta");
        return false;
      } 

      Logic.canBet = false;

      Valores.setSaldoReal(Valores.saldoReal - Valores.somaTotal);

      Square.setPosition(0);
      Square.setSpeed(1000);

      Square.Choice(parseInt(Math.random()*24));

      if(Valores.saldoJogo > 0){
        Animation.transfer2()
        Valores.setSaldoReal(Valores.saldoReal + Valores.saldoJogo)
        Valores.setSaldoJogo(0)
      }

    };

    bt_zerar.onclick = () => {
      if (Logic.canBet == false) return false;
      Valores.setSaldoReal(Valores.saldoReal + Valores.somaTotal);
      Frutas.Zerar();
      Valores.setSomaTotal(0);
      Valores.setApostaBase(1);
      Valores.render();
    };

    group2.onclick = () => {
      Frutas.render();
    };
  },
};

Events.init();

export default Events;
