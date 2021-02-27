```sass
  .form__input
    &:valid
      border-color: $gray-300
    &--error,
    &[aria-invalid=true]
      border-color: $danger

  .form__input:valid + .form__addon
    border-color: $gray-300

  .form__input[aria-invalid=true] + .form__addon
    border-color: $danger
```
