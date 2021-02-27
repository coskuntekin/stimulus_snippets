```js
  import { Controller } from "stimulus";

  export default class extends Controller {
    static targets = ["input", "message"];
    static classes = ["hidden", "error"];

    template(id, message) {
      return `
        <div class="${this.errorClass}" data-validation-target="message" data-id="${id}">
          <small>
            ${message}
          </small>  
        </div>
      `;
    }

    initialize() {
      this.inputTargets.forEach((element) => {
        if (element.getAttribute("aria-invalid")) {
          if (JSON.parse(element.dataset.inputHasAddon)) {
            element.parentElement.insertAdjacentHTML(
              "afterend",
              this.template(element.id, element.dataset.message)
            );
          } else {
            element.insertAdjacentHTML(
              "afterend",
              this.template(element.id, element.dataset.message)
            );
          }
        }
      });
    }

    validity(event) {
      if (event.currentTarget.getAttribute("aria-invalid")) {
        if (event.currentTarget.validity.valid) {
          this.messageTargets.map((item) => {
            if (item.dataset.id === event.currentTarget.id) {
              item.classList.add(this.hiddenClass);
            }
          });
          event.currentTarget.setAttribute("aria-invalid", false);
        } else {
          this.messageTargets.map((item) => {
            if (item.dataset.id === event.currentTarget.id) {
              item.classList.remove(this.hiddenClass);
            }
          });
          event.currentTarget.setAttribute("aria-invalid", true);
        }
      }
    }
  }
```
