window.addEventListener('DOMContentLoaded', () => {
  // Generate from HTML
  const sectionPoa = document.querySelector('.poa'),
    ul = document.querySelector('.card-list'),
    numberAction = document.querySelector('.number'),
    randomNumber = document.querySelector('.random'),
    buttons = document.querySelectorAll('.person-button');


  /* ----------========== GLOBAL OPTIMAL FUNCTIONS START ==========---------- */

  // Remove elements
  const remover = () => {
    if(ul.children.length > 10) {
      const li = document.querySelectorAll('.card-item')
      li.forEach((item, index) => {
        // console.log(item)
        if(index <= 9) {
          item.remove()
          buttons.forEach(item => {
            item.classList.remove('active')
          })
        }
      })
    }
  }

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
      const personName = document.createElement('span')
      li.classList = 'card-item'
      personName.classList = 'person-name'
      card.classList = 'card'
      front.classList = 'front'
      frontImg.classList = 'front-img'
      back.classList = 'back'
      backImg.classList = 'back-img'
      // Attach the info to the section
      personName.innerText = `${item.personName}`
      frontImg.src = `../img/person/${item.imgSrc}`
      // card.setAttribute('name', item.name)
      card.innerText = item.name
      // Attach the cards to the section
      ul.append(li)
      li.append(personName)
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

  // Randomize
  const randomize = () => {
    const cardData = getData()
    console.log(cardData)
    cardData.sort(() => Math.random() - 0.5)
    return cardData
  }

  /* ----------========== GLOBAL OPTIMAL FUNCTIONS END ==========---------- */

  // Attach ul in section
  sectionPoa.append(ul)

  buttons.forEach((item, index) => {
    item.addEventListener('click', () => {
      if(index === 0) {
        cardGenerator(personZero)
        remover()
        item.classList.add('active')
      }
      if(index === 1) {
        cardGenerator(personOne)
        remover()
        item.classList.add('active')
      }
      if(index === 2) {
        cardGenerator(personTwo)
        remover()
        item.classList.add('active')
      }
      if(index === 3) {
        cardGenerator(personThree)
        remover()
        item.classList.add('active')
      }
      if(index === 4) {
        cardGenerator(personFour)
        remover()
        item.classList.add('active')
      }
      if(index === 5) {
        cardGenerator(personFive)
        remover()
        item.classList.add('active')
      }
      if(index === 6) {
        cardGenerator(personSix)
        remover()
        item.classList.add('active')
      }
      if(index === 7) {
        cardGenerator(personSeven)
        remover()
        item.classList.add('active')
      }
      if(index === 8) {
        cardGenerator(personEight)
        remover()
        item.classList.add('active')
      }
      if(index === 9) {
        cardGenerator(personNine)
        remover()
        item.classList.add('active')
      }
      if(index === 10) {
        cardGenerator(personAll)
        remover()
        item.classList.add('active')
      }
    })
  })

  // Generate All person Data
  const personAll = () => [
    {imgSrc: '00.png', name: '00', personName: 'Piter'},
    {imgSrc: '01.png', name: '01', personName: 'Nil'},
    {imgSrc: '02.png', name: '02', personName: 'Moziy'},
    {imgSrc: '03.png', name: '03', personName: 'Jons'},
    {imgSrc: '04.png', name: '04', personName: 'Keller'},
    {imgSrc: '05.png', name: '05', personName: 'Elizabeth'},
    {imgSrc: '06.png', name: '06', personName: 'Rebekka'},
    {imgSrc: '07.png', name: '07', personName: 'Diana'},
    {imgSrc: '08.png', name: '08', personName: 'Sara'},
    {imgSrc: '09.png', name: '09', personName: 'Keyt'},
    {imgSrc: '10.png', name: '10', personName: 'Jeyn'},
    {imgSrc: '11.png', name: '11', personName: 'Lisbon'},
    {imgSrc: '12.png', name: '12', personName: 'Vanpeld'},
    {imgSrc: '13.png', name: '13', personName: 'Cho'},
    {imgSrc: '14.png', name: '14', personName: 'Rigsbi'},
    {imgSrc: '15.png', name: '15', personName: 'Xaytaur'},
    {imgSrc: '16.png', name: '16', personName: 'Bertram'},
    {imgSrc: '17.png', name: '17', personName: 'Kristina'},
    {imgSrc: '18.png', name: '18', personName: 'Jeyk'},
    {imgSrc: '19.png', name: '19', personName: 'Ebbot'},
    {imgSrc: '20.png', name: '20', personName: 'Born'},
    {imgSrc: '21.png', name: '21', personName: 'Jankarlo'},
    {imgSrc: '22.png', name: '22', personName: 'Mari'},
    {imgSrc: '23.png', name: '23', personName: 'Donald'},
    {imgSrc: '24.png', name: '24', personName: 'Vord'},
    {imgSrc: '25.png', name: '25', personName: 'Marta'},
    {imgSrc: '26.png', name: '26', personName: 'Pamelo'},
    {imgSrc: '27.png', name: '27', personName: 'Saymon'},
    {imgSrc: '28.png', name: '28', personName: 'Nikki'},
    {imgSrc: '29.png', name: '29', personName: 'Xezer Li'},
    {imgSrc: '30.png', name: '30', personName: 'Tobi'},
    {imgSrc: '31.png', name: '31', personName: 'Anita'},
    {imgSrc: '32.png', name: '32', personName: 'Benni'},
    {imgSrc: '33.png', name: '33', personName: 'Dino'},
    {imgSrc: '34.png', name: '34', personName: 'Ingram'},
    {imgSrc: '35.png', name: '35', personName: 'Julia'},
    {imgSrc: '36.png', name: '36', personName: 'Jo'},
    {imgSrc: '37.png', name: '37', personName: 'Fin'},
    {imgSrc: '38.png', name: '38', personName: 'Monarx'},
    {imgSrc: '39.png', name: '39', personName: 'Pit'},
    {imgSrc: '40.png', name: '40', personName: 'Elis'},
    {imgSrc: '41.png', name: '41', personName: 'Karlos'},
    {imgSrc: '42.png', name: '42', personName: 'Cris'},
    {imgSrc: '43.png', name: '43', personName: 'Aizeks'},
    {imgSrc: '44.png', name: '44', personName: 'Spens'},
    {imgSrc: '45.png', name: '45', personName: 'Meet'},
    {imgSrc: '46.png', name: '46', personName: 'Cler'},
    {imgSrc: '47.png', name: '47', personName: 'Vesker'},
    {imgSrc: '48.png', name: '48', personName: 'Bennet'},
    {imgSrc: '49.png', name: '49', personName: 'Lyuter'},
    {imgSrc: '50.png', name: '50', personName: 'Panda'},
    {imgSrc: '51.png', name: '51', personName: 'Jolbars'},
    {imgSrc: '52.png', name: '52', personName: 'Shifu'},
    {imgSrc: '53.png', name: '53', personName: 'Maymil'},
    {imgSrc: '54.png', name: '54', personName: 'Shekshek'},
    {imgSrc: '55.png', name: '55', personName: 'Kay'},
    {imgSrc: '56.png', name: '56', personName: 'Taylung'},
    {imgSrc: '57.png', name: '57', personName: 'Jilan'},
    {imgSrc: '58.png', name: '58', personName: 'Gaz'},
    {imgSrc: '59.png', name: '59', personName: 'Tawis'},
    {imgSrc: '60.png', name: '60', personName: 'Ruslan'},
    {imgSrc: '61.png', name: '61', personName: 'Mila'},
    {imgSrc: '62.png', name: '62', personName: 'Nestr'},
    {imgSrc: '63.png', name: '63', personName: 'Kot'},
    {imgSrc: '64.png', name: '64', personName: 'Karol'},
    {imgSrc: '65.png', name: '65', personName: 'Tishqan'},
    {imgSrc: '66.png', name: '66', personName: 'Chorno More'},
    {imgSrc: '67.png', name: '67', personName: 'Shimshiq'},
    {imgSrc: '68.png', name: '68', personName: 'Ritsar'},
    {imgSrc: '69.png', name: '69', personName: 'Vor'},
    {imgSrc: '70.png', name: '70', personName: 'Toni'},
    {imgSrc: '71.png', name: '71', personName: 'Scoot'},
    {imgSrc: '72.png', name: '72', personName: 'Capitan A'},
    {imgSrc: '73.png', name: '73', personName: 'Xalq'},
    {imgSrc: '74.png', name: '74', personName: 'Tor'},
    {imgSrc: '75.png', name: '75', personName: 'Glaz'},
    {imgSrc: '76.png', name: '76', personName: 'Pauk'},
    {imgSrc: '77.png', name: '77', personName: 'Mikki'},
    {imgSrc: '78.png', name: '78', personName: 'Pepper'},
    {imgSrc: '79.png', name: '79', personName: 'Scarlet'},
    {imgSrc: '80.png', name: '80', personName: 'Charli'},
    {imgSrc: '81.png', name: '81', personName: 'Stella'},
    {imgSrc: '82.png', name: '82', personName: 'Rob'},
    {imgSrc: '83.png', name: '83', personName: 'Stiv'},
    {imgSrc: '84.png', name: '84', personName: 'Shep qulaq'},
    {imgSrc: '85.png', name: '85', personName: 'Jon'},
    {imgSrc: '86.png', name: '86', personName: 'Vrench'},
    {imgSrc: '87.png', name: '87', personName: 'Layl'},
    {imgSrc: '88.png', name: '88', personName: 'Busy Pit'},
    {imgSrc: '89.png', name: '89', personName: 'Mashkov'},
    {imgSrc: '90.png', name: '90', personName: 'Xarli'},
    {imgSrc: '91.png', name: '91', personName: 'Dead Shot'},
    {imgSrc: '92.png', name: '92', personName: 'Joker'},
    {imgSrc: '93.png', name: '93', personName: 'Mun'},
    {imgSrc: '94.png', name: '94', personName: 'Betmen'},
    {imgSrc: '95.png', name: '95', personName: 'Diablo'},
    {imgSrc: '96.png', name: '96', personName: 'Rik'},
    {imgSrc: '97.png', name: '97', personName: 'Amanda'},
    {imgSrc: '98.png', name: '98', personName: 'Krok'},
    {imgSrc: '99.png', name: '99', personName: 'Bumerang'},
  ]
  const personZero = () => [
    {imgSrc: '00.png', name: '00', personName: 'Piter'},
    {imgSrc: '01.png', name: '01', personName: 'Nil'},
    {imgSrc: '02.png', name: '02', personName: 'Moziy'},
    {imgSrc: '03.png', name: '03', personName: 'Jons'},
    {imgSrc: '04.png', name: '04', personName: 'Keller'},
    {imgSrc: '05.png', name: '05', personName: 'Elizabeth'},
    {imgSrc: '06.png', name: '06', personName: 'Rebekka'},
    {imgSrc: '07.png', name: '07', personName: 'Diana'},
    {imgSrc: '08.png', name: '08', personName: 'Sara'},
    {imgSrc: '09.png', name: '09', personName: 'Keyt'},
  ]
  const personOne = () => [
    {imgSrc: '10.png', name: '10', personName: 'Jeyn'},
    {imgSrc: '11.png', name: '11', personName: 'Lisbon'},
    {imgSrc: '12.png', name: '12', personName: 'Vanpeld'},
    {imgSrc: '13.png', name: '13', personName: 'Cho'},
    {imgSrc: '14.png', name: '14', personName: 'Rigsbi'},
    {imgSrc: '15.png', name: '15', personName: 'Xaytaur'},
    {imgSrc: '16.png', name: '16', personName: 'Bertram'},
    {imgSrc: '17.png', name: '17', personName: 'Kristina'},
    {imgSrc: '18.png', name: '18', personName: 'Jeyk'},
    {imgSrc: '19.png', name: '19', personName: 'Ebbot'},
  ]
  const personTwo = () => [
    {imgSrc: '20.png', name: '20', personName: 'Born'},
    {imgSrc: '21.png', name: '21', personName: 'Jankarlo'},
    {imgSrc: '22.png', name: '22', personName: 'Mari'},
    {imgSrc: '23.png', name: '23', personName: 'Donald'},
    {imgSrc: '24.png', name: '24', personName: 'Vord'},
    {imgSrc: '25.png', name: '25', personName: 'Marta'},
    {imgSrc: '26.png', name: '26', personName: 'Pamelo'},
    {imgSrc: '27.png', name: '27', personName: 'Saymon'},
    {imgSrc: '28.png', name: '28', personName: 'Nikki'},
    {imgSrc: '29.png', name: '29', personName: 'Xezer'},
  ]
  const personThree = () => [
    {imgSrc: '30.png', name: '30', personName: 'Tobi'},
    {imgSrc: '31.png', name: '31', personName: 'Anita'},
    {imgSrc: '32.png', name: '32', personName: 'Benni'},
    {imgSrc: '33.png', name: '33', personName: 'Dino'},
    {imgSrc: '34.png', name: '34', personName: 'Ingram'},
    {imgSrc: '35.png', name: '35', personName: 'Julia'},
    {imgSrc: '36.png', name: '36', personName: 'Jo'},
    {imgSrc: '37.png', name: '37', personName: 'Fin'},
    {imgSrc: '38.png', name: '38', personName: 'Monarx'},
    {imgSrc: '39.png', name: '39', personName: 'Pit'},
  ]
  const personFour = () => [
    {imgSrc: '40.png', name: '40', personName: 'Elis'},
    {imgSrc: '41.png', name: '41', personName: 'Karlos'},
    {imgSrc: '42.png', name: '42', personName: 'Cris'},
    {imgSrc: '43.png', name: '43', personName: 'Aizeks'},
    {imgSrc: '44.png', name: '44', personName: 'Spens'},
    {imgSrc: '45.png', name: '45', personName: 'Meet'},
    {imgSrc: '46.png', name: '46', personName: 'Cler'},
    {imgSrc: '47.png', name: '47', personName: 'Vesker'},
    {imgSrc: '48.png', name: '48', personName: 'Bennet'},
    {imgSrc: '49.png', name: '49', personName: 'Lyuter'},
  ]
  const personFive = () => [
    {imgSrc: '50.png', name: '50', personName: 'Panda'},
    {imgSrc: '51.png', name: '51', personName: 'Jolbars'},
    {imgSrc: '52.png', name: '52', personName: 'Shifu'},
    {imgSrc: '53.png', name: '53', personName: 'Maymil'},
    {imgSrc: '54.png', name: '54', personName: 'Shekshek'},
    {imgSrc: '55.png', name: '55', personName: 'Kay'},
    {imgSrc: '56.png', name: '56', personName: 'Taylung'},
    {imgSrc: '57.png', name: '57', personName: 'Jilan'},
    {imgSrc: '58.png', name: '58', personName: 'Gaz'},
    {imgSrc: '59.png', name: '59', personName: 'Tawis'},
  ]
  const personSix = () => [
    {imgSrc: '60.png', name: '60', personName: 'Ruslan'},
    {imgSrc: '61.png', name: '61', personName: 'Mila'},
    {imgSrc: '62.png', name: '62', personName: 'Nestr'},
    {imgSrc: '63.png', name: '63', personName: 'Kot'},
    {imgSrc: '64.png', name: '64', personName: 'Karol'},
    {imgSrc: '65.png', name: '65', personName: 'Tishqan'},
    {imgSrc: '66.png', name: '66', personName: 'Chorno More'},
    {imgSrc: '67.png', name: '67', personName: 'Shimshiq'},
    {imgSrc: '68.png', name: '68', personName: 'Ritsar'},
    {imgSrc: '69.png', name: '69', personName: 'Vor'},
  ]
  const personSeven = () => [
    {imgSrc: '70.png', name: '70', personName: 'Toni'},
    {imgSrc: '71.png', name: '71', personName: 'Scoot'},
    {imgSrc: '72.png', name: '72', personName: 'Capitan A'},
    {imgSrc: '73.png', name: '73', personName: 'Xalq'},
    {imgSrc: '74.png', name: '74', personName: 'Tor'},
    {imgSrc: '75.png', name: '75', personName: 'Glaz'},
    {imgSrc: '76.png', name: '76', personName: 'Pauk'},
    {imgSrc: '77.png', name: '77', personName: 'Mikki'},
    {imgSrc: '78.png', name: '78', personName: 'Pepper'},
    {imgSrc: '79.png', name: '79', personName: 'Scarlet'},
  ]
  const personEight = () => [
    {imgSrc: '80.png', name: '80', personName: 'Charli'},
    {imgSrc: '81.png', name: '81', personName: 'Stella'},
    {imgSrc: '82.png', name: '82', personName: 'Rob'},
    {imgSrc: '83.png', name: '83', personName: 'Stiv'},
    {imgSrc: '84.png', name: '84', personName: 'Shep qulaq'},
    {imgSrc: '85.png', name: '85', personName: 'Jon'},
    {imgSrc: '86.png', name: '86', personName: 'Vrench'},
    {imgSrc: '87.png', name: '87', personName: 'Layl'},
    {imgSrc: '88.png', name: '88', personName: 'Busy Pit'},
    {imgSrc: '89.png', name: '89', personName: 'Mashkov'},
  ]
  const personNine = () => [
    {imgSrc: '90.png', name: '90', personName: 'Xarli'},
    {imgSrc: '91.png', name: '91', personName: 'Dead Shot'},
    {imgSrc: '92.png', name: '92', personName: 'Joker'},
    {imgSrc: '93.png', name: '93', personName: 'Mun'},
    {imgSrc: '94.png', name: '94', personName: 'Betmen'},
    {imgSrc: '95.png', name: '95', personName: 'Diablo'},
    {imgSrc: '96.png', name: '96', personName: 'Rik'},
    {imgSrc: '97.png', name: '97', personName: 'Amanda'},
    {imgSrc: '98.png', name: '98', personName: 'Krok'},
    {imgSrc: '99.png', name: '99', personName: 'Bumerang'},
  ]

  //  RANDOM NUMBER
  const randomizeNumber = () => {
    // console.log(Math.floor(Math.random() * 99))
    return Math.floor(Math.random() * 99)
  }
  randomizeNumber()

  randomNumber.addEventListener('click', () => {
    numberAction.innerText = randomizeNumber()
  })
})
