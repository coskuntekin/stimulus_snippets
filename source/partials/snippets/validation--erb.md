```erb
  <%= form_with(model: [:user, profile],
                html: { novalidate: true,
                        'data-controller': 'validation',
                        'data-validation-hidden-class': 'hidden',
                        'data-validation-error-class': 'text-red-600'
                }, local: true) do |form| %>
    <div aria-label="Input with addon">                
      <%= f.label :profile_name %>
      <div aria-label="Form input">
        <%= f.text_field :profile_name, 
                         'data-action': 'input->validation#validity',
                         'data-validation-target': 'input',
                         'data-input-has-addon': true, 
                         required: true %>
        <span aria-label="Addon icon">
          Addon icon
        </span>
      </div>
    </div>
    <div aria-label="Input without addon">                
      <%= form.label :site_url %>
      <div aria-label="Form input">
        <%= form.url_field :site_url, 
                            pattern:"https?://.*",
                            size: "30",
                            placeholder: 'http://example.com or https://example.com',
                            'data-action': 'input->validation#validity',
                            'data-validation-target': 'input',   
                            'data-input-has-addon': false %>
      </div>
    </div>
  <% end %>
```