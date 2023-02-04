import stats from "./stats.js";
import loading from "./loading.js";
import historic from "./historic.js";

let config = {
  
  wallet: 500,
  time: 200,
  list: [1, 2],

  init() {
    stats.setWallet(this.wallet);
    stats.setBetValue(stats.betValue)
    loading.setTime(this.time);
    historic.setList(this.list);
    historic.renderList();
  },
};

export default config