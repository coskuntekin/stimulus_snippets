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
        if (JSON.parse(element.getAttribute("aria-invalid"))) {
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

    submit(event) {
      let [data, status, xhr] = event.detail;
      if (
        xhr.getResponseHeader("Content-Type") !== "text/javascript; charset=utf-8"
      ) {
        this.element.innerHTML = xhr.response;
        this.initialize();
      }
    }

    validity(event) {
      if (JSON.parse(event.currentTarget.getAttribute("aria-invalid"))) {
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

    disconnect() {
      this.inputTargets.forEach((element) => {
        element.setAttribute("aria-invalid", false);
        element.classList.remove("form__input--error");
      });
      this.messageTargets.map((element) => element.remove());
    }
  }
```
