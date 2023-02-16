import values from "./values.js"
import button from "./button.js"
import game from './game.js'
import message from "./message.js"
import logic from "./logic.js"

let events = {}

bt_double.onclick = () => {
    if(!button.checkName('Apostar')) return
    values.setBet(values.bet * 2)
    inp_bet_value.value = values.bet
}

bt_half.onclick = () => {
    if(!button.checkName('Apostar')) return
    if(values.bet > 1)
    values.setBet(values.bet / 2)
    inp_bet_value.value = values.bet
}

inp_bet_value.onkeyup=function(e){
    values.setBet(this.value)
}

inp_mult_value.onkeyup=function(e){
    values.setMult(this.value)
}

// bt_plus.onclick = () => {
//     if(!button.checkName('Apostar')) return
//     values.setMult(parseFloat((values.mult*=1.3).toFixed(2)))
// }

// bt_less.onclick = () => {
//     if(!button.checkName('Apostar')) return
//     if(values.mult <= 1) return
//     values.setMult(parseFloat((values.mult/=1.3).toFixed(2)))
// }

bt_main.onclick = () => logic.collect()

export default events