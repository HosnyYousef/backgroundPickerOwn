

document.getElementById('player1').onclick = function () {
  document.getElementById('playVidPlayer1').play();
};



// EXTRA STUFF BELOW

document.getElementById('playVid').onclick = function () {
  document.getElementById('video').play();
};

document.querySelector('#playVidPlayer1').addEventListener('click', runPlayer1)

document.getElementById('#player1').onclick = runPlayer1

document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('red').onclick = partyRed


function runPlayer1() {
  document.querySelector('#vidPlayer1').style.background = 'video/characters/baraka.mov'
  document.querySelector('body').style.color = 'pink'
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
