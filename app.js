const matches = {
  date: '24/11',
  day: 'quinta',
  matches: {
    1: {
      team1: 'switzerland',
      hour: '07:00',
      team2: 'cameroon'
    },
    2: {
      team1: 'portugal',
      hour: '13:00',
      team2: 'ghana'
    },
    3: {
      team1: 'brazil',
      hour: '16:00',
      team2: 'serbia'
    }
  }
}

function creatCard() {
  return `
<div class="card">
            <div class="date">
              <h2><span>21/11</span> SEGUNDA</h2>
            </div>
            <ul>
              <li>
                <img
                  src="./files/Flags/icon-brazil.svg"
                  alt="Bandeira do brasil"
                />
                <p>08:00</p>
                <img
                  src="./files/Flags/icon-cameroon.svg"
                  alt="Bandeira de Camarões"
                />
              </li>
              <li>
                <img
                  src="./files/Flags/icon-uruguay.svg"
                  alt="Bandeira do uruguai"
                />
                <p>13:00</p>
                <img
                  src="./files/Flags/icon-argentina.svg"
                  alt="Bandeira da Argentina"
                />
              </li>
              <li>
                <img
                  src="./files/Flags/icon-colombia.svg"
                  alt="Bandeira da Colombia"
                />
                <p>20:00</p>
                <img
                  src="./files/Flags/icon-japan.svg"
                  alt="Bandeira do japão"
                />
              </li>
            </ul>
          </div>
`
}

document.querySelector('#app').innerHTML = `
<div class="wrapper">
        <div id="cards">
        ${creatCard()}
        ${creatCard()}
        ${creatCard()}
        ${creatCard()}
        ${creatCard()}
        ${creatCard()}
        </div>
      </div>
`
