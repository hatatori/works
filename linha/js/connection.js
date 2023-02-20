// https://hatatori.github.io/works/linha?t=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLWhvbW9sb2cucHJpbWViZXRzLmJldC9zaWduLWluL2N1c3RvbWVyIiwiaWF0IjoxNjc2NzU3MzkzLCJleHAiOjE2NzcxODkzOTMsIm5iZiI6MTY3Njc1NzM5MywianRpIjoieG9HMGc3V2Z6aWcxamp1USIsInN1YiI6IjE3OWYzZDdjLTlmNjctMTFlZC04MGQ4LTAyNDJhYzFhMDAwMiIsInBydiI6IjVlMzliMzMwOTg0Y2E4NWU2OWYwYjA4ZjIzYzg3MWY3MzVlMTU2MjQiLCJuYW1lIjoiUHJpbWUgQmV0cyBPZmljaWFsIiwiZW1haWwiOiJwcmltZWJldHNvZmljaWFsQHByaW1lYmV0cy5iZXQifQ.HX4nGgxpXySddzkltZDsrcWODi5Cbeuu2vxqtKVVgOU

import values from "./values.js"
import table from "./table.js"
import message from "./message.js"
import game from "./game.js"

let connection = {

  url: "https://api-homolog.primebets.bet",
  bet_url: "/games/crash/bet",
  cachout_url: "/games/crash/cashout",
  complete_url: "/games/crash/round/complete",

  init(){
    let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLWhvbW9sb2cucHJpbWViZXRzLmJldC9zaWduLWluL2N1c3RvbWVyIiwiaWF0IjoxNjc2NzU4NTY0LCJleHAiOjE2NzcxOTA1NjQsIm5iZiI6MTY3Njc1ODU2NCwianRpIjoiTW5DeWJJZVZUczVxcEVGcSIsInN1YiI6IjE3OWYzZDdjLTlmNjctMTFlZC04MGQ4LTAyNDJhYzFhMDAwMiIsInBydiI6IjVlMzliMzMwOTg0Y2E4NWU2OWYwYjA4ZjIzYzg3MWY3MzVlMTU2MjQiLCJuYW1lIjoiUHJpbWUgQmV0cyBPZmljaWFsIiwiZW1haWwiOiJwcmltZWJldHNvZmljaWFsQHByaW1lYmV0cy5iZXQifQ.tnE8lST-HkhbZFhCsKTT2P5gbpLU6uK7H7JF-QXQeGA"
    let search = window.location.search
    let t = search.includes('t=') == false ? token : search.split("=").pop()
    connection.token = t

  },

  cachout(){

    console.log('cachout')

    let obj = { "multiplier": game.porcent }
    
    fetch(this.url+this.cachout_url,{
      method:"POST",
      headers:{ 
          "accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": "Bearer "+this.token
      },
      body: JSON.stringify(obj)
    })
  },

  complete(){
    fetch(this.url+this.complete_url,{
      method:"PUT",
      headers:{ 
          "accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": "Bearer "+this.token
      }
    })
    .then(e=>e.json())
    .then(e=>{
      console.log('eita')
      console.log(e)
    })
  },

  bet(){
    console.log('bet')
    let obj = { "amount": values.bet }
    if(values.mult != Infinity) obj["multiplier"] = values.mult
    fetch(this.url+this.bet_url,{
      method:"POST",
      headers:{ 
          "accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": "Bearer "+this.token
      },
      body: JSON.stringify(obj)
    })

  }
}

// d1: new Date(tik.createdAt),
// d2: new Date(tik.updatedAt),

let time = {
  d1: new Date(),
  d2: new Date(),
  d3: new Date(),
  fact: 1.01,

  dif(){
    return (this.d3.getTime() - this.d2.getTime())/1000
  },

  calc(){
    this.val = 1.01 * this.dif()
    return this.val
  }

}

connection.init()

var socket = io("https://ws-double-crash.primebets.bet");

socket.on('connect', (ok) => {

  const payload = { token: connection.token, game: 'crash' }

  socket.emit('register', payload)
  
  socket.on('registerCallback', msg => {
    console.log('register')
    console.log(msg)

    // game.porcent = msg.multiplier
    // game.porcent = msg.multiplier
    // console.log(game.porcent)

    values.setMoney(msg.balance)
    table.historico = msg.currentRound.history

    msg.currentRound.id
    connection.id = msg.currentRound.id
  })
  
  socket.on('crash.tick', tik => {
    
    // console.log('tik')
    // console.log(tik)
    
    if(tik.status == 'complete'){
      game.end()
      p_texto.innerHTML = 'x'+tik.multiplier
    }

    if(tik.status == 'started'){
      game.reset()

      // console.log('started')
      // console.log(tik)
      
      time.d1 = new Date(tik.createdAt)
      time.d2 = new Date(tik.updatedAt)
      time.d3 = new Date()

      game.porcent = time.calc()

    }
    
    // setInterval(()=>{
    //   console.log(tik)
    // }, 500 )
    
  })

  // message.normal(tik.multiplier)


})



export default connection