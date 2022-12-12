import Cards from './Cards.js'
import Values from './Values.js'
import Logic from './Logic.js'
import Message from "./Message.js";


let Events = {}

btn_double.onclick = () => Logic.double()
btn_half.onclick = () => Logic.half();
btn_apostar.onclick = () => Logic.bet();


for (let bt of div_bombs.children) {
  bt.onclick = function () {

    if(Logic.getButton() == "Retirar"){
      Message("Conclua o jogo primeiro")
      return false
    }


    Values.setBombs(Number(this.value))
  };
}


export default Events