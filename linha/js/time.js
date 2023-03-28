let time = {
  timestamp: Date.now(),
  check: true,
  factor: 1
}

setInterval(()=>{
    if(time.check){
        let b = new Date((Date.now() - time.timestamp) * time.factor)
        p_texto.innerHTML = 'x'+(b.getTime()/1000).toFixed(2)
        time.mult = b.getTime()/1000
    }
},1000/60)

// setTimeout(()=>{
//   time.check = false
// },10000)

// let a = new Date()
// let check = true

// setInterval(()=>{
//     if(check){
//         let b = new Date((Date.now() - a) * 1)
//         p_texto.innerHTML = 'x'+b.getTime()/1000
//     }
// },1000/60)


export default time


