```rb
ActionView::Base.field_error_proc = proc do |html_tag, instance|
  form_fields = %w[textarea input select]
  tag_elements = Nokogiri::HTML::DocumentFragment.parse(html_tag).css 'label, ' + form_fields.join(', ')

  tag_elements.each do |element|
    if element.node_name.eql? 'label'
      html_tag = element.to_s.html_safe
    elsif form_fields.include? element.node_name
      field_error_message = instance.error_message.is_a?(Array) ? instance.error_message.uniq.join(', ') : instance.error_message
      field_error_message = field_error_message.to_s.delete!('[]""').downcase
      element['class'] = %(#{element['class']} form__input--error)
      element['aria-invalid'] = %(#{element['aria-invalid']}true)
      element['data-message'] = %(#{element['data-message']}#{field_error_message})
      html_tag = %(#{element}).html_safe
    end
  end

  html_tag
end
```