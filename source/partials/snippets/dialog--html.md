```html
  <details aria-label="Deatils dialog" class="details-reset details-with-dialog" data-controller="dialog">
    <summary class="details-reset--summary" role="button">Open dialog</summary>
    <section aria-label="Dialog" class="details-dialog" role="dialog" aria-modal="true">
      <article aria-label="Head">
        <h4>
          Title
        </h4>
        <button class="btn" data-action="click->dialog#close">
          &otimes;
        </button>
      </article>
      <article aria-label="Body">
        Body
      </article>
      <article aria-label="Foot">
        <button type="button" data-action="click->dialog#close">
          Close
        </button>
      </article>
    </section>
  </details>     
```