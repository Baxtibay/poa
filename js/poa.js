const category = document.querySelector('.buttons'),
    categoryButtons = document.querySelectorAll('.person-button'),
    tabContent = document.querySelectorAll('.person-card-list'),
    card = document.querySelectorAll(".person-card__inner");

card.forEach(item => {
  item.addEventListener("click", function (e) {
    item.classList.toggle('is-flipped');
    setTimeout(() => item.classList.toggle('is-flipped'), 2000)
  });
})




  function hideTabContent() {
    tabContent.forEach((item) => {
      item.classList.add('hide')
      item.classList.remove('show')
    })
    categoryButtons.forEach(item => {
      item.classList.remove('active')
    })
  }
  function showTabContent(i = 0) {
    tabContent[i].classList.add('show')
    tabContent[i].classList.remove('hide')
    categoryButtons[i].classList.add('active')
  }
  hideTabContent()


  category.addEventListener('click', (event) => {
    const target = event.target
    if(target && target.classList.contains('person-button')) {
      categoryButtons.forEach((item, idx) => {
        if(target == item) {
          hideTabContent()
          showTabContent(idx)
        }
      })
    }
  })