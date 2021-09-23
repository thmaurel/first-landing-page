// 3. Add an effect on the navbar on click to show which item is active
const navbar = () => {
  // Select the content and about items from the navbar
  const navbarContent = document.querySelector('.content')
  const about = document.querySelector('.about')
  const contentGrid = document.querySelector('#content')
  const aboutText = document.querySelector('#about')

  // Add an event listener on click on the content item
  navbarContent.addEventListener('click', () => {
    // Make content looks active
    navbarContent.classList.add('active')
    // Make about looks inactive
    about.classList.remove('active')

    contentGrid.classList.remove('hidden')
    aboutText.classList.add('hidden')
  })

  // Add an event listener on click on the about item
  about.addEventListener('click', () => {
    // Make about looks active
    about.classList.add('active')
    // Make content looks inactive
    navbarContent.classList.remove('active')
    // Make the content grid disappears
    contentGrid.classList.add('hidden')
    aboutText.classList.remove('hidden')
  })
}

export {navbar}
