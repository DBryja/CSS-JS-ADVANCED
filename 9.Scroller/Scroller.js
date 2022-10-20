class Scroller {
  constructor(rootSelector) {
    const rootElement = document.querySelector(rootSelector);
    this.sections = document.querySelectorAll("section");
    const sectionsArray = [...this.sections];

    this.isScrolledIntoView(this.sections[0]);
    //  wybiera element dla którego callback jest spelniony V
    const currentSectionIndex = sectionsArray.findIndex(this.isScrolledIntoView);
    //  this.currentSectionIndex = currentSectionIndex < 0 ? 0 : currentSectionIndex;
    this.currentSectionIndex = Math.max(currentSectionIndex, 0);
    this.isThrottled = false;
    this.drawNavigation();
  }

  isScrolledIntoView(el) {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    const isVissible = elemTop >= 0 && Math.floor(elemBottom) <= window.innerHeight;
    return isVissible;
  }

  listenScroll = (event) => {
    if (this.isThrottled) return;
    this.isThrottled = true;

    setTimeout(() => {
      this.isThrottled = false;
    }, 500);

    const direction = event.wheelDelta < 0 ? 1 : -1;

    this.scroll(direction);
  };

  scroll = (direction) => {
    if (direction === 1) {
      const isLastSection = this.currentSectionIndex === this.sections.length - 1;
      if (isLastSection) return;
    } else if (direction === -1) {
      const firstSection = this.currentSectionIndex === 0;
      if (firstSection) return;
    }

    this.currentSectionIndex = this.currentSectionIndex + direction;
    this.scrollToCurrentSection();
  };

  scrollToCurrentSection = () => {
    this.selectActiveNavItem();
    this.sections[this.currentSectionIndex].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  drawNavigation = () => {
    this.navigationContainer = document.createElement("aside");
    this.navigationContainer.setAttribute("class", "scroller__navigation");
    const list = document.createElement("ul");

    this.sections.forEach((section, index) => {
      const listItem = document.createElement("li");
      list.appendChild(listItem);

      listItem.addEventListener("click", () => {
        this.currentSectionIndex = index;

        this.scrollToCurrentSection();
      });
    });
    this.navigationContainer.appendChild(list);
    document.body.appendChild(this.navigationContainer);
    this.selectActiveNavItem();
  };

  selectActiveNavItem = () => {
    if (this.navigationContainer) {
      const navigationItems = this.navigationContainer.querySelectorAll("li");
      navigationItems.forEach((item, index) => {
        if (index === this.currentSectionIndex) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }
  };
}
