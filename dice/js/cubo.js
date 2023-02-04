let cubo = {
  el: el_cubo,
  deg(x, y) {
    this.el.style.transform = `rotateX(${-y}deg) rotateY(${-x}deg)`;
  },
};

export default cubo;
