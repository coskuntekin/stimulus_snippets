```sass
  .details-reset
    &--summary
      list-style: none
      &::-webkit-details-marker
        display: none

  .details-with-dialog[open] > summary::before
    content: ''
    position: fixed
    top: 0
    right: 0
    left: 0
    bottom: 0
    width: 100%
    height: 100%
    background-color: rgba(0,0 ,0 ,.5)
    z-index: 1

  .details-dialog
    position: fixed
    top: 0
    left: 50%
    width: 32rem
    margin: 5rem auto
    transform: translateX(-50%)
    background-color: orange
    z-index: 2
```