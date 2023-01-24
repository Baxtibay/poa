document.addEventListener('DOMContentLoaded', () => {
  const listEl = document.querySelector('.card-list'),
    itemEl = document.querySelector('.card-item'),
    randomBtn = document.querySelector('.random-btn');

  const person = [
    '00', '01', '02', '03', '04', '05', '06', '07', '08', '09','10','11','12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30','31','32','33', '34', '35', '36', '37', '38', '39', '40', '41',
    '42', '43', '44', '45', '46', '47', '48', '49', '50', '51','52','53','54', '55', '56', '57', '58', '59', '60', '61', '62',
    '63', '64', '65', '66', '67', '68', '69', '70', '71', '72','73','74','75', '76', '77', '78', '79', '80', '81', '82', '83',
    '84', '85', '86', '87', '88', '89', '90', '91', '92', '93','94','95','96', '97', '98', '99',
  ]

  // ----- CODE FOR GENERATOR CARDS START ----
  person.forEach((item) => {
    // li
    const li = document.createElement('li')
    li.classList.add('card-item')

    // card
    const card = document.createElement('div')
    card.classList.add('card')
    li.append(card)

    card.innerHTML = `
      <div class="front">
        <img class="front-img" src="img/person/${item}.png" alt="" width="100" height="100">
      </div>
      <div class="back">${item}</div>
    `;
    listEl.append(li)

    // click
    card.addEventListener('click', () => {
      if(!card.classList.contains('card-item-rotate')) {
        card.classList.add('card-item-rotate')
        card.classList.remove('card')
      } else {
        card.classList.remove('card-item-rotate')
        card.classList.add('card')
      }
    })
  });
  // ----- CODE FOR GENERATOR CARDS END ----

  // for random
  // for(let k = 0; k < 100; k++) {
  //   const idx1 = Math.floor(Math.random() * person.length)
  //   const idx2 = Math.floor(Math.random() * person.length)

  //   const temp = person[idx1];
  //   person[idx1] = person[idx2];
  //   person[idx2] = temp
  // }

  // randomBtn.addEventListener('click', () => {
  //   location.reload()
  // })
})
