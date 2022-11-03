// https://bit.ly/3DuzrMd link da tabela de times

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

function creatCard(date, day, hour, team1, team2) {
  return `
<div class="card">
            <div class="date">
              <h2><span>${date}</span> ${day}</h2>
            </div>
            <ul>
              <li>
                <img
                  src="./files/Flags/icon-${team1}.svg"
                  alt="Bandeira do ${team1}"
                />
                <p>${hour}</p>
                <img
                  src="./files/Flags/icon-${team2}.svg"
                  alt="Bandeira de ${team2}"
                />
              </li>
              <li>
                <img
                  src="./files/Flags/icon-${team1}.svg"
                  alt="Bandeira do ${team1}"
                />
                <p>${hour}</p>
                <img
                  src="./files/Flags/icon-${team2}.svg"
                  alt="Bandeira da ${team2}"
                />
              </li>
              <li>
                <img
                  src="./files/Flags/icon-${team1}.svg"
                  alt="Bandeira da ${team1}"
                />
                <p>${hour}</p>
                <img
                  src="./files/Flags/icon-${team2}.svg"
                  alt="Bandeira do ${team2}"
                />
              </li>
            </ul>
          </div>
`
}

function createGame(team1, hour, team2) {
  return `
  <li>
  <img src="./assets/icon-${team1}.svg" alt="Bandeira ${team1} ${team1}">
  <strong>${hour}</strong>
  <img src="./assets/icon-${team2}.svg" alt="Bandeira ${team2} ${team2}">
</li>
  `
}

document.querySelector('#app').innerHTML = `
        <div id="cards">
          ${creatCard('24/11', 'Domingo', '09:00', 'azerbaijan', 'zimbabwe')}
          ${creatCard('25/11', 'Segunda', '10:30', 'brazil', 'angola')}
          ${creatCard('26/11', 'Terça', '08:30', 'wales', 'vanuatu')}
          ${creatCard(
            '27/11',
            'Quarta',
            '05:00',
            'uzbekistán',
            'united states'
          )}
          ${creatCard(
            '28/11',
            'Quinta',
            '12:30',
            'virgin islands',
            'vatican city'
          )}
          ${creatCard('29/11', 'Sexta', '11:15', 'tibet', 'togo')}
        </div>
`
