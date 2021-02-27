```js
  import { Controller } from "stimulus";

  export default class extends Controller {
    close() {
      this.element.removeAttribute("open");
    }

    disconnect() {
      this.element.removeAttribute("open");
    }
  }
```
