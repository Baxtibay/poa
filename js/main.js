window.addEventListener('DOMContentLoaded', () => {
  // Generate from HTML
  const sectionPoa = document.querySelector('.poa');
  const ul = document.querySelector('.card-list');
  const poaButtons = document.querySelectorAll('.person-button');

  // Attach ul in section
  sectionPoa.append(ul)

  // Functions for button the click
  poaButtons[0].addEventListener('click', () => {
    // Card Generator Function
    poaButtons[0].classList.add('active')
    cardGenerator(personZero)
  })
  poaButtons[1].addEventListener('click', () => {
    // Card Generator Function
    poaButtons[1].classList.add('active')
    cardGenerator(personOne)
  })
  poaButtons[2].addEventListener('click', () => {
    // Card Generator Function
    poaButtons[2].classList.add('active')
    cardGenerator(personTwo)
  })
  poaButtons[3].addEventListener('click', () => {
    // Card Generator Function
    poaButtons[3].classList.add('active')
    cardGenerator(personThree)
  })
  poaButtons[4].addEventListener('click', () => {
    // Card Generator Function
    poaButtons[4].classList.add('active')
    cardGenerator(personFour)
  })
  poaButtons[5].addEventListener('click', () => {
    // Card Generator Function
    poaButtons[5].classList.add('active')
    cardGenerator(personFive)
  })
  poaButtons[6].addEventListener('click', () => {
    // Card Generator Function
    poaButtons[6].classList.add('active')
    cardGenerator(personSix)
  })
  poaButtons[7].addEventListener('click', () => {
    // Card Generator Function
    poaButtons[7].classList.add('active')
    cardGenerator(personSeven)
  })
  poaButtons[8].addEventListener('click', () => {
    // Card Generator Function
    poaButtons[8].classList.add('active')
    cardGenerator(personEight)
  })
  poaButtons[9].addEventListener('click', () => {
    // Card Generator Function
    poaButtons[10].classList.add('active')
    cardGenerator(personNine)
  })
  poaButtons[10].addEventListener('click', () => {
    // Card Generator Function
    poaButtons[0].classList.add('active')
    cardGenerator(personAll)
  })

  // Generate All person Data
  const personAll = () => [
    {imgSrc: '00.png', name: '00'},
    {imgSrc: '01.png', name: '01'},
    {imgSrc: '02.png', name: '02'},
    {imgSrc: '03.png', name: '03'},
    {imgSrc: '04.png', name: '04'},
    {imgSrc: '05.png', name: '05'},
    {imgSrc: '06.png', name: '06'},
    {imgSrc: '07.png', name: '07'},
    {imgSrc: '08.png', name: '08'},
    {imgSrc: '09.png', name: '09'},
    {imgSrc: '10.png', name: '10'},
    {imgSrc: '11.png', name: '11'},
    {imgSrc: '12.png', name: '12'},
    {imgSrc: '13.png', name: '13'},
    {imgSrc: '14.png', name: '14'},
    {imgSrc: '15.png', name: '15'},
    {imgSrc: '16.png', name: '16'},
    {imgSrc: '17.png', name: '17'},
    {imgSrc: '18.png', name: '18'},
    {imgSrc: '19.png', name: '19'},
    {imgSrc: '20.png', name: '20'},
    {imgSrc: '21.png', name: '21'},
    {imgSrc: '22.png', name: '22'},
    {imgSrc: '23.png', name: '23'},
    {imgSrc: '24.png', name: '24'},
    {imgSrc: '25.png', name: '25'},
    {imgSrc: '26.png', name: '26'},
    {imgSrc: '27.png', name: '27'},
    {imgSrc: '28.png', name: '28'},
    {imgSrc: '29.png', name: '29'},
    {imgSrc: '30.png', name: '30'},
    {imgSrc: '31.png', name: '31'},
    {imgSrc: '32.png', name: '32'},
    {imgSrc: '33.png', name: '33'},
    {imgSrc: '34.png', name: '34'},
    {imgSrc: '35.png', name: '35'},
    {imgSrc: '36.png', name: '36'},
    {imgSrc: '37.png', name: '37'},
    {imgSrc: '38.png', name: '38'},
    {imgSrc: '39.png', name: '39'},
    {imgSrc: '40.png', name: '40'},
    {imgSrc: '41.png', name: '41'},
    {imgSrc: '42.png', name: '42'},
    {imgSrc: '43.png', name: '43'},
    {imgSrc: '44.png', name: '44'},
    {imgSrc: '45.png', name: '45'},
    {imgSrc: '46.png', name: '46'},
    {imgSrc: '47.png', name: '47'},
    {imgSrc: '48.png', name: '48'},
    {imgSrc: '49.png', name: '49'},
    {imgSrc: '50.png', name: '50'},
    {imgSrc: '51.png', name: '51'},
    {imgSrc: '52.png', name: '52'},
    {imgSrc: '53.png', name: '53'},
    {imgSrc: '54.png', name: '54'},
    {imgSrc: '55.png', name: '55'},
    {imgSrc: '56.png', name: '56'},
    {imgSrc: '57.png', name: '57'},
    {imgSrc: '58.png', name: '58'},
    {imgSrc: '59.png', name: '59'},
    {imgSrc: '60.png', name: '60'},
    {imgSrc: '61.png', name: '61'},
    {imgSrc: '62.png', name: '62'},
    {imgSrc: '63.png', name: '63'},
    {imgSrc: '64.png', name: '64'},
    {imgSrc: '65.png', name: '65'},
    {imgSrc: '66.png', name: '66'},
    {imgSrc: '67.png', name: '67'},
    {imgSrc: '68.png', name: '68'},
    {imgSrc: '69.png', name: '69'},
    {imgSrc: '70.png', name: '70'},
    {imgSrc: '71.png', name: '71'},
    {imgSrc: '72.png', name: '72'},
    {imgSrc: '73.png', name: '73'},
    {imgSrc: '74.png', name: '74'},
    {imgSrc: '75.png', name: '75'},
    {imgSrc: '76.png', name: '76'},
    {imgSrc: '77.png', name: '77'},
    {imgSrc: '78.png', name: '78'},
    {imgSrc: '79.png', name: '79'},
    {imgSrc: '80.png', name: '80'},
    {imgSrc: '81.png', name: '81'},
    {imgSrc: '82.png', name: '82'},
    {imgSrc: '83.png', name: '83'},
    {imgSrc: '84.png', name: '84'},
    {imgSrc: '85.png', name: '85'},
    {imgSrc: '86.png', name: '86'},
    {imgSrc: '87.png', name: '87'},
    {imgSrc: '88.png', name: '88'},
    {imgSrc: '89.png', name: '89'},
    {imgSrc: '90.png', name: '90'},
    {imgSrc: '91.png', name: '91'},
    {imgSrc: '92.png', name: '92'},
    {imgSrc: '93.png', name: '93'},
    {imgSrc: '94.png', name: '94'},
    {imgSrc: '95.png', name: '95'},
    {imgSrc: '96.png', name: '96'},
    {imgSrc: '97.png', name: '97'},
    {imgSrc: '98.png', name: '98'},
    {imgSrc: '99.png', name: '99'},
  ]
  const personZero = () => [
    {imgSrc: '00.png', name: '00'},
    {imgSrc: '01.png', name: '01'},
    {imgSrc: '02.png', name: '02'},
    {imgSrc: '03.png', name: '03'},
    {imgSrc: '04.png', name: '04'},
    {imgSrc: '05.png', name: '05'},
    {imgSrc: '06.png', name: '06'},
    {imgSrc: '07.png', name: '07'},
    {imgSrc: '08.png', name: '08'},
    {imgSrc: '09.png', name: '09'},
  ]
  const personOne = () => [
    {imgSrc: '10.png', name: '10'},
    {imgSrc: '11.png', name: '11'},
    {imgSrc: '12.png', name: '12'},
    {imgSrc: '13.png', name: '13'},
    {imgSrc: '14.png', name: '14'},
    {imgSrc: '15.png', name: '15'},
    {imgSrc: '16.png', name: '16'},
    {imgSrc: '17.png', name: '17'},
    {imgSrc: '18.png', name: '18'},
    {imgSrc: '19.png', name: '19'},
  ]
  const personTwo = () => [
    {imgSrc: '20.png', name: '20'},
    {imgSrc: '21.png', name: '21'},
    {imgSrc: '22.png', name: '22'},
    {imgSrc: '23.png', name: '23'},
    {imgSrc: '24.png', name: '24'},
    {imgSrc: '25.png', name: '25'},
    {imgSrc: '26.png', name: '26'},
    {imgSrc: '27.png', name: '27'},
    {imgSrc: '28.png', name: '28'},
    {imgSrc: '29.png', name: '29'},
  ]
  const personThree = () => [
    {imgSrc: '30.png', name: '30'},
    {imgSrc: '31.png', name: '31'},
    {imgSrc: '32.png', name: '32'},
    {imgSrc: '33.png', name: '33'},
    {imgSrc: '34.png', name: '34'},
    {imgSrc: '35.png', name: '35'},
    {imgSrc: '36.png', name: '36'},
    {imgSrc: '37.png', name: '37'},
    {imgSrc: '38.png', name: '38'},
    {imgSrc: '39.png', name: '39'},
  ]
  const personFour = () => [
    {imgSrc: '40.png', name: '40'},
    {imgSrc: '41.png', name: '41'},
    {imgSrc: '42.png', name: '42'},
    {imgSrc: '43.png', name: '43'},
    {imgSrc: '44.png', name: '44'},
    {imgSrc: '45.png', name: '45'},
    {imgSrc: '46.png', name: '46'},
    {imgSrc: '47.png', name: '47'},
    {imgSrc: '48.png', name: '48'},
    {imgSrc: '49.png', name: '49'},
  ]
  const personFive = () => [
    {imgSrc: '50.png', name: '50'},
    {imgSrc: '51.png', name: '51'},
    {imgSrc: '52.png', name: '52'},
    {imgSrc: '53.png', name: '53'},
    {imgSrc: '54.png', name: '54'},
    {imgSrc: '55.png', name: '55'},
    {imgSrc: '56.png', name: '56'},
    {imgSrc: '57.png', name: '57'},
    {imgSrc: '58.png', name: '58'},
    {imgSrc: '59.png', name: '59'},
  ]
  const personSix = () => [
    {imgSrc: '60.png', name: '60'},
    {imgSrc: '61.png', name: '61'},
    {imgSrc: '62.png', name: '62'},
    {imgSrc: '63.png', name: '63'},
    {imgSrc: '64.png', name: '64'},
    {imgSrc: '65.png', name: '65'},
    {imgSrc: '66.png', name: '66'},
    {imgSrc: '67.png', name: '67'},
    {imgSrc: '68.png', name: '68'},
    {imgSrc: '69.png', name: '69'},
  ]
  const personSeven = () => [
    {imgSrc: '70.png', name: '70'},
    {imgSrc: '71.png', name: '71'},
    {imgSrc: '72.png', name: '72'},
    {imgSrc: '73.png', name: '73'},
    {imgSrc: '74.png', name: '74'},
    {imgSrc: '75.png', name: '75'},
    {imgSrc: '76.png', name: '76'},
    {imgSrc: '77.png', name: '77'},
    {imgSrc: '78.png', name: '78'},
    {imgSrc: '79.png', name: '79'},
  ]
  const personEight = () => [
    {imgSrc: '80.png', name: '80'},
    {imgSrc: '81.png', name: '81'},
    {imgSrc: '82.png', name: '82'},
    {imgSrc: '83.png', name: '83'},
    {imgSrc: '84.png', name: '84'},
    {imgSrc: '85.png', name: '85'},
    {imgSrc: '86.png', name: '86'},
    {imgSrc: '87.png', name: '87'},
    {imgSrc: '88.png', name: '88'},
    {imgSrc: '89.png', name: '89'},
  ]
  const personNine = () => [
    {imgSrc: '90.png', name: '90'},
    {imgSrc: '91.png', name: '91'},
    {imgSrc: '92.png', name: '92'},
    {imgSrc: '93.png', name: '93'},
    {imgSrc: '94.png', name: '94'},
    {imgSrc: '95.png', name: '95'},
    {imgSrc: '96.png', name: '96'},
    {imgSrc: '97.png', name: '97'},
    {imgSrc: '98.png', name: '98'},
    {imgSrc: '99.png', name: '99'},
  ]
  // Randomize
  const randomize = () => {
    const cardData = getData()
    console.log(cardData)
    cardData.sort(() => Math.random() - 0.5)
    return cardData
  }
  // randomize()


  // Card Generator Function OPTIMIZED
  const cardGenerator = (person) => {
    const personData = person()
    // console.log(personData)
    // Generate the HTML
    personData.forEach((item) => {
      const li = document.createElement('li')
      const card = document.createElement('div')
      const front = document.createElement('div')
      const frontImg = document.createElement('img')
      const back = document.createElement('div')
      const backImg = document.createElement('img')
      li.classList = 'card-item'
      card.classList = 'card'
      front.classList = 'front'
      frontImg.classList = 'front-img'
      back.classList = 'back'
      backImg.classList = 'back-img'
      // Attach the info to the section
      frontImg.src = `../img/person/${item.imgSrc}`
      // card.setAttribute('name', item.name)
      card.innerText = item.name
      // Attach the cards to the section
      ul.append(li)
      li.append(card)
      card.append(front)
      front.append(frontImg)
      card.append(back)
      back.append(backImg)
      backImg.src = `../img/object/${item.imgSrc}`

      li.addEventListener('click', (e) => {
        // const clicked = e.target
        card.classList.toggle('toggle-card')
        if(front.classList.contains('front')) {
          front.classList.remove('front')
          front.classList.add('front-toggle')
        } else {
          front.classList.add('front')
          front.classList.remove('front-toggle')
        }
        // console.log(clicked)
      })
    })
  }

})

// ===================-------------------- ORIGINAL code ----------------=================== //
// // Card Generator Function front
// const cardGenerator = () => {
//   const personData = getPerson()
//   // Generate the HTML
//   personData.forEach((item) => {
//     const li = document.createElement('li')
//     const card = document.createElement('div')
//     const front = document.createElement('div')
//     const frontImg = document.createElement('img')
//     const back = document.createElement('div')
//     const backImg = document.createElement('img')
//     li.classList = 'card-item'
//     card.classList = 'card'
//     front.classList = 'front'
//     frontImg.classList = 'front-img'
//     back.classList = 'back'
//     backImg.classList = 'back-img'
//     // Attach the info to the section
//     frontImg.src = `../img/person/${item.imgSrc}`
//     // card.setAttribute('name', item.name)
//     card.innerText = item.name
//     // Attach the cards to the section
//     ul.append(li)
//     li.append(card)
//     card.append(front)
//     front.append(frontImg)
//     card.append(back)
//     back.append(backImg)
//     backImg.src = `../img/object/${item.imgSrc}`

//     li.addEventListener('click', (e) => {
//       const clicked = e.target
//       card.classList.toggle('toggle-card')
//       if(front.classList.contains('front')) {
//         front.classList.remove('front')
//         front.classList.add('front-toggle')
//       } else {
//         front.classList.add('front')
//         front.classList.remove('front-toggle')
//       }
//       // console.log(clicked)
//     })
//   })
// }
// cardGenerator()