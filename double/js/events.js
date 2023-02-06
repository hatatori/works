import stats from "./stats.js";
import communication from "./communication.js";
import message from './message.js'
import connection from './connection.js'
import button from "./button.js";

let events = {}

btn_escolha_1.onclick = () => {
  stats.color = 1
  stats.setChoice(0);
}
btn_escolha_2.onclick = () => {
  stats.color = 2
  stats.setChoice(1);
}
btn_escolha_3.onclick = () => {
  stats.color = 3
  stats.setChoice(2);
}

btn_apostar.onclick = () => {

  
  if(stats.wallet - stats.betValue < 0){
    message.normal("Diminua o valor da aposta")
    return
  }

  if (btn_apostar.innerHTML == "Apostar") {
    // btn_apostar.style.backgroundColor = "#555";
    // btn_apostar.innerHTML = "Apostou";
    // stats.setCanBet(false);
    button.setButton("Apostou")
    stats.setWallet(stats.wallet - stats.betValue);
    // stats.hud_off()

    connection.bet(stats.betValue, stats.color)

  }
};

btn_double.onclick = () => stats.setBetValue(stats.betValue * 2);
btn_half.onclick = () => stats.setBetValue(stats.betValue / 2);

export default events