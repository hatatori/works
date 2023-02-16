import line from "./js/line.js";
import game from "./js/game.js";
import foguete from "./js/foguete.js";
import message from "./js/message.js";
import values from "./js/values.js";
import events from "./js/events.js";
import button from "./js/button.js";
import table from "./js/table.js";

// init

// values
// values.setBet(values.bet)
// values.setMult(values.mult)
// values.setMoney(values.money)

// game.init()

game.setLimit(2)
game.voar()

// game.renew()

// setTimeout(()=> game.reset(), 3000 )

// button
// button.getName()
// button.setName('Aguarde')

// setTimeout(()=> game.pause(), 1000 )
// setTimeout(()=> game.explode(), 2000 )

// values.setBet(values.bet)
// values.setMult(values.mult)
// values.setMoney(values.money)

// message
// message.msgWin
// message.normal
// message.alert

// game.voar()

// table.historico = [1,2,3,4,5,6,7]

window.onkeyup=function(e){
    if(e.key == "1"){
        console.log(values)
        console.log(values.profit)
    }
}