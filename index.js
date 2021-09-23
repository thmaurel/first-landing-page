const btn = document.querySelector('#banner-btn')
console.log(btn)
btn.addEventListener('click', () => {
  btn.innerText = "Hello!"
  btn.classList.add('blue')
})

const displaybtn = document.querySelector('.display-btn')
const content = document.querySelector('#hidden-content')

displaybtn.addEventListener('click', () => {
  content.classList.toggle('hidden')
})

const navbarContent = document.querySelector('.content')
const about = document.querySelector('.about')

navbarContent.addEventListener('click', () => {
  navbarContent.classList.add('active')
  about.classList.remove('active')
})

about.addEventListener('click', () => {
  about.classList.add('active')
  navbarContent.classList.remove('active')
})
