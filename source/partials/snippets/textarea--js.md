```js
  import { Controller } from "stimulus";

  export default class extends Controller {
    static targets = ["lenght", "textarea"];
    static classes = ["danger"];
    static values = { lenght: Number };
    validate(valueLength) {
      this.lenghtTarget.innerText = this.lenghtValue - valueLength;
      valueLength > this.lenghtValue
        ? this.lenghtTarget.classList.add(this.dangerClass)
        : this.lenghtTarget.classList.remove(this.dangerClass);
    }
    initialize() {
      this.validate(this.textareaTarget.value.length);
    }
    update(event) {
      this.validate(event.target.value.length);
    }
  }
```
