class Game {
  constructor() {
    this.posicao = 0;
    this.squares = squares.querySelectorAll(".square_block");
    this.speed = 2;

    this.saldoReal = 100;
    this.saldoJogo = 0;
    this.somaTotal = 0;
    this.apostaBase = 10;
    this.apostaBaseOp = 50;
    this.placa = 5;
    this.grupoPlaca = 1;
    this.canPlay = true;

    this.FRUITS = {
      barbarbar: 0,
      estrela: 0,
      laranja: 0,
      sino: 0,
      maca: 0,
      limao: 0,
      melancia: 0,
      seven: 0,
    };

    this.FRUITSVALOR = {
      barbarbar: 120,
      seven: 40,
      estrela: 30,
      melancia: 20,
      sino: 20,
      limao: 15,
      laranja: 15,
      maca: 5,
    };

    this.FRUITSVALORFINAL = {
      barbarbar: 0,
      seven: 0,
      estrela: 0,
      melancia: 0,
      sino: 0,
      limao: 0,
      laranja: 0,
      maca: 0,
    };

    this.init();
  }

  // VIEWS

  pisca(n) {
    n = n % 24;
    this.squares[n].classList.remove("square_active");
    setTimeout(() => {
      this.squares[n].classList.add("square_active");
    }, 50);
    // let audio = new Audio('mp3/coin.mp3')
    // audio.play()
  }

  piscaProximo() {
    this.posicao = this.posicao % 24;
    this.pisca(++this.posicao);
  }

  gira(escolha) {
    this.piscaProximo();
    escolha = escolha % 24;
    this.speed *= 0.975;

    if (this.speed < 10 && this.posicao % 24 == escolha) this.speed = 0;

    setTimeout(() => {
      if (this.speed != 0) this.gira(escolha);
    }, parseInt(1000 / this.speed));

    if (this.speed == 0) {
      setTimeout(() => {
        this.activeSquare(this.posicao);
        this.checkWin();
        this.setCanPlay(true);
      }, 500);
    }
  }

  activeSquare(n) {
    squares.children[n].classList.remove("square_active");
    squares.children[n].classList.add("square_block--active");
  }

  desactiveSquare(n) {
    try {
      squares.children[n].classList.remove("square_block--active");
    } catch (e) {}
  }

  escolha(n) {
    if (this.saldoReal - this.somaTotal < 0) return false;
    if (Object.values(this.FRUITS).filter((e) => e > 0).length == 0) return false;
    if (!this.canPlay) return false;

    if (this.saldoJogo > 0) {
      this.transfer2();
      this.setSaldoReal(this.saldoReal + this.saldoJogo);
      this.setSaldoJogo(0);
    }

    this.desactiveSquare(this.posicao);
    this.speed = 20;
    this.gira(n);
    this.setSaldoReal(this.saldoReal - this.somaTotal);
    this.setCanPlay(false);
  }

  update() {}

  // COINS

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
  }

  coins(x0, y0, x1, y1) {
    let a = 0;
    let s = setInterval(() => {
      this.coin(x0, y0, x1, y1);
      if (++a == 10) clearInterval(s);
    }, 100);
  }

  transfer1() {
    this.coins(topob.offsetLeft, topob.offsetTop, topoa.offsetLeft + 50, topoa.offsetTop);
  }
  transfer2() {
    this.coins(topoa.offsetLeft + 70, topoa.offsetTop, topob.offsetLeft, topob.offsetTop);
  }
  transfer3() {
    this.coins(div_placa.offsetLeft + 50, div_placa.offsetTop, topoa.offsetLeft, topoa.offsetTop);
  }

  message() {
    s_message.classList.remove("message--fadeout");
    s_message.classList.add("message--fadein");
    setTimeout(() => {
      s_message.classList.add("message--fadeout");
      s_message.classList.remove("message--fadein");
    }, 2000);
  }

  // RENDER

  setFruits() {
    p_barbarbar.innerHTML = this.FRUITS.barbarbar;
    p_seven.innerHTML = this.FRUITS.seven;
    p_estrela.innerHTML = this.FRUITS.estrela;
    p_melancia.innerHTML = this.FRUITS.melancia;
    p_sino.innerHTML = this.FRUITS.sino;
    p_limao.innerHTML = this.FRUITS.limao;
    p_laranja.innerHTML = this.FRUITS.laranja;
    p_maca.innerHTML = this.FRUITS.maca;
  }

  setFruit(fruit, quantity) {
    if (!this.canPlay) return false;

    if (this.somaTotal + this.apostaBase - this.saldoReal <= 0) {
      this.FRUITS[fruit] = quantity;
      this.setFruits();
      this.setSomaTotal(this.somaTotal + this.apostaBase);
      this.FRUITSVALORFINAL[fruit] += this.apostaBase;
    }
  }

  setZerar() {
    if (!this.canPlay) return false;

    this.FRUITS.barbarbar = 0;
    this.FRUITS.seven = 0;
    this.FRUITS.estrela = 0;
    this.FRUITS.melancia = 0;
    this.FRUITS.sino = 0;
    this.FRUITS.limao = 0;
    this.FRUITS.laranja = 0;
    this.FRUITS.maca = 0;

    this.FRUITSVALORFINAL.barbarbar = 0;
    this.FRUITSVALORFINAL.seven = 0;
    this.FRUITSVALORFINAL.estrela = 0;
    this.FRUITSVALORFINAL.melancia = 0;
    this.FRUITSVALORFINAL.sino = 0;
    this.FRUITSVALORFINAL.limao = 0;
    this.FRUITSVALORFINAL.laranja = 0;
    this.FRUITSVALORFINAL.maca = 0;

    this.setSomaTotal(0);
    this.setFruits();
  }

  setCanPlay(bool) {
    this.canPlay = bool;
  }

  setSaldoJogo(valor) {
    this.saldoJogo = valor;
    topoa.innerHTML = "R$ " + this.saldoJogo;
  }

  setSaldoReal(valor) {
    this.saldoReal = valor;
    topob.innerHTML = "R$ " + this.saldoReal;
  }

  // jogo -> real
  setSaldoJogoParaSaldoReal() {
    if (this.canPlay == false) return false;
    if (this.saldoJogo == 0) return false;

    this.setSaldoJogo(this.saldoJogo / 2);

    let temponto = this.saldoJogo.toString().includes(".");
    let decimal = temponto ? parseFloat("0." + this.saldoJogo.toString().split(".").at(-1)) : 0;

    this.setSaldoReal(this.saldoReal + this.saldoJogo + decimal);
    this.setSaldoJogo(this.saldoJogo - decimal);
    this.transfer2();
  }

  // real -> jogo
  setSaldoRealParaSaldoJogo() {
    if (this.canPlay == false) return false;

    if (this.saldoReal - this.saldoJogo > 0) {
      this.transfer1();
      this.setSaldoReal(this.saldoReal - this.saldoJogo);
      this.setSaldoJogo(this.saldoJogo * 2);
    }
    // this.setSaldoJogo(this.saldoJogo+this.somaTotal)
  }

  setApostaBaseOp(valor) {
    valor = Math.abs(valor);
    let op = [1, 5, 10, 20, 50, 100];
    valor = op[valor % op.length];
    this.setApostaBase(valor);
  }

  setSomaTotal(valor) {
    this.somaTotal = valor;
    p_somatotal.innerHTML = "R$ " + this.somaTotal;
  }

  setApostaBase(valor) {
    this.apostaBase = valor;
    p_aposta_base.innerHTML = "R$ " + this.apostaBase;
  }

  setPlaca(valor) {
    this.placa = valor;
    div_placa.innerHTML = this.placa;
  }

  animacaoPlaca(n, grupo = 1) {
    if (this.saldoJogo <= 0) return false;

    let s = setInterval(() => {
      let r = parseInt(Math.random() * 14);
      this.setPlaca(r);
    }, 200);

    setTimeout(() => {
      clearInterval(s);
      this.setPlaca(n);
      this.checkWinPlaca(grupo);
    }, 3000);
  }

  checkWinPlaca(grupo) {
    if (grupo == 1 && this.placa <= 7) {
      this.setSaldoJogo(this.saldoJogo * 2);
      this.transfer3();
      // let audio = new Audio("mp3/efeito-7.mp3")
      // audio.play()
    } else if (grupo == 2 && this.placa > 7) {
      this.setSaldoJogo(this.saldoJogo * 2);
      this.transfer3();
    } else {
      this.setSaldoJogo(0);
    }
  }

  animacaoPlacaRandom(grupo = 1) {
    this.animacaoPlaca(parseInt(Math.random() * 14 + 1), grupo);
  }

  checkWin() {
    this.posicao = this.posicao % 24;

    let fruta = squares.children[this.posicao].getAttribute("fruta");

    // this.setCanPlay(true)

    if (this.FRUITS[fruta] == 0) return false;

    if (squares.children[this.posicao].getAttribute("data").includes("3x")) {
      this.setSaldoJogo(this.saldoJogo + this.FRUITS[fruta] * this.FRUITSVALORFINAL[fruta] * 3);
      this.transfer3();
      this.message();
      return false;
    }

    if (squares.children[this.posicao].getAttribute("data").includes("50x")) {
      this.setSaldoJogo(this.saldoJogo + this.FRUITS[fruta] * this.FRUITSVALORFINAL[fruta] * 50);
      this.transfer3();
      this.message();
      return false;
    }

    if (this.FRUITS[fruta] > 0) {
      this.setSaldoJogo(this.saldoJogo + this.FRUITS[fruta] * this.FRUITSVALOR[fruta] * this.FRUITSVALORFINAL[fruta]);
      this.transfer3();
      this.message();
    }
  }

  init() {
    this.setSaldoJogo(this.saldoJogo);
    this.setSaldoReal(this.saldoReal);
    this.setApostaBase(this.apostaBase);
    this.setZerar();

    bt_zerar.onmousedown = () => this.setZerar();
    bt_to_right.onmousedown = () => this.setSaldoJogoParaSaldoReal();
    bt_to_left.onmousedown = () => this.setSaldoRealParaSaldoJogo();

    bt_plus.onmousedown = () => this.setApostaBaseOp(++this.apostaBaseOp);
    bt_less.onmousedown = () => this.setApostaBaseOp(--this.apostaBaseOp);

    btn_barbarbar.onmousedown = () => this.setFruit("barbarbar", ++this.FRUITS.barbarbar);
    btn_seven.onmousedown = () => this.setFruit("seven", ++this.FRUITS.seven);
    btn_estrela.onmousedown = () => this.setFruit("estrela", ++this.FRUITS.estrela);
    btn_melancia.onmousedown = () => this.setFruit("melancia", ++this.FRUITS.melancia);
    btn_sino.onmousedown = () => this.setFruit("sino", ++this.FRUITS.sino);
    btn_limao.onmousedown = () => this.setFruit("limao", ++this.FRUITS.limao);
    btn_laranja.onmousedown = () => this.setFruit("laranja", ++this.FRUITS.laranja);
    btn_maca.onmousedown = () => this.setFruit("maca", ++this.FRUITS.maca);

    bt_group_1.onmousedown = () => this.animacaoPlacaRandom(1);
    bt_group_2.onmousedown = () => this.animacaoPlacaRandom(2);
  }
}

let game = new Game();
// game.velocity(19)

function go() {
  game.update();
  window.requestAnimationFrame(go);
}

window.requestAnimationFrame(go);

// [...group2.children].map(e=>{
//     e.onclick=function(){
//         let audio = new Audio('mp3/pop.mp3')
//         audio.play()
//     }
// })
