let foguete = {
    x: 10,
    y: 10,
    el: img_foguete,

    setPos(x, y){
        img_foguete.style.left = x+"px"
        img_foguete.style.top = y+"px"
    },

    explode(){
        this.el.src = "./imgs/explosion.gif"
        this.el.src = "imgs/explosion.gif";
        this.el.style.mixBlendMode = "color-dodge";
        this.el.style.transition = "0.5s";
        setTimeout(() => {
            this.el.style.opacity = 0;
        }, 1000);
    },

    reset(){
        this.el.src = "./imgs/foguete.svg"
        this.el.style.opacity = 1;
        this.el.style.mixBlendMode = "unset";
        this.el.style.transition = '0s'
    }
}

img_foguete.style.transform = "rotate(270deg)"

export default foguete