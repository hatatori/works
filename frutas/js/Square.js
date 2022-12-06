import Logic from "./Logic.js";


let Square = {
  position: 0,
  speed: 1000,
  time: 0,

  Hover(n) {
    // n = n % 24 == 0 ? 0 : n
    squares.children[n].classList.add("square_active");
    squares.children[n].onanimationend = () => squares.children[n].classList.remove("square_active");

    // let audio = new Audio('mp3/coin.mp3')
    // audio.play()
  },

  Next() {
    this.Hover(++this.position % 24);
  },


  setSpeed(value){
    this.speed = value
  },

  setPosition(value) {
    value = value % 24 == 0 ? 0 : value;
    this.position = value;
  },

  Choice(escolha) {
    this.speed -= 0.1;

    let num = parseFloat((this.speed % 0.5).toFixed(2));

    if (num % 0.5 == 0) {
      this.Next();
    }

    if(this.speed <= 980 && this.position%24 == escolha){
      Logic.Win()
      Logic.setCanBet(true)
      return false
    }

    setTimeout(() => {
      this.Choice(escolha);
    }, (1000 - this.speed));
  },

  ChoiceRandom(){
    this.Choice(parseInt(Math.random() * 23))
  }
};



// square_block--active

export default Square;
