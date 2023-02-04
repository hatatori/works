import button from "./button.js"
import game from "./game.js"
import values from "./values.js"
import message from "./message.js"

let logic = {
    collect(){
        if(button.checkName('Apostar')){
            button.setName('Aguarde')
            game.canBet = false
        }
        if(button.checkName('Retirar')){
            let lucro = values.bet * values.mult
            values.setMoney(values.money + lucro)
            button.setName('Apostar')
            game.canBet = true
            message.msgWin(lucro)
        }
    }
}

export default logic