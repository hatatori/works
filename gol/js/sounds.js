let sounds = {
  play(filename){
    let aud = new Audio(`./sounds/${filename}`)
    aud.play()
  },

  kick(){ this.play("kick1.mp3") },
  kick2(){ this.play("kick2.mp3"); },
  
  music(){ 
    // this.play("skeletons.mp3"); 
    let aud = new Audio(`./sounds/skeletons.mp3`);
    aud.play();
    aud.volume = 0.4
    aud.loop = true
  },
  crowd(){ this.play("crowd.mp3"); },
  whistle(){ this.play("whistle.mp3"); },
  cheering(){ this.play("cheering.mp3"); }
}

export default sounds