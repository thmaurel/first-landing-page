// 2. Display the grid of cards clicking on a button
const grid = () => {
  // Select the display button on top of cards
  const displaybtn = document.querySelector('.display-btn')
  // and select the hidden content (cards)
  const content = document.querySelector('#hidden-content')
  // Add an event listener on click on the button
  displaybtn.addEventListener('click', () => {
    // when it's clicked, toggle the class hidden so cards appear or disappear depending on previous state
    content.classList.toggle('hidden')
  })
}

export {grid}
