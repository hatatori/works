import Logic from './Logic.js'

let Frutas = {
  Frutas: {
    barbarbar: 0,
    estrela: 0,
    laranja: 0,
    sino: 0,
    maca: 0,
    limao: 0,
    melancia: 0,
    seven: 0,

    setBarbarbar(value) {
      this.barbarbar = value;
    },
    setSeven(value) {
      this.seven = value;
    },
    setEstrela(value) {
      this.estrela = value;
    },
    setMelancia(value) {
      this.melancia = value;
    },
    setSino(value) {
      this.sino = value;
    },
    setLimao(value) {
      this.limao = value;
    },
    setLaranja(value) {
      this.laranja = value;
    },
    setMaca(value) {
      this.maca = value;
    },

    setFruit(fruit, value){
      this[fruit] = value;
    }
    
  },

  Valor: {
    barbarbar: 120,
    seven: 40,
    estrela: 30,
    melancia: 20,
    sino: 20,
    limao: 15,
    laranja: 15,
    maca: 5,
  },

  Zerar() {
    this.Frutas.setBarbarbar(0);
    this.Frutas.setSeven(0);
    this.Frutas.setEstrela(0);
    this.Frutas.setMelancia(0);
    this.Frutas.setSino(0);
    this.Frutas.setLimao(0);
    this.Frutas.setLaranja(0);
    this.Frutas.setMaca(0);
  },

  render() {
    p_barbarbar.innerHTML = this.Frutas.barbarbar;
    p_estrela.innerHTML = this.Frutas.estrela;
    p_laranja.innerHTML = this.Frutas.laranja;
    p_sino.innerHTML = this.Frutas.sino;
    p_maca.innerHTML = this.Frutas.maca;
    p_limao.innerHTML = this.Frutas.limao;
    p_melancia.innerHTML = this.Frutas.melancia;
    p_seven.innerHTML = this.Frutas.seven;
  },
};

Frutas.Zerar();

Frutas.render();

export default Frutas;
