// 1. Change button's content and style on click
  // Select the button in the banner
  const btn = document.querySelector('#banner-btn')
  console.log(btn)
  // Add an event listener on click on this button
  btn.addEventListener('click', () => {
    // when it's clicked, change the text of the button
    btn.innerText = "Hello!"
    // and add a class to change the background color
    btn.classList.add('blue')
  })


// 2. Display the grid of cards clicking on a button
  // Select the display button on top of cards
  const displaybtn = document.querySelector('.display-btn')
  // and select the hidden content (cards)
  const content = document.querySelector('#hidden-content')
  // Add an event listener on click on the button
  displaybtn.addEventListener('click', () => {
    // when it's clicked, toggle the class hidden so cards appear or disappear depending on previous state
    content.classList.toggle('hidden')
  })


// 3. Add an effect on the navbar on click to show which item is active
  // Select the content and about items from the navbar
  const navbarContent = document.querySelector('.content')
  const about = document.querySelector('.about')

  // Add an event listener on click on the content item
  navbarContent.addEventListener('click', () => {
    // Make content looks active
    navbarContent.classList.add('active')
    // Make about looks inactive
    about.classList.remove('active')
  })

  // Add an event listener on click on the about item
  about.addEventListener('click', () => {
    // Make about looks active
    about.classList.add('active')
    // Make content looks inactive
    navbarContent.classList.remove('active')
  })
