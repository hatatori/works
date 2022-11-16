let historic = {
  div: div_historico,
  list: [],

  setList(list) {
    this.list = list;
  },

  add(n) {
    if (n == undefined) return false;

    let btn = document.createElement("button");
    btn.innerHTML = n;

    if (n % 2 == 0) btn.className = "btn btn-green";
    if (n % 2 == 1) btn.className = "btn btn-blue";
    if (n == 10) {
      btn.className = "btn btn-white";
      btn.innerHTML = "x";
    }

    div_historico.insertBefore(btn, div_historico.children[0]);
  },

  renderList() {
    this.div.innerHTML = "";
    this.list.map((e) => this.add(e));
  },
};

export default historic;
