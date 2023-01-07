import Money from "./Money.js";
import Animation from './Animation.js'

let Valores = {
  saldoReal: 100,
  saldoJogo: 20,
  somaTotal: 0,
  apostaBase: 1,
  placa: 3,

  setSaldoReal(value) {
    this.saldoReal = value;
    this.render()
  },
  setSaldoJogo(value) {
    this.saldoJogo = value;
    this.render()
  },
  setSomaTotal(value) {
    this.somaTotal = value;
    this.render()
  },

  setApostaBase(value) {
    if (value < 1) return false;

    if (value < this.saldoReal) {
      this.apostaBase = value;
    }
    this.render()
  },
  setPlaca(value) {
    this.placa = value;
    this.render()
  },

  Jogo2Real() {

    if (this.canPlay == false) return false;
    if (this.saldoJogo == 0) return false;

    this.setSaldoJogo(this.saldoJogo / 2);

    let temponto = this.saldoJogo.toString().includes(".");
    let decimal = temponto ? parseFloat("0." + this.saldoJogo.toString().split(".").at(-1)) : 0;

    this.setSaldoReal(this.saldoReal + this.saldoJogo + decimal);
    this.setSaldoJogo(this.saldoJogo - decimal);
    // this.transfer2();

    Animation.transfer2();
    this.render()
  },

  Real2Jogo() {
    // if (this.canPlay == false) return false;

    if (this.saldoReal - this.saldoJogo > 0) {
      Animation.transfer1();
      this.setSaldoReal(this.saldoReal - this.saldoJogo);
      this.setSaldoJogo(this.saldoJogo * 2);
    }
    this.render();
    
    // this.setSaldoJogo(this.saldoJogo+this.somaTotal)
  },

  render() {
    topoa.innerHTML = Money(this.saldoJogo);
    topob.innerHTML = Money(this.saldoReal);
    p_somatotal.innerHTML = Money(this.somaTotal);
    p_aposta_base.innerHTML = Money(this.apostaBase);
    div_placa.innerHTML = this.placa;
  },
};

export default Valores;
