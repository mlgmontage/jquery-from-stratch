$(() => {
  $('h1').css('color', 'red')
  $('li').css({
    color: 'green',
    fontFamily: 'sans-serif',
  })
  console.log($('h1').text())

  $('h1').on('click', () => {
    alert('event fired')
  })
})
