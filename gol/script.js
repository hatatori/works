import ball from './js/ball.js'
import ballwhite from "./js/ballwhite.js";
import character from './js/character.js'
import events from './js/events.js'
import message from './js/message.js'
import sounds from "./js/sounds.js";
import values from "./js/values.js";

sounds.music()

function choice_character_ball(character_direction, ball_direction){

    // sounds.whistle();
    // ballwhite.position(ball_direction);
    
    let directions = "left,leftup,up,rightup,right".split(",")
    
    
    character.animation[character_direction] ()
    ball.animation[ball_direction]()
        
    if(character_direction  != ball_direction){
        setTimeout(()=>{
            message.mult("13.8x", ball_direction);
        },500)
    }

    // character.animation.leftup();
    // ball.animation.leftup();

    setTimeout(()=>{
        character.animation.normal();
        ball.animation.normal();
        ballwhite.showall();
    },2000)
}

function choice(a,b){
    sounds.whistle();
    ballwhite.position(b);
    setTimeout(()=>{choice_character_ball(a, b)},1000)
}


window.onclick=()=> {
    let directions = "left,leftup,up,rightup,right".split(",");
    let a = directions[parseInt(Math.random() * 5)];
    let b = directions[parseInt(Math.random() * 5)];
    choice(a, b)
}

window.onkeyup = e => {
    if(e.key == " "){
        let directions = "left,leftup,up,rightup,right".split(",");
        let a = directions[parseInt(Math.random() * 5)];
        let b = directions[parseInt(Math.random() * 5)];
        choice(a, b);
    }
}