import ball from './ball.js'

let message = {
  team(t1, t2){
    let div = document.createElement("div")
    div.className = "message"
    div.innerHTML = `
    <div class="message-in message-show-in-out">
      <div class="versus">
          <img src="./imgs/flags/${t1}.jpg">
          <p>VS</p>
          <img src="./imgs/flags/${t2}.jpg">
      </div>
    </div>
    `;
    document.body.appendChild(div)
    setTimeout(e=>{
      div.remove()
    },3000)
  },

  mult(msg, position){
    let div = document.createElement("div");
    div.style.position = "absolute"
    div.className = "msg"

    let x = 0;
    let y = 0;

    if(position == "left") [x,y] = [19, 43]
    if(position == "leftup") [x,y] = [19, 73]
    if(position == "up") [x,y] = [43.5, 73]
    if(position == "rightup") [x,y] = [69, 73]
    if(position == "right") [x,y] = [69, 43]

    div.style.left = x+"%";
    div.style.bottom = y+"%";

    div.innerHTML = `<div class="msg message-show-in-out">${msg}</div>`;

    el_campo.appendChild(div);

    setTimeout((e) => {
      div.remove();
    }, 3000);
  }
}

// message.team("china", "brazil")


// message.mult("13.3x", "left");
// message.mult("13.3x", "leftup");
// message.mult("13.3x", "right");

export default message