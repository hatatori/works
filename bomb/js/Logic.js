import Cards from './Cards.js';
import Message from './Message.js';
import  Values from './Values.js'

let Logic = {
  canBet: true,

  getButton() {
    return btn_apostar.innerHTML;
  },

  setButton(value) {
    btn_apostar.innerHTML = value;

    if (value == "Retirar") {
      btn_apostar.classList.add("btn-green");
    }

    if (value == "Apostar") {
      btn_apostar.classList.remove("btn-green");
    }


  },

  double() {
    if (this.getButton() == "Retirar") {
      Message("Conclua a jogada primeiro");
      return false;
    }

    Values.setBet(Values.bet * 2);
  },
  half() {
    if (this.getButton() == "Retirar") {
      Message("Conclua a jogada primeiro");
      return false;
    }

    if (Values.bet > 1) Values.setBet(Values.bet / 2);
  },

  bet() {
    this.checkPlay();

    Values.setWallet(Values.wallet - Values.bet);
    Values.setBonus(Values.bet);
    this.setButton("Retirar");
  },

  coin_plus() {
    Values.coins_reveled++;
    Values.setMult(1.04 + (Values.coins_reveled / 100) * 5);
    Values.setBonus(Values.bonus * Values.mult);
  },

  lose() {
    Values.setBonus(0);
    this.setButton("Apostar")

    setTimeout(this.showAllCards, 500);
    setTimeout(this.hideAllCards, 3000);
  },

  showAllCards() {
    let cards_children = [...cards.children];
    cards_children.forEach((e) => {
      Cards.Flip(e.position);
    });
  },

  hideAllCards() {
    let cards_children = [...cards.children];
    cards_children.forEach((e) => e.classList.remove('flip'));
  },

  checkPlay() {
    if (this.getButton() == "Retirar" && Values.coins_reveled == 0) Message("Escolha pelo menos 1 carta");
  },
};

export default Logic