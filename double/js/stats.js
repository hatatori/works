import Money from "./money.js";

let stats = {
  wallet: 1321,
  betValue: 1,
  choice: 2,
  gameover: false,
  buttonText: "Apostar",
  canBet: true,

  setCanBet(bool) {
    this.canBet = bool;
  },

  setButtonText(txt) {
    this.buttonText = txt;
  },

  setGameOver(bool) {
    this.gameover = bool;
  },

  setChoice(n) {
    this.choice = n;
  },

  setWallet(n) {
    this.wallet = n;
  },

  setBetValue(n) {
    if (n <= 1) n = 1;
    this.betValue = n;
  },

  setChoice(n) {
    this.choice = n;
  },

  render() {
    document.querySelector(".escolha > .btn-active").classList.remove("btn-active");
    document.querySelectorAll(".escolha > button")[this.choice].classList.add("btn-active");

    btn_apostar.onclick = () => {
      if (this.buttonText == "Apostar") {
        this.setButtonText("Apostou");
        btn_apostar.style.background = "#555555";
        this.setCanBet(false);
      }
    };

    btn_apostar.innerHTML = this.buttonText;
    p_wallet.innerHTML = Money(this.wallet);
    inp_betvalue.value = Money(this.betValue);
  },
};

stats.render();

window.onclick = () => stats.render();
window.ontouchstart = () => stats.render();

export default stats;
