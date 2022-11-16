n = 1
posicao = 0
speed = 10

function pisca(n){
    squares.children[n].classList.remove('square_active')
    setTimeout(()=>{
        squares.children[n].classList.add('square_active')
    },0)
    // let audio = new Audio('mp3/coin.mp3')
    // audio.play()
}

function piscaProximo(){
    if(posicao > squares.children.length-1) posicao = 0;
    pisca(posicao++)
}

function velocidadeGiro(vel){
    speed = vel
    if(speed == 0 ) return

    // if(n++%(20/speed) == 0) 
    //     piscaProximo()
    // if(Math.abs(speed-20))
        // piscaProximo()
}

function go(){
    velocidadeGiro(speed)

    // if(n%40 == 0 && speed > 0)
    //     speed = speed - 0.5

    // console.log(speed)

    console.log(speed)

    speed *= 0.997
    // speed = Number(speed.toFixed(2))


    window.requestAnimationFrame(go);
}

window.requestAnimationFrame(go);

