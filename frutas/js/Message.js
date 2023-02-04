import Animation from "./Animation.js";

let Message = {
  win(msg) {
    s_message.querySelector("p").innerHTML = msg;
    s_message.classList.remove("message--fadeout");
    s_message.classList.add("message--fadein");
    setTimeout(() => {
      s_message.classList.add("message--fadeout");
      s_message.classList.remove("message--fadein");
    }, 2000);
    Animation.transfer3();
  },

  simples(msg) {
    let div = document.createElement("div");
    div.className = "message2";
    div.innerHTML = `<div class="message-in">${msg}</div>`;
    document.body.appendChild(div);
    setTimeout(() => {
      div.classList.add("message-out");
      div.onanimationend = () => div.remove();
    }, 3000);
  },
  
};



// Message.win("Ganhou 200");

export default Message;
