```html
  <div data-controller="textarea" 
       data-textarea-lenght-value="250"
       data-textarea-danger-class="text--danger">
    <label for="biography">
      Biography
    <small>(<span data-textarea-target="lenght">250</span>)</small>
    </label>
    <textarea name="biography" 
              id="biography" 
              data-textarea-target="textarea"
              data-action="input->textarea#update">            
    </textarea>
  </div>          

```