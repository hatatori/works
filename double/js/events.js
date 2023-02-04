import stats from "./stats.js";

let events = {}

btn_escolha_1.onclick = () => stats.setChoice(0);
btn_escolha_2.onclick = () => stats.setChoice(1);
btn_escolha_3.onclick = () => stats.setChoice(2);

btn_apostar.onclick = () => {
  if (btn_apostar.innerHTML == "Apostar") {
    btn_apostar.style.backgroundColor = "#555";
    btn_apostar.innerHTML = "Apostou";
    stats.setCanBet(false);
    stats.setWallet(stats.wallet - stats.betValue);
  }
};

btn_double.onclick = () => stats.setBetValue(stats.betValue * 2);
btn_half.onclick = () => stats.setBetValue(stats.betValue / 2);

export default events