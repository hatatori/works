import stats from "./stats.js";
import loading from "./loading.js";
import historic from "./historic.js";

let config = {
  wallet: 500,
  time: 200,
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
    if (btn_apostar.innerHTML == "Apostar") {
      btn_apostar.style.backgroundColor = "#555";
      btn_apostar.innerHTML = "Apostou";
      stats.setCanBet(false);
      stats.setWallet(stats.wallet - stats.betValue);
    }
  };
}

game();
