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

    console.log(fruit_data)
    console.log(Frutas.Frutas[fruit_name]);
    console.log(Frutas.Valor[fruit_name]);

    if (fruit_data.includes("3x") && Frutas.Frutas[fruit_name] > 0) {
      Message.win("Ganhou!!");
      Valores.setSaldoJogo(Frutas.Valor[fruit_name] * 3 * fruit_quantity);
      // alert('ok')
    }

    else if (fruit_data.includes("50x") && Frutas.Frutas[fruit_name] > 0) {
      Message.win("Ganhou!!");
      Valores.setSaldoJogo(Valores.apostaBase * 50);
    }

    else if (fruit_data.includes("barbarbar") && Frutas.Frutas[fruit_name] > 0) {
      Message.win("Ganhou!!");
      Valores.setSaldoJogo(Frutas.Valor[fruit_name] * Frutas.Frutas[fruit_name]);
    }
    
    else if (fruit_data == "lucky") {
      // Message.win("Ganhou!!");
      // Valores.setSaldoJogo(Frutas.Valor[fruit_name] * Frutas.Frutas[fruit_name]);
      setTimeout(()=>{
        Square.ActiveN(4)
        Square.ActiveN(10)
        Square.ActiveN(16)
        Square.ActiveN(22)
      },500)
      
      setTimeout(()=>{
        Message.win("Ganhou!!");
        Valores.setSaldoJogo(Frutas.Valor["maca"] * 4);
      },1000)

      setTimeout(()=>{
        Square.Desactive();
      },2000)


      // squares.children[10].classList.add("square_block--active");
      // console.log("viva")
    } else {
      Message.win("Ganhou!!");
      Valores.setSaldoJogo(Frutas.Valor[fruit_name] * Frutas.Frutas[fruit_name]);
      // alert("eita");
    }
    
    // if(Frutas.Frutas[fruit_name] > 0){
      // Message.win("Ganhou!!");
      // Valores.setSaldoJogo(Frutas.Valor[fruit_name] * Frutas.Frutas[fruit_name]);
      // alert('eita')
    // }

    // Message.simples("eita")
    
    Valores.render();
  },

  Placa(ar) {

    if (this.canBet == false) return false;

    // let n = 5;
    let n = parseInt(Math.random() * 14 + 1);

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

      this.setCanBet(true);
    }, 3000);

    Valores.render();

    this.setCanBet(false);
  },
};

// Logic.Placa([1,2,3,4,5])

export default Logic;
