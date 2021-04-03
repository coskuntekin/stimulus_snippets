```erb
  <div aria-label="Lightbox" data-controller="lightbox">
    <% @project.images.each_with_index do |image, index| %>
      <div data-preview-target="thumbnail">
        <button type="button"
                data-action="click->lightbox#open"
                id="lightbox-btn-<%= index + 1 %>"
                data-lightbox-id="<%= index + 1 %>"
                data-lightbox-img="<%= image.url %>" 
                class="flex justify-center mx-auto w-full bg--dark rounded mb-2">
          <%= image_tag image.url %> 
        </button>
      </div>
    <% end %>
  </div>
```