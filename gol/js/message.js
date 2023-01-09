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
    div.style.position = "absolute";
    div.className = "msg";

    let x = 0;
    let y = 0;

    if (position == "left") [x, y] = [23.5, 42];
    if (position == "leftup") [x, y] = [23.5, 71];
    if (position == "up") [x, y] = [50, 71];
    if (position == "rightup") [x, y] = [76.5, 71];
    if (position == "right") [x, y] = [76.5, 42];

    div.style.left = x+"%";
    div.style.bottom = y+"%";
    div.style.translate = "-45px";

    // div.style.left = "auto";
    // div.style.top = "auto";
    // div.style.bottom = "auto";
    // div.style.right = "auto";


    div.innerHTML = `<div class="msg message-show-in-out">${msg}</div>`;
    // div.innerHTML = `<div class="msg">${msg}</div>`;

    el_campo.appendChild(div);

    setTimeout((e) => {
      div.remove();
    }, 3000);
  }
}

message.team("brazil", "usa")




// message.mult("13.3x", "left");
// message.mult("13.3x", "leftup");
// message.mult("13.3x", "right");

export default message