import Money from './Money.js'

let Values = {
  wallet: 500,
  bonus: 0,
  mult: 2.7,
  bet: 2,
  bombs: 6,
  coins_reveled: 0,
  bombs_reveled: 0,

  setWallet(value) {
    this.wallet = value;
    this.render()
  },
  setBonus(value) {
    this.bonus = value;
    this.render()
  },
  setMult(value) {
    this.mult = parseFloat(value.toFixed(2));
    this.render()
  },
  setBet(value) {
    this.bet = value;
    this.render()
  },

  setBombs(value) {
    this.bombs = value;
    this.render()
  },

  render() {
    p_wallet.innerHTML = Money(this.wallet);
    p_moneyGame.innerHTML = Money(this.bonus);
    p_multGame.innerHTML = this.mult + " x";
    inp_betValue.value = Money(this.bet);
    p_statBomb.innerHTML = this.bombs;
    p_statCoin.innerHTML = 25 - this.bombs;
    
  },
};

Values.render()

export default Values