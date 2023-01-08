let values = {

  betvalue:20,
  earns: 20,
  cash: 30,
  multlist: [ 1.9 , 2.7, 5.3,2,2,2],
  mult: 0,
  team1: "brazil",
  team2: "usa",

  money(n) {
    return "R$ " + n.toFixed(2).replace(".", ",");
  },

  setBetvalue(n) {
    this.betvalue = n;
    el_betvalue.innerHTML = this.money(this.betvalue);
  },
  setEarns(n) {
    this.earns = n;
    el_earns.innerHTML = this.money(this.earns);
  },
  setCash(n) {
    this.cash = n;
    el_cash.innerHTML = this.money(this.cash);
  },


  setMultlist(arr) {
    this.multlist = arr;

    let barra = document.querySelector(".barra");
    barra.innerHTML = "";
    for (let i of this.multlist) barra.innerHTML += `<div class="text" data-value="x${i.toFixed(2)}"></div>`;
  },

  render() {
    el_betvalue.innerHTML = this.money(this.betvalue);
    el_earns.innerHTML = this.money(this.earns);
    el_cash.innerHTML = this.money(this.cash);
    
    this.setMultlist(this.multlist);
    this.setProgress(this.mult);
    this.setTeam(this.team1, this.team2);

  },

  setProgress(n){
    this.mult = n
    el_progress.style.width = (n / (this.multlist.length-1)) * 100 + 3 + "%";
  },

  setTeam(t1, t2){
    this.t1 = t1
    this.t2 = t2
    el_team1.src = "./imgs/flags/"+this.t1+".jpg"
    el_team2.src = "./imgs/flags/"+this.t2+".jpg"
  }

};

values.render()
values.setProgress(2);



export default values