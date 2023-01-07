import ball from "./ball.js";
import character from './character.js'

let events = {}

el_ball_choice_left.onclick = () => {
  character.animation.left()
  if (character.state == 'left') ball.animation.leftout();
  else ball.animation.left();
}

// el_ball_choice_right.onclick = () => {
//   character.animation.right()
//   if (character.state == 'right') ball.animation.rightout();
//   else ball.animation.right();
// }


// el_ball_choice_left.onclick = () => character.animation.left()
el_ball_choice_leftup.onclick = () => character.animation.leftup()
el_ball_choice_up.onclick = () => character.animation.up()
el_ball_choice_right.onclick = () => character.animation.right()
el_ball_choice_rightup.onclick = () => character.animation.rightup()




export default events