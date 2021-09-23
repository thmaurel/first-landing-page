// 1. Change button's content and style on click
const bannerButton = () => {
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
}

export {bannerButton}
