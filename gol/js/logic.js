import loading from "./loading.js";
import ball from "./ball.js";
import ballwhite from "./ballwhite.js";
import character from "./character.js";
import events from "./events.js";
import message from "./message.js";
import sounds from "./sounds.js";
import values from "./values.js";


let logic = {

  nogoal(){
      let directions = "left,leftup,up,rightup,right".split(",");
      let direction = directions[(Math.random() * directions.length) | 0];
      ballwhite.position(direction);
      this.choice(direction, direction);
  },

  goal(){
      let direction, directions, r, a, b;
      directions = "left,leftup,up,rightup,right".split(",");
      r = (Math.random() * directions.length) | 0;
      a = directions[r];
      directions = directions.filter((e, i) => i != r);
      r = (Math.random() * directions.length) | 0;
      b = directions[r];
      ballwhite.position(b);
      this.choice(a, b);
  },

  choice_character_ball(character_direction, ball_direction) {
    // sounds.whistle();

    let directions = "left,leftup,up,rightup,right".split(",");

    character.decision = character_direction;
    setTimeout(() => {
      character.animation[character_direction]();
    }, 150);

    ball.animation[ball_direction]();

    if (character_direction != ball_direction) {
      setTimeout(() => {
        // message.mult("13.8x", ball_direction);
        message.mult("x" + values.multlist[values.mult], ball_direction);
        values.setEarns(values.earns * values.multlist[values.mult]);
        values.setProgress(++values.mult);
        sounds.cheering();
      }, 500);
    } else {
      values.setProgress(0);
      values.setEarns(0);
    }

    // character.animation.leftup();
    // ball.animation.leftup();

    setTimeout(() => {
      character.animation.normal();
      ball.animation.normal();
      ballwhite.showall();
    }, 1500);
  },

  choice(a, b) {
    sounds.whistle();
    ballwhite.position(b);
    setTimeout(() => {
      this.choice_character_ball(a, b);
    }, 1000);
  }
}

export default logic