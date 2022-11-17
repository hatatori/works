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

    if (this.buttonText == "Apostou") btn_apostar.style.backgroundColor = "#555";
    else btn_apostar.removeAttribute("style");
  },

  setGameOver(bool) {
    this.gameover = bool;
  },

  setWallet(n) {
    this.wallet = n;
  },

  setBetValue(n) {
    if (this.canBet == false) return false;
    if (this.buttonText == "Apostou") return false;
    if (n <= 1) n = 1;
    this.betValue = n;
  },

  setChoice(n) {
    if (this.buttonText == "Apostou") return false;
    if (this.canBet == false) return false;
    this.choice = n;
  },

  reset() {
    this.setButtonText("Apostar");
    this.setCanBet(true);
    btn_apostar.removeAttribute("style");
    btn_apostar.innerHTML = "Apostar";
  },

  hud_off() {
    document.querySelector(".escolha").style.opacity = 0.5;
    document.querySelector(".escolha").style.pointerEvents = "none";
    document.querySelector(".hud").style.opacity = 0.5;
    document.querySelector(".hud").style.pointerEvents = "none";
  },

  hud_on() {
    document.querySelector(".escolha").style.opacity = 1;
    document.querySelector(".escolha").style.pointerEvents = "all";
    document.querySelector(".hud").style.opacity = 1;
    document.querySelector(".hud").style.pointerEvents = "all";
    stats.setCanBet(true);
  },

  render() {
    document.querySelector(".escolha > .btn-active").classList.remove("btn-active");
    document.querySelectorAll(".escolha > button")[this.choice].classList.add("btn-active");

    // btn_apostar.innerHTML = "Apostar";
    // this.setButtonText(this.buttonText);

    p_wallet.innerHTML = Money(this.wallet);
    inp_betvalue.value = Money(this.betValue);
  },
};

stats.render();

window.onclick = () => stats.render();
window.ontouchstart = () => stats.render();

export default stats;
