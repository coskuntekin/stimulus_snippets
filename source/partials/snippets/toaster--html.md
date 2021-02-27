```html
  <section data-controller="toaster"
           data-action="animationend->toaster#animationEnd"
           data-toaster-type-class="bg--#{flash_message_type}"
           data-toaster-in-class="toaster__in"
           data-toaster-out-class="toaster__out"
           data-toaster-has-progress-value="true"
           class="toaster toaster__in">
      <p>
        Flash message value!
      </p>
      <button data-action="click->toaster#close">x</button>
    <div aria-label="Progress bar" 
         role="progressbar"
         data-toaster-target="progress"></div>
  </section>
```