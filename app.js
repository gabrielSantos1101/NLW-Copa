// https://bit.ly/3DuzrMd link da tabela de times.

const matches = [
  {
    date: '20/11',
    day: 'Domingo',
    matches: {
      matche1: {
        team1: 'qatar',
        hour: '13:00',
        team2: 'ecuador'
      }
    }
  },

  {
    date: '21/11',
    day: 'Segunda',
    matches: {
      matche1: {
        team1: 'england',
        hour: '10:00',
        team2: 'iran'
      },
      matche2: {
        team1: 'senegal',
        hour: '13:00',
        team2: 'nethelands'
      },
      matche3: {
        team1: 'united states',
        hour: '16:00',
        team2: 'wales'
      }
    }
  },

  {
    date: '22/11',
    day: 'Terça',
    matches: {
      matche1: {
        team1: 'argentina',
        hour: '07:00',
        team2: 'saudi arabia'
      },
      matche2: {
        team1: 'denmark',
        hour: '10:00',
        team2: 'tunisia'
      },
      matche3: {
        team1: 'mexico',
        hour: '13:00',
        team2: 'poland'
      },
      matche4: {
        team1: 'france',
        hour: '16:00',
        team2: 'autralia'
      }
    }
  }
]

let delay = -0.4
function creatCard(date, day, matches) {
  delay = delay + 0.4
  return `
<div class="card" style="animation-delay: ${delay}s;">
            <div class="date">
              <h2><span>${date}</span> ${day}</h2>
            </div>
            <ul>
              ${matches}
            </ul>
          </div>
`
}

function createGame(team1, hour, team2) {
  return `
    <li>
      <img src="./files/Flags/icon-${team1}.svg" alt="Bandeira do ${team1}">
      <p>${hour}</p>
      <img src="./files/Flags/icon-${team2}.svg" alt="Bandeira do ${team2}">
      
    </li>
`
}

document.querySelector('#cards').innerHTML =
  creatCard('20/11', 'Domingo', createGame('qatar', '13:00', 'ecuador')) +
  creatCard(
    '21/11',
    'Segunda',
    createGame('england', '10:00', 'iran') +
      createGame('senegal', '13:00', 'netherlands') +
      createGame('united states', '16:00', 'wales')
  ) +
  creatCard(
    '22/11',
    'Terça',
    createGame('argentina', '07:00', 'saudi arabia') +
      createGame('denmark', '10:00', 'tunisia') +
      createGame('mexico', '13:00', 'poland') +
      createGame('france', '16:00', 'australia')
  ) +
  creatCard(
    '23/11',
    'Quarta',
    createGame('morocco', '07:00', 'croatia') +
      createGame('belgium', '16:00', 'canada') +
      createGame('germany', '10:00', 'japan') +
      createGame('spain', '13:00', 'costa rica')
  ) +
  creatCard(
    '24/11',
    'Quinta',
    createGame('switzerland', '07:00', 'cameroon') +
      createGame('brazil', '16:00', 'serbia') +
      createGame('uruguay', '10:00', 'south korea') +
      createGame('portugal', '13:00', 'ghana')
  ) +
  creatCard(
    '25/11',
    'Sexta',
    createGame('wales', '07:00', 'iran') +
      createGame('england', '16:00', 'united states') +
      createGame('qatar', '10:00', 'senegal') +
      createGame('netherlands', '13:00', 'ecuador')
  ) +
  creatCard(
    '26/11',
    'Sábado',
    createGame('tunisia', '07:00', 'australia') +
      createGame('france', '13:00', 'denmark') +
      createGame('poland', '10:00', 'saudi arabia') +
      createGame('argentina', '16:00', 'mexico')
  ) +
  creatCard(
    '27/11',
    'Domingo',
    createGame('japan', '07:00', 'costa rica') +
      createGame('spain', '16:00', 'germany') +
      createGame('belgium', '10:00', 'morocco') +
      createGame('croatia', '13:00', 'canada')
  ) +
  creatCard(
    '28/11',
    'Segunda',
    createGame('cameroon', '07:00', 'serbia') +
      createGame('brazil', '13:00', 'switzerland') +
      createGame('south korea', '10:00', 'ghana') +
      createGame('portugal', '16:00', 'uruguay')
  ) +
  creatCard(
    '28/11',
    'Segunda',
    createGame('cameroon', '07:00', 'serbia') +
      createGame('brazil', '13:00', 'switzerland') +
      createGame('south korea', '10:00', 'ghana') +
      createGame('portugal', '16:00', 'uruguay')
  ) +
  creatCard(
    '29/11',
    'Terça',
    createGame('ecuador', '12:00', 'senegal') +
      createGame('netherlands', '12:00', 'qatar') +
      createGame('iran', '16:00', 'united states') +
      createGame('wales', '16:00', 'england')
  ) +
  creatCard(
    '30/11',
    'Quarta',
    createGame('tunisia', '12:00', 'france') +
      createGame('australia', '12:00', 'denmark') +
      createGame('poland', '16:00', 'argentina') +
      createGame('saudi arabia', '16:00', 'mexico')
  ) +
  creatCard(
    '01/12',
    'Quinta',
    createGame('croatia', '12:00', 'belgium') +
      createGame('canada', '12:00', 'morocco') +
      createGame('japan', '16:00', 'spain') +
      createGame('costa rica', '16:00', 'germany')
  ) +
  creatCard(
    '02/12',
    'Sexta',
    createGame('south korea', '12:00', 'portugal') +
      createGame('ghana', '12:00', 'uruguay') +
      createGame('serbia', '16:00', 'switzerland') +
      createGame('cameroon', '16:00', 'brazil')
  )
// ================ background ================

document.querySelector('.switch').addEventListener('click', e => {
  e.target.classList.toggle('dark')
  document.body.classList.toggle('green')
})

// ================ particles ================

window.onload = function () {
  Particles.init({
    selector: '.background',
    sizeVariations: '4',
    color: ['#48F2E3', '#2c3e50', '#95a5a6', '#7f8c8d'],
    connectParticles: true,
    minDistance: 150,
    speed: 0.7
  })
}
Particles.init({
  // normal options
  selector: '.background',
  maxParticles: 450,
  // options for breakpoints
  responsive: [
    {
      breakpoint: 768,
      options: {
        maxParticles: 200,
        connectParticles: true
      }
    },
    {
      breakpoint: 425,
      options: {
        maxParticles: 100,
        connectParticles: true
      }
    },
    {
      breakpoint: 320,
      options: {
        maxParticles: 30

        // disables particles.js
      }
    }
  ]
})
