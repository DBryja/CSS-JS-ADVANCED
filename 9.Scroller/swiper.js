class Swiper {
  constructor() {
    this.initialY = null;
    this.initialX = null;

    document.addEventListener("touchstart", (event) => {
      this.startTouch(event);
    });
    document.addEventListener("touchmove", (event) => {
      this.moveTouch;
    });

    this.events = {
      swipeUp: new Event("swipeUp"),
      swipeDown: new Event("swipeDown"),
      swipeRight: new Event("swipeRight"),
      swipeLeft: new Event("swipeLeft"),
    };

    startTouch((e) => {
      e.preventDefault();
      this.initialX = e.touches[0].clientX;
      this.initialY = e.touches[0].clientY;
    });

    moveTouch((e) => {
      e.preventDefault();
      if (!this.initialX || !this.initialY) return;

      this.currentX = e.touches[0].clientX;
      this.currentY = e.touches[0].clientY;

      const diffX = this.initialX - this.currentX;
      const diffY = this.initialY - this.currentY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {
          document.dispatchEvent(this.events.swipeLeft);
        } else {
          document.dispatchEvent(this.events.swipeRight);
        }
      } else {
        if (diffY > 0) {
          document.dispatchEvent(this.events.swipeUp);
        } else {
          document.dispatchEvent(this.events.swipeDown);
        }
      }
    });
  }
}
