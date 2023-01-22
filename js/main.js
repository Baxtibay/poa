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

  // random
  for(let k = 0; k < 100; k++) {
    const idx1 = Math.floor(Math.random() * person.length)
    const idx2 = Math.floor(Math.random() * person.length)

    const temp = person[idx1];
    person[idx1] = person[idx2];
    person[idx2] = temp
  }

  itemEl.style.display = 'none'
  for(let i = 0; i < 100; i++) {
    /* Bul kartinkani random qilip shig'arip beriw ushin
    let imgNumber = Math.floor((Math.random()*6)+1)
    */

    // item
    const item = document.createElement('li')
    item.classList.add('card-item')
    listEl.append(item)
    // item.style.border = '1px solid blue'


    // card
    const cardTest = document.createElement('div')
    cardTest.classList.add('card')
    item.append(cardTest)


    // front
    const front = document.createElement('div')
    front.classList.add('front')
    cardTest.append(front)
    front.innerHTML = `
      <img class="front-img" src="../img/person/${person[i]}.png" width="100" height="100">
    `


    // back
    const backD = document.createElement('div')
    backD.classList.add('back')
    cardTest.append(backD)
    backD.innerHTML = `${person[i]}`;

    // click
    item.addEventListener('click', () => {
      console.log('basildi')
      if(!cardTest.classList.contains('card-item-rotate')) {
        cardTest.classList.add('card-item-rotate')
        cardTest.classList.remove('card')
      } else {
        cardTest.classList.remove('card-item-rotate')
        cardTest.classList.add('card')
      }
    })
  }

})




/* Bul kartinka random qiliw ushin test
function generator() {
  for(i = 0; i < 10; i++) {
    let x = Math.floor((Math.random() * 6));
    console.log(x)

    document.getElementById('divImage').innerHTML += `
      <img src="../img/person/person${x}.png" style="width: 100px;" alt="person">
    `;
  }
}
*/