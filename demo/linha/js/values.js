import money from "./money.js"

let values = {
    money: 500,
    bet: 2,
    mult: 100,

    setBet(n){
        // n = parseFloat(n.toFixed(2))
        this.bet = parseFloat(n)
        // inp_bet_value.value = money(n)
    },
    
    setMult(n){
        n = parseFloat(n)
        if(n < 1) return
        if(isNaN(n)) n = Infinity
        this.mult = n
    },

    setMoney(n){
        n = parseFloat(n.toFixed(2))
        this.money = n
        p_money.innerHTML = money(n)
    }
}

values.setBet(values.bet)
values.setMoney(values.money)
values.setMult(values.mult)

inp_bet_value.value = values.bet


export default values