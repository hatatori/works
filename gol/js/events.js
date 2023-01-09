import ball from "./ball.js";
import ballwhite from "./ballwhite.js";
import character from "./character.js";
import logic from "./logic.js";
import message from "./message.js";
import sounds from "./sounds.js";
import values from "./values.js";

let events = {};

function direction_random(){
    let directions = "left,leftup,up,rightup,right".split(",");
    let direction = directions[(Math.random() * directions.length) | 0]
    return direction
}

el_ball_choice_left.onclick = () => { logic.choice(direction_random(), "left"); }
el_ball_choice_leftup.onclick = () => { logic.choice(direction_random(), "leftup"); }
el_ball_choice_up.onclick = () => { logic.choice(direction_random(), "up"); }
el_ball_choice_rightup.onclick = () => { logic.choice(direction_random(), "rightup"); }
el_ball_choice_right.onclick = () => { logic.choice(direction_random(), "right"); }

// el_ball_choice_right.onclick = () => {
//   character.animation.right()
//   if (character.state == 'right') ball.animation.rightout();
//   else ball.animation.right();
// }

// el_ball_choice_left.onclick = () => character.animation.left()
// el_ball_choice_leftup.onclick = () => character.animation.leftup()
// el_ball_choice_up.onclick = () => character.animation.up()
// el_ball_choice_right.onclick = () => character.animation.right()
// el_ball_choice_rightup.onclick = () => character.animation.rightup()

bt_less.onclick = () => { values.setBetvalue(values.betvalue / 2) };
bt_plus.onclick = () => { values.setBetvalue(values.betvalue * 2) };

export default events;
