$(function() {
  // exercise 1
  const btn1 = $('#toggleButton')
  const paragraph = $('#myParagraph')

  btn1.on('click', function() {
    paragraph.toggle()
  })

  // exercise 2
  const btn2 = $('#colorButton')
  const colorDiv = $('#colorDiv')

  btn2.on('click', function() {
    colorDiv.css('background-color', 'yellow')
  })

  // exercise 3
  const btn3add = $('#addClassButton')
  const btn3remove = $('#removeClassButton')
  const classDiv = $('#classDiv')

  btn3add.on('click', function() {
    classDiv.addClass('new-class')
  })
  btn3remove.on('click', function() {
    classDiv.removeClass('new-class')
  })

  // exercise 4
  const btn4in = $('#fadeInButton')
  const btn4out = $('#fadeOutButton')
  const fadeDiv = $('#fadeDiv')

  btn4in.on('click', function() {
    fadeDiv.fadeIn()
  })
  btn4out.on('click', function() {
    fadeDiv.fadeOut()
  })

  // exercise 5
  const btn5up = $('#slideUpButton')
  const btn5down = $('#slideDownButton')
  const slideDiv = $('#slideDiv')

  btn5up.on('click', function() {
    slideDiv.slideUp()
  })

  btn5down.on('click', function() {
    slideDiv.slideDown()
  })
})