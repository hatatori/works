import money from "./money.js"

let values = {
    money: 500,
    bet: 1,
    mult: 1,

    setBet(n){
        
        n = parseFloat(n.toFixed(2))
        this.bet = n
        inp_bet_value.value = money(n)
    },
    
    setMult(n){
        n = parseFloat(n.toFixed(2))
        if(n < 1) return
        this.bet = n
        inp_mult_value.value = n+"x"
    },

    setMoney(n){
        n = parseFloat(n.toFixed(2))
        this.money = n
        p_money.innerHTML = money(n)
    }
}



export default values