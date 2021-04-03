```js
  import { Controller } from "stimulus";

  export default class extends Controller {
    static targets = ["image", "modal", "backdrop", "thumbnail", "prev", "next"];

    template(image) {
      return `
      <div aria-label="Lightbox modal" class="fixed shadow-2xl lightbox bg-white rounded" data-lightbox-target="modal">
        <div aria-label="Head" class="flex justify-between px-4 py-2">
          <h3>
            Title
          </h3>
          <button type="button" data-action="click->lightbox#close">
            Close
          </button>
          </div>
          <div aria-label="Body">
            <img src="${image}" class="max-h-96 mx-auto" data-lightbox-target="image">
          </div>
          <div aria-label="Foot" class="flex justify-between px-4 py-2">
            <button type="button" data-action="click->lightbox#prev" data-lightbox-target="prev">
              Prev
            </button>
            <button type="button" data-action="click->lightbox#next" data-lightbox-target="next">
              Next
            </button>
        </div>
      </div>
      <div aria-label="Backdrop" data-lightbox-target="backdrop" data-action="click->lightbox#close" class="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-30"></div>`;
    }

    open(event) {
      this.currentId = event.currentTarget.dataset.lightboxId;
      this.element.insertAdjacentHTML(
        "beforeend",
        this.template(event.currentTarget.dataset.lightboxImg)
      );
      document.body.classList.add("overflow-hidden");
      this.disableNext();
      this.disablePrev();
    }

    disableNext() {
      if (this.thumbnailTargets.length == this.currentId) {
        this.nextTarget.classList.add("pointer-events-none", "text-gray-300");
      }
    }

    disablePrev() {
      if (this.currentId == 1) {
        this.prevTarget.classList.add("pointer-events-none", "text-gray-300");
      }
    }

    setImg() {
      this.imageTarget.src = document.getElementById(
        "lightbox-btn-" + this.currentId
      ).dataset.lightboxImg;
    }

    prev() {
      this.currentId--;
      this.disablePrev();
      this.nextTarget.classList.remove("pointer-events-none", "text-gray-300");
      this.setImg();
    }

    next() {
      this.currentId++;
      this.disableNext();
      this.prevTarget.classList.remove("pointer-events-none", "text-gray-300");
      this.setImg();
    }

    close() {
      this.modalTarget.remove();
      this.backdropTarget.remove();
      document.body.classList.remove("overflow-hidden");
    }
  }
```
