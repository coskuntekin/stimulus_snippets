```erb
  <%= form_with(model: [:user, profile],
                html: { 'data-controller': 'avatar',
                        'data-avatar-size-value': '5000000'}) do |form| %>
    <%= image_tag source_of_visual(profile.avatar), 'data-avatar-target': "image" %>
    <%= form.file_field :avatar,
                        accept: '.png, .jpg, .jpeg',
                        'data-action': 'change->avatar#upload' %>
      <p hidden data-avatar-target="message">
        Sorry! Your avatar size over than 5MB
      </p>
    <%= form.submit 'data-avatar-target': "submit" %>
  <% end %>
```