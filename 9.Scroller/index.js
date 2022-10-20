document.addEventListener("DOMContentLoaded", function () {
  const scroller = new Scroller(".main");
  const swiper = new Swiper();

  document.addEventListener("wheel", function (event) {
    scroller.listenScroll(event);
  });

  document.addEventListener("swipeUp", () => scroller.scroll(1));
  document.addEventListener("swipeDown", () => scroller.scroll(-1));
});
