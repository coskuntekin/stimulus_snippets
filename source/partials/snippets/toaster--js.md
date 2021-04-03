```js
  import { Controller } from "stimulus";

  export default class extends Controller {
    static targets = ["progress"];
    static classes = ["type", "in", "out"];
    static values = { hasProgress: Boolean };

    connect() {
      this.init(this.hasProgressValue);
    }

    toggleClass() {
      this.element.classList.remove(this.inClass);
      this.element.classList.add(this.outClass);
    }

    init(hasProgress) {
      this.element.classList.add(this.typeClass);
      if (hasProgress) {
        let count = 100;
        let interval = setInterval(() => {
          count--;
          this.progressTarget.style.width = count + "%";
          if (count === 0) {
            clearInterval(interval);
            this.toggleClass();
          }
        }, 30);
      } else {
        this.progressTarget.hidden = true;
        setTimeout(() => {
          this.toggleClass();
        }, 3000);
      }
    }

    animationEnd(event) {
      if (event.animationName === "slideOutLeft") {
        this.element.remove();
      }
    }

    close() {
      this.element.classList.add(this.outClass);
    }

    disconnect() {
      this.element.remove();
    }
  }
```
