function unsort(array) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

/*
let cardmap = [0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

function render_cards(cardmap) {
  let card_estrutura = `<div class="card"><div class="card-in"><img src="." /></div></div>`;
  cards.innerHTML = "";
  for (i = 0; i < cardmap.length; i++) {
    cards.innerHTML += card_estrutura;
  }

  let n = 0;
  for (let card of cards.children) {
    card.n = n++;
    card.onclick = function () {
      this.classList.add("flip");

      if (cardmap[this.n] == 1) {
        this.classList.add("card--yellow");
        this.querySelector("img").src = "./imgs/coin.png";
      } else {
        this.classList.add("card--red");
        this.querySelector("img").src = "./imgs/bomb.png";
      }
    };
  }
}

render_cards(cardmap);
// el = bloco.children[12];

// el.onclick = function () {
//   this.classList.add("flip");
//   // this.classList.add("card--red");
// };

// window.onmousemove = function (e) {
//   x = e.clientX;
//   el.style.transform = `rotateY(${x}deg)`;
// };

// bloco.children[13].classList.add("flip");
// bloco.children[13].classList.add("card--yellow");
*/
