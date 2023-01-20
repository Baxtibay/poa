const listEl = document.querySelector('.card-list'),
  itemEl = document.querySelector('.card-item');

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
    <img class="front-img" src="../img/person/person${i}.png">
  `


  // back
  const backD = document.createElement('div')
  backD.classList.add('back')
  cardTest.append(backD)
  backD.innerHTML = `${i}`;

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