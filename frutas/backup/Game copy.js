class Game{
    constructor(){
        this.posicao = 0
        this.squares = squares
        this.speed = 2
        
    }

    pisca(n){
        squares.children[n].classList.remove('square_active')
        setTimeout(()=>{ squares.children[n].classList.add('square_active') },50)
        let audio = new Audio('mp3/coin.mp3')
        audio.play()
    }

    piscaProximo(){
        if(this.posicao > squares.children.length-1) this.posicao = 0;
        this.pisca(++this.posicao-1)
    }

    gira(escolha){
        this.piscaProximo()
        if(this.speed < 10 && this.posicao == escolha) this.speed = 0;
        this.speed *= 0.97
        setTimeout(()=>{
            if(this.speed > 3)
                this.gira(escolha)
        },parseInt(1000/this.speed))
    }

    escolha(n){
        this.speed = 40
        this.gira(n)
    }

    velocity(vel){
        if(vel <= 0) vel = 0
        this.speed = vel
    }

    update(){

        //velocidade
        this.n++
        if(this.n%parseInt(50/this.speed) == 0) 
            this.piscaProximo()
        
        // if(this.n%100==0)
            // this.piscaProximo()
            // this.velocity(--this.speed)

    }
}

let game = new Game()
game.velocity(19)


function go(){
    game.update()
    window.requestAnimationFrame(go);
}

window.requestAnimationFrame(go);

