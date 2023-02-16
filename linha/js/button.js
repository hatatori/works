let button = {

  el: bt_main,

  getName(){
    return this.el.innerText
  },

  setName(n){
    this.el.innerText = n
    if (this.el.innerText == "Retirar") {
      this.el.style.backgroundColor = "#43a047";
      inp_mult_value.setAttribute("disabled", true)
      inp_bet_value.setAttribute("disabled", true)
    }
    if (this.el.innerText == "Aguarde") {
      this.el.style.backgroundColor = "#7b1fa2";
      inp_mult_value.setAttribute("disabled", true)
      inp_bet_value.setAttribute("disabled", true)
    }
    if (this.el.innerText == "Apostar") {
      this.el.style.backgroundColor = "#d81b60";
      inp_mult_value.removeAttribute('disabled')
      inp_bet_value.removeAttribute('disabled')
    }
  },

  checkName(name){
    return this.el.innerText == name ? true : false
  }

};

export default button