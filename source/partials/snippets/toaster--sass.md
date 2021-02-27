```sass
  .toaster
    position: fixed
    right: 10px
    top: 25px
    width: 350px
    animation-duration: 300ms
    z-index: 5
    &__in
      animation-name: slideInRight
      animation-timing-function: ease-in
    &__out
      animation-name: slideOutLeft
      animation-timing-function: ease-out
    &__progress
      width: 100%
      height: 5px
      margin-top: 1rem
      border-radius: 1rem
      background-color: rgba(0, 0, 0, 0.25)
      transition: width 100ms linear

  @keyframes slideInRight
    from
      transform: translate3d(100%, 0, 0)
      visibility: visible
    to
      transform: translate3d(0, 0, 0)

  @keyframes slideOutLeft
    from
      transform: translate3d(0, 0, 0)
    to
      visibility: hidden
      transform: translate3d(100%, 0, 0)   
```