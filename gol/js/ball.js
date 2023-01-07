import sounds from "./sounds.js";
import character from './character.js'

let ball = {
  el: el_ball,

  pos: {

    normal: { x: -150, y: 200 },
    
    up: { x: 0, y: -100 },
    upout: { x: 0, y: -200 },
    
    left: { x: -257, y: 70 },
    leftout: { x: -420, y: 10 },
    
    leftup: { x: -257, y: -100 },
    leftupout: { x: -357, y: -200 },

    right: { x: 257, y: 70 },
    rightout: { x: 357, y: 10 },

    rightup: { x: 257, y: -100 },
    rightupout: { x: 357, y: -100 },

  },

  position(x, y) {
    ball.el.style.translate = ball.pos.left.x + "% " + -120 + "%";
  },

  positionC(obj) {
    ball.el.style.translate = obj.x + "% " + obj.y + "%";
  },

  init() {
    this.el.style.transition = 0.5 + "s";
    this.positionC(this.pos.normal);
  },

  animation: {
    
    kick(pos) {
      ball.el.style.scale = 0.4;
      ball.el.style.rotate = 400;
      ball.el.style.transform = "rotate(720deg)";
      ball.positionC(pos);
      console.log(pos)
      if (ball.pos.normal != pos) sounds.kick();
    },

    kickOut(pos1, pos2) {
      ball.el.style.scale = 0.4;
      ball.el.style.rotate = 400;
      ball.el.style.transform = "rotate(720deg)";
      ball.positionC(pos1);
      setTimeout(() => {
        ball.positionC(pos2);
        sounds.kick2()
      }, 300);
    },

    normal() {
      // if (character.decision == "normal") this.upout();
      this.kick(ball.pos.normal);
      ball.el.style.scale = 1
      ball.el.style.transform = ""
    },
    
    up() {
      if(character.decision == "up") this.upout()
      this.kick(ball.pos.up);
    },
    left() {
      if(character.decision == "left") this.leftout()
      this.kick(ball.pos.left);
    },
    leftup() {
      if(character.decision == "leftup") this.leftupout()
      this.kick(ball.pos.leftup);
    },
    right() {
      if(character.decision == "right") this.rightout()
      this.kick(ball.pos.right);
    },
    rightup() {
      if(character.decision == "rightup") this.rightupout()
      this.kick(ball.pos.rightup);
    },

    upout() {
      this.kickOut(ball.pos.up, ball.pos.upout);
      return 
    },
    leftout() {
      this.kickOut(ball.pos.left, ball.pos.leftout);
      return 
    },
    leftupout() {
      this.kickOut(ball.pos.left, ball.pos.leftupout);
      return 
    },
    rightout() {
      this.kickOut(ball.pos.left, ball.pos.rightout);
      return 
    },
    rightupout() {
      this.kickOut(ball.pos.left, ball.pos.rightupout);
      return 
    },
  },
};

ball.init();



export default ball;
