// import game from "./game.js";
// import game from "./game.js";
import historic from "./historic.js";
import loading from "./loading.js";
import stats from "./stats.js";

let cards = {
  force: 0,
  div: div_cards,
  x: 0,

  add_quantity(quantity) {

    function add(number) {
      let div = document.createElement("div");
      div.className = number % 2 ? "card card--green" : "card card--blue";
      div.className = number % 2 == 0 ? "card card--green" : "card card--blue";
      div.number = number;
      if (number == 10) {
        div.className = "card card--white";
        number = "x";
      }
      div.innerHTML = `<div class="card"><p>${number}</p></div>`;
      cards_in.appendChild(div);
    }

    for (let i = 0; i <= quantity; i++) add((i % 10) + 1);
  },

  update() {

    if (this.force > 0) {
      this.force -= 0.2;
      this.x -= this.force;
      cards_in.style.transform = `translateX(${this.x}px)`;
    }

    //onde termina - fim
    if(parseInt(this.force) == 0 && stats.gameover == false) {

      historic.add(this.choice_number);
      loading.setTime(350); 

      //check win
      if (stats.gameover == false && btn_apostar.innerHTML == "Apostou") {
        
        // branco
        if (stats.choice == 1 && this.choice_number == 0) 
          stats.setWallet(stats.wallet + stats.betValue + stats.betValue * 14);
        
        // verde
        if (stats.choice == 0 && this.choice_number != 0 && this.choice_number % 2 == 0) 
          stats.setWallet(stats.wallet + stats.betValue + stats.betValue * 2);
        
        // azul
        if (stats.choice == 2 && this.choice_number != 0 && this.choice_number % 2 == 1) 
          stats.setWallet(stats.wallet + stats.betValue + stats.betValue * 2);
        

        console.log(stats.choice==2)
        console.log(this.choice_number == 5)
        console.log(this.choice_number%2==1)

      }

      stats.reset();
      stats.setGameOver(true);
      // this.choice(parseInt(Math.random() * 10));
    }
    // onde começa a girar

    window.requestAnimationFrame(this.update.bind(this));
  },

  choice(n) {
    this.x = 0;
    let pos = [55.2, 51.478, 51.91, 52.33, 52.75, 53.16, 53.58, 53.99, 54.39, 54.8];
    this.force = pos[n];
    this.choice_number = n;
    stats.setGameOver(false);
  },
};

cards.add_quantity(500);

// setTimeout(()=>{
//   cards.choice(0);
// },3000)

window.requestAnimationFrame(cards.update.bind(cards));

export default cards;
