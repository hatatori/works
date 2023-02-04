// import Frutas from "./Frutas.js";
// import Valores from "./Valores.js";

let Animation = {
  coin(x0, y0, x1, y1) {
    let img = new Image();
    let x = 1;
    img.src = "assets/styles/coin-2.png";
    img.width = 40;
    img.height = 40;
    img.style.position = "absolute";
    img.style.left = x0 + "px";
    img.style.top = y0 + "px";
    img.style.transition = "0.5s";
    img.style.zIndex = 4;
    document.body.appendChild(img);

    // let audio = new Audio('mp3/coin-transfer.mp3')
    // audio.play()

    setTimeout(() => {
      img.style.left = x1 + "px";
      img.style.top = y1 + "px";
    }, 50);

    setTimeout(() => {
      img.style.opacity = 0;
    }, 500);
    setTimeout(() => {
      img.remove();
    }, 1000);
  },

  coins(x0, y0, x1, y1) {
    let a = 0;
    let s = setInterval(() => {
      this.coin(x0, y0, x1, y1);
      if (++a == 10) clearInterval(s);
    }, 100);
  },

  transfer1() {
    this.coins(topob.offsetLeft, topob.offsetTop, topoa.offsetLeft + 50, topoa.offsetTop);
  },
  transfer2() {
    this.coins(topoa.offsetLeft + 70, topoa.offsetTop, topob.offsetLeft, topob.offsetTop);
  },
  transfer3() {
    this.coins(div_placa.offsetLeft + 50, div_placa.offsetTop, topoa.offsetLeft, topoa.offsetTop);
  },

  
};

export default Animation;
