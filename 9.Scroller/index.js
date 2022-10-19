document.addEventListener("DOMContentLoaded", function () {
  const scroller = new Scroller(".main");

  document.addEventListener("wheel", function (event) {
    scroller.listenScroll(event);
  });

  document.addEventListener("swipeUp", () => console.log("up"));
  document.addEventListener("swipeDown", () => console.log("down"));
});
