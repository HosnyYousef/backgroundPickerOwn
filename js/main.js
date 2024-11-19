
document.querySelector('#player1').addEventListener('click', runPlayer1)

document.getElementById('#player1').onclick = runPlayer1

document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('red').onclick = partyRed


function runPlayer1() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}

function partyRed() {
  document.querySelector('body').style.backgroundColor = 'rgba(255,0,0,1)'
  document.querySelector('body').style.color = 'white'
}
