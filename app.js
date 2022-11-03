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

function creatCard(date, day, matches) {
  return `
<div class="card">
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
      <strong>${hour}</strong>
      <img src="./files/Flags/icon-${team2}.svg" alt="Bandeira do ${team2}">
    </li>
`
}

document.querySelector('#cards').innerHTML =
  creatCard(
    '24/11',
    'Domingo',
    createGame('azerbaijan', '09:00', 'zimbabwe') +
      createGame('azerbaijan', '09:00', 'zimbabwe')
  ) +
  creatCard('25/11', 'Segunda', createGame('brazil', '10:30', 'angola')) +
  creatCard('26/11', 'Terça', createGame('wales', '08:30', 'vanuatu')) +
  creatCard(
    '27/11',
    'Quarta',
    createGame('uzbekistán', '05:00', 'united states')
  ) +
  creatCard(
    '28/11',
    'Quinta',
    createGame('virgin islands', '12:30', 'vatican city')
  ) +
  creatCard('29/11', 'Sexta', createGame('tibet', '11:15', 'togo'))
