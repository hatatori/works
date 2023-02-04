let estrelas = {
    el: div_estrelas,
    n: 0,
    proximaEstrela() {
      --this.n;
      this.el.style.backgroundPosition = 0 + "px " + -this.n * 2 + "px";
    },

    reset(){
        this.n = 0
    }

  };

  

export default estrelas