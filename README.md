## JQuery Demystified

Jquery is minimal library for manipulation DOM elements. You can change properties and also bind event functions.

```javascript
$('selector').text() // returns its text

// setting css
$('selector').css('color', 'red')

$('selector').css({
  color: 'red',
  cursor: 'pointer',
  fontFamily: 'sans-serif',
})

// binds function to click event
$('selector').on('click', () => {
  /* do something */
})
```
