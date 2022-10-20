class AnimBg {
  constructor(selector) {
    this.elements = document.querySelectorAll(".anim-bg");
  }

  listenCursorMove(e) {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const posX = clientX - centerX;
    const posY = clientY - centerY;

    this.elements.forEach((el) => this.moveElement(el, posX, posY));
  }

  moveElement(el, posX, posY) {
    const ratioX = -el.getAttribute("ratioX");
    const ratioY = -el.getAttribute("ratioY");

    const moveX = posX * ratioX;
    const moveY = posY * ratioY;

    el.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }
}
