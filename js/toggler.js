
window.addEventListener('DOMContentLoaded', () => {
  const elThemeToggler = document.querySelector('.site-header-theme-toogler'),
    randomNumber = document.querySelector('.random'),
    numberAction = document.querySelector('.number');

  elThemeToggler.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode')
  })


  //  RANDOM NUMBER
  const randomizeNumber = () => {
    // console.log(Math.floor(Math.random() * 99))
    return Math.floor(Math.random() * 99)
  }
  randomizeNumber()

  // randomNumber.addEventListener('click', () => {
  //   numberAction.innerText = randomizeNumber()
  // })
})