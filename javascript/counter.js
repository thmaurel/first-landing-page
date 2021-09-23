const colors = (count, counterDiv) => {
  if (count > 0) {
    counterDiv.classList.add('green')
    counterDiv.classList.remove('red')
  } else {
    counterDiv.classList.add('red')
    counterDiv.classList.remove('green')
  }
}

const counter = () => {
  const counterDiv = document.querySelector('#counter')
  const plus = document.querySelector('#plus')
  const minus = document.querySelector('#minus')
  let count = 0
  plus.addEventListener('click', () => {
    count += 1
    colors(count, counterDiv)
    counterDiv.innerText = count
  })

  minus.addEventListener('click', () => {
    count -= 1
    counterDiv.innerText = count
    colors(count, counterDiv)
  })
}

export {counter}
