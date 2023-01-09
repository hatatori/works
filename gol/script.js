import loading from './js/loading.js'
import ball from './js/ball.js'
import ballwhite from "./js/ballwhite.js";
import character from './js/character.js'
import events from './js/events.js'
import message from './js/message.js'
import sounds from "./js/sounds.js";
import values from "./js/values.js";

sounds.music()
sounds.crowd()

function choice_character_ball(character_direction, ball_direction){

    // sounds.whistle();
    
    let directions = "left,leftup,up,rightup,right".split(",")

    character.decision = character_direction;
    setTimeout(()=>{
        character.animation[character_direction] ()
    },150)
    
    ball.animation[ball_direction]();
        
    if(character_direction != ball_direction){
        setTimeout(()=>{
            // message.mult("13.8x", ball_direction);
            message.mult("x"+values.multlist[values.mult], ball_direction);
            values.setEarns(values.earns * values.multlist[values.mult]);
            values.setProgress(++values.mult)
            sounds.cheering()
        },500)
    }else{
        values.setProgress(0);
        values.setEarns(0);
    }

    // character.animation.leftup();
    // ball.animation.leftup();

    setTimeout(()=>{
        character.animation.normal();
        ball.animation.normal();
        ballwhite.showall();
    },1500)

}

function choice(a,b){
    sounds.whistle();
    // ballwhite.position(b);
    setTimeout(()=>{choice_character_ball(a, b)},1000)
}


// window.onclick=()=> {
//     let directions = "left,leftup,up,rightup,right".split(",");
//     let a = directions[parseInt(Math.random() * 5)];
//     let b = directions[parseInt(Math.random() * 5)];
//     choice(a, b)
// sounds.music();
// }

window.onkeyup = e => {
    // if(e.key == "'"){
        // let directions = "left,leftup,up,rightup,right".split(",");
        // let a = directions[parseInt(Math.random() * 5)];
        // let b = directions[parseInt(Math.random() * 5)];
        // choice(a, b);
        // ballwhite.position(b);
        // choice('left', 'left');
    // }

    // if(e.key == "1") choice('up', 'rightup');
    // if(e.key == "2") choice('rightup', 'rightup');

    if (e.key == "1") {

        let direction, directions, r, a, b;

        directions = "left,leftup,up,rightup,right".split(",");
        r = (Math.random() * directions.length) | 0;
        a = directions[r];

        directions = directions.filter((e, i) => i != r);
        r = (Math.random() * directions.length) | 0;
        b = directions[r];

        ballwhite.position(b);
        choice(a, b);
    }

    // errar
    if (e.key == "2") {
      let directions = "left,leftup,up,rightup,right".split(",");
      let direction = directions[(Math.random() * directions.length) | 0];
      ballwhite.position(direction);
      choice(direction, direction);
    }





}