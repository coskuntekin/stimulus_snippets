```sass
  .dropdown[open] > .dropdown__toggle
    &--yellow
      background-image: url("data:image/svg+xml, %3Csvg width='24' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 352 512'%3E%3Cpath fill='%23FD9F28' d='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z'%3E%3C/path%3E%3C/svg%3E ")
    
  .dropdown__toggle
    display: inline-block
    width: 2rem
    height: 2rem
    background-repeat: no-repeat
    background-position: center
    &--yellow
      background-image: url("data:image/svg+xml, %3Csvg width='24' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='%23FD9F28' d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'%3E%3C/path%3E%3C/svg%3E ")

  .dropdown__nav
    position: absolute
    top: 1rem
    width: calc(100% - 2rem)
    z-index: 10
```
