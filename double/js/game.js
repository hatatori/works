import stats from "./stats.js";
import loading from "./loading.js";
import historic from "./historic.js";

let config = {
  wallet: 4651,
  time: 300,
  list: [1, 2],

  init() {
    stats.setWallet(this.wallet);
    loading.setTime(this.time);
    historic.setList(this.list);
    historic.renderList();
    stats.render();
  },
};

export default function game() {
  config.init();

  btn_double.onclick = () => stats.setBetValue(stats.betValue * 2);
  btn_half.onclick = () => stats.setBetValue(stats.betValue / 2);

  btn_escolha_1.onclick = () => stats.setChoice(0);
  btn_escolha_2.onclick = () => stats.setChoice(1);
  btn_escolha_3.onclick = () => stats.setChoice(2);

  btn_apostar.onclick = () => {
    if (stats.buttonText == "Apostar") {
      stats.setButtonText("Apostou");
      btn_apostar.innerHTML = "Apostou";
      // console.log("ok");
      // btn_apostar.style.background = "#555555";
      // stats.setCanBet(false);
      // stats.setWallet(stats.wallet - stats.betValue);
    }
  };
}

game();
