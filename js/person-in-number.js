window.addEventListener('DOMContentLoaded', () => {
  // DATA
  const category0 = () => [
    { imgSrc: '00.png', name: '00', personName: 'Piter' },
    { imgSrc: '01.png', name: '01', personName: 'Nil' },
    { imgSrc: '02.png', name: '02', personName: 'Moziy' },
    { imgSrc: '03.png', name: '03', personName: 'Jons' },
    { imgSrc: '04.png', name: '04', personName: 'Keller' },
    { imgSrc: '05.png', name: '05', personName: 'Elizabeth' },
    { imgSrc: '06.png', name: '06', personName: 'Rebekka' },
    { imgSrc: '07.png', name: '07', personName: 'Diana' },
    { imgSrc: '08.png', name: '08', personName: 'Sara' },
    { imgSrc: '09.png', name: '09', personName: 'Keyt' },
  ];
  const category1 = () => [
    { imgSrc: '10.png', name: '10', personName: 'Jeyn' },
    { imgSrc: '11.png', name: '11', personName: 'Lisbon' },
    { imgSrc: '12.png', name: '12', personName: 'Vanpeld' },
    { imgSrc: '13.png', name: '13', personName: 'Cho' },
    { imgSrc: '14.png', name: '14', personName: 'Rigsbi' },
    { imgSrc: '15.png', name: '15', personName: 'Xaytaur' },
    { imgSrc: '16.png', name: '16', personName: 'Bertram' },
    { imgSrc: '17.png', name: '17', personName: 'Kristina' },
    { imgSrc: '18.png', name: '18', personName: 'Jeyk' },
    { imgSrc: '19.png', name: '19', personName: 'Ebbot' },
  ];
  const category2 = () => [
    { imgSrc: '20.png', name: '20', personName: 'Born' },
    { imgSrc: '21.png', name: '21', personName: 'Jankarlo' },
    { imgSrc: '22.png', name: '22', personName: 'Mari' },
    { imgSrc: '23.png', name: '23', personName: 'Donald' },
    { imgSrc: '24.png', name: '24', personName: 'Vord' },
    { imgSrc: '25.png', name: '25', personName: 'Marta' },
    { imgSrc: '26.png', name: '26', personName: 'Pamelo' },
    { imgSrc: '27.png', name: '27', personName: 'Saymon' },
    { imgSrc: '28.png', name: '28', personName: 'Nikki' },
    { imgSrc: '29.png', name: '29', personName: 'Xezer Li' },
  ];
  const category3 = () => [
    { imgSrc: '30.png', name: '30', personName: 'Tobi' },
    { imgSrc: '31.png', name: '31', personName: 'Anita' },
    { imgSrc: '32.png', name: '32', personName: 'Benni' },
    { imgSrc: '33.png', name: '33', personName: 'Dino' },
    { imgSrc: '34.png', name: '34', personName: 'Ingram' },
    { imgSrc: '35.png', name: '35', personName: 'Julia' },
    { imgSrc: '36.png', name: '36', personName: 'Jo' },
    { imgSrc: '37.png', name: '37', personName: 'Fin' },
    { imgSrc: '38.png', name: '38', personName: 'Monarx' },
    { imgSrc: '39.png', name: '39', personName: 'Pit' },
  ];
  const category4 = () => [
    { imgSrc: '40.png', name: '40', personName: 'Elis' },
    { imgSrc: '41.png', name: '41', personName: 'Karlos' },
    { imgSrc: '42.png', name: '42', personName: 'Cris' },
    { imgSrc: '43.png', name: '43', personName: 'Aizeks' },
    { imgSrc: '44.png', name: '44', personName: 'Spens' },
    { imgSrc: '45.png', name: '45', personName: 'Meet' },
    { imgSrc: '46.png', name: '46', personName: 'Cler' },
    { imgSrc: '47.png', name: '47', personName: 'Vesker' },
    { imgSrc: '48.png', name: '48', personName: 'Bennet' },
    { imgSrc: '49.png', name: '49', personName: 'Lyuter' },
  ];
  const category5 = () => [
    { imgSrc: '50.png', name: '50', personName: 'Panda' },
    { imgSrc: '51.png', name: '51', personName: 'Jolbars' },
    { imgSrc: '52.png', name: '52', personName: 'Shifu' },
    { imgSrc: '53.png', name: '53', personName: 'Maymil' },
    { imgSrc: '54.png', name: '54', personName: 'Shekshek' },
    { imgSrc: '55.png', name: '55', personName: 'Kay' },
    { imgSrc: '56.png', name: '56', personName: 'Taylung' },
    { imgSrc: '57.png', name: '57', personName: 'Jilan' },
    { imgSrc: '58.png', name: '58', personName: 'Gaz' },
    { imgSrc: '59.png', name: '59', personName: 'Tawis' },
  ];
  const category6 = () => [
    { imgSrc: '60.png', name: '60', personName: 'Ruslan' },
    { imgSrc: '61.png', name: '61', personName: 'Mila' },
    { imgSrc: '62.png', name: '62', personName: 'Nestr' },
    { imgSrc: '63.png', name: '63', personName: 'Kot' },
    { imgSrc: '64.png', name: '64', personName: 'Karol' },
    { imgSrc: '65.png', name: '65', personName: 'Tishqan' },
    { imgSrc: '66.png', name: '66', personName: 'Chorno More' },
    { imgSrc: '67.png', name: '67', personName: 'Shimshiq' },
    { imgSrc: '68.png', name: '68', personName: 'Ritsar' },
    { imgSrc: '69.png', name: '69', personName: 'Vor' },
  ];
  const category7 = () => [
    { imgSrc: '70.png', name: '70', personName: 'Toni' },
    { imgSrc: '71.png', name: '71', personName: 'Scoot' },
    { imgSrc: '72.png', name: '72', personName: 'Capitan A' },
    { imgSrc: '73.png', name: '73', personName: 'Xalq' },
    { imgSrc: '74.png', name: '74', personName: 'Tor' },
    { imgSrc: '75.png', name: '75', personName: 'Glaz' },
    { imgSrc: '76.png', name: '76', personName: 'Pauk' },
    { imgSrc: '77.png', name: '77', personName: 'Mikki' },
    { imgSrc: '78.png', name: '78', personName: 'Pepper' },
    { imgSrc: '79.png', name: '79', personName: 'Scarlet' },
  ];
  const category8 = () => [
    { imgSrc: '80.png', name: '80', personName: 'Charli' },
    { imgSrc: '81.png', name: '81', personName: 'Stella' },
    { imgSrc: '82.png', name: '82', personName: 'Rob' },
    { imgSrc: '83.png', name: '83', personName: 'Stiv' },
    { imgSrc: '84.png', name: '84', personName: 'Shep qulaq' },
    { imgSrc: '85.png', name: '85', personName: 'Jon' },
    { imgSrc: '86.png', name: '86', personName: 'Vrench' },
    { imgSrc: '87.png', name: '87', personName: 'Layl' },
    { imgSrc: '88.png', name: '88', personName: 'Busy Pit' },
    { imgSrc: '89.png', name: '89', personName: 'Mashkov' },
  ];
  const category9 = () => [
    { imgSrc: '90.png', name: '90', personName: 'Xarli' },
    { imgSrc: '91.png', name: '91', personName: 'Dead Shot' },
    { imgSrc: '92.png', name: '92', personName: 'Joker' },
    { imgSrc: '93.png', name: '93', personName: 'Mun' },
    { imgSrc: '94.png', name: '94', personName: 'Betmen' },
    { imgSrc: '95.png', name: '95', personName: 'Diablo' },
    { imgSrc: '96.png', name: '96', personName: 'Rik' },
    { imgSrc: '97.png', name: '97', personName: 'Amanda' },
    { imgSrc: '98.png', name: '98', personName: 'Krok' },
    { imgSrc: '99.png', name: '99', personName: 'Bumerang' },
  ];

  // RANDOMIZE
  const randomize0 = () => {
    const cardData = category0()
    cardData.sort(() => Math.random() - 0.5)
    return cardData
  }
  const randomize1 = () => {
    const cardData = category1()
    cardData.sort(() => Math.random() - 0.5)
    return cardData
  }
  const randomize2 = () => {
    const cardData = category2()
    cardData.sort(() => Math.random() - 0.5)
    return cardData
  }
  const randomize3 = () => {
    const cardData = category3()
    cardData.sort(() => Math.random() - 0.5)
    return cardData
  }
  const randomize4 = () => {
    const cardData = category4()
    cardData.sort(() => Math.random() - 0.5)
    return cardData
  }
  const randomize5 = () => {
    const cardData = category5()
    cardData.sort(() => Math.random() - 0.5)
    return cardData
  }
  const randomize6 = () => {
    const cardData = category6()
    cardData.sort(() => Math.random() - 0.5)
    return cardData
  }
  const randomize7 = () => {
    const cardData = category7()
    cardData.sort(() => Math.random() - 0.5)
    return cardData
  }
  const randomize8 = () => {
    const cardData = category8()
    cardData.sort(() => Math.random() - 0.5)
    return cardData
  }
  const randomize9 = () => {
    const cardData = category9()
    cardData.sort(() => Math.random() - 0.5)
    return cardData
  }

  // HTML DOC
  const ul = document.querySelector('.test-card-list'),
    categories = document.querySelectorAll('.person-button');


  // GENERATE THE HTML
  cardGenerator = (obj) => {
    const cardData = obj()
    cardData.forEach((item) => {
      // generate from html
      const li_tems = document.querySelectorAll('.test-card-item')
      // CARDS
      const inputs = document.querySelectorAll('.test-input-number')
      const li = document.createElement('li')
      li.classList.add('test-card-item')
      li.innerHTML = `
      <div class="test-card">
        <img class="test-front-img" src="img/person/${item.imgSrc}" alt="" width="100" height="100">
        <input class="test-input-number" name="${item.name}" type="number" maxlength="2">
      </div>
      `
      ul.append(li)

      // Input function
      inputs.forEach((item) => {
        item.addEventListener('input', (e) => {
          if(item.value.length === 2) {
            if(item.value === item.name) {
              item.classList.add('succes')
            } else {
              item.classList.add('wrong')
            }
          }
        })
      })
    })
  }


  categories.forEach((item, index) => {
    const li_tems = document.querySelectorAll('.test-card-item')
    item.addEventListener('click', () => {
      if(index === 0) {
        cardGenerator(randomize0)
      }
      if(index === 1) {
        cardGenerator(randomize1)
      }
      if(index === 2) {
        cardGenerator(randomize2)
      }
      if(index === 3) {
        cardGenerator(randomize3)
      }
      if(index === 4) {
        cardGenerator(randomize4)
      }
      if(index === 5) {
        cardGenerator(randomize5)
      }
      if(index === 6) {
        cardGenerator(randomize6)
      }
      if(index === 7) {
        cardGenerator(randomize7)
      }
      if(index === 8) {
        cardGenerator(randomize8)
      }
      if(index === 9) {
        cardGenerator(randomize9)
      }
    })
  })

})
