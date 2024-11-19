

//play video
// I want to stop the other videos from play when this is clicked
// I want to hide: 

{/* <video id="playVidPlayer18" class="videoChar charImage">
	<source src="video/characters/noobsaibot.mov" type="video/webm">
  </video> */}

// document.querySelector(".charImage").style.display = 'none'

document.getElementById('player1').onclick = function () {
document.getElementById('playVidPlayer1').play();
};

document.getElementById('player2').onclick = function () {  document.getElementById('playVidPlayer2').play();
};

document.getElementById('player3').onclick = function () {
document.getElementById('playVidPlayer3').play();
};

document.getElementById('player4').onclick = function () {  document.getElementById('playVidPlayer4').play();
};

document.getElementById('player5').onclick = function () {
document.getElementById('playVidPlayer5').play();
};

document.getElementById('player6').onclick = function () {  document.getElementById('playVidPlayer6').play();
};

document.getElementById('player7').onclick = function () {
document.getElementById('playVidPlayer7').play();
};

document.getElementById('player8').onclick = function () {  document.getElementById('playVidPlayer8').play();
};

document.getElementById('player9').onclick = function () {
document.getElementById('playVidPlayer9').play();
};

document.getElementById('player10').onclick = function () {  document.getElementById('playVidPlayer10').play();
};

document.getElementById('player11').onclick = function () {
document.getElementById('playVidPlayer11').play();
};

document.getElementById('player12').onclick = function () {  document.getElementById('playVidPlayer12').play();
};

document.getElementById('player13').onclick = function () {
document.getElementById('playVidPlayer13').play();
};

document.getElementById('player14').onclick = function () {  document.getElementById('playVidPlayer14').play();
};

document.getElementById('player15').onclick = function () {
document.getElementById('playVidPlayer15').play();
};

document.getElementById('player16').onclick = function () {  document.getElementById('playVidPlayer16').play();
};

document.getElementById('player17').onclick = function () {
document.getElementById('playVidPlayer17').play();
};

document.getElementById('player18').onclick = function () {  document.getElementById('playVidPlayer18').play();
};

// hide others
// thevideo stored in variable
const player1 = document.querySelector('#playVidPlayer1')
const player2 = document.querySelector('#playVidPlayer2')
const player3 = document.querySelector('#playVidPlayer3')

const player4 = document.querySelector('#playVidPlayer4')
const player5 = document.querySelector('#playVidPlayer5')
const player6 = document.querySelector('#playVidPlayer6')

const player7 = document.querySelector('#playVidPlayer7')
const player8 = document.querySelector('#playVidPlayer8')
const player9 = document.querySelector('#playVidPlayer9')

const player10 = document.querySelector('#playVidPlayer10')
const player11 = document.querySelector('#playVidPlayer11')
const player12 = document.querySelector('#playVidPlayer12')

const player13 = document.querySelector('#playVidPlayer13')
const player14 = document.querySelector('#playVidPlayer14')
const player15 = document.querySelector('#playVidPlayer15')

const player16 = document.querySelector('#playVidPlayer16')
const player17 = document.querySelector('#playVidPlayer17')
const player18 = document.querySelector('#playVidPlayer18')


//event listener for click on image
document.querySelector('#player1').addEventListener('click', runPlayer1)
document.querySelector('#player2').addEventListener('click', runPlayer2)
document.querySelector('#player3').addEventListener('click', runPlayer3)

document.querySelector('#player4').addEventListener('click', runPlayer4)
document.querySelector('#player5').addEventListener('click', runPlayer5)
document.querySelector('#player6').addEventListener('click', runPlayer6)

document.querySelector('#player7').addEventListener('click', runPlayer7)
document.querySelector('#player8').addEventListener('click', runPlayer8)
document.querySelector('#player9').addEventListener('click', runPlayer9)

document.querySelector('#player10').addEventListener('click', runPlayer10)
document.querySelector('#player11').addEventListener('click', runPlayer11)
document.querySelector('#player12').addEventListener('click', runPlayer12)

document.querySelector('#player13').addEventListener('click', runPlayer13)
document.querySelector('#player14').addEventListener('click', runPlayer14)
document.querySelector('#player15').addEventListener('click', runPlayer15)

document.querySelector('#player16').addEventListener('click', runPlayer16)
document.querySelector('#player17').addEventListener('click', runPlayer17)
document.querySelector('#player18').addEventListener('click', runPlayer18)



function runPlayer1() {
  player1.classList.toggle('charImage');
  player2.classList.add('charImage');
  player3.classList.add('charImage');
  player4.classList.add('charImage');
  player5.classList.add('charImage');
  player6.classList.add('charImage');
  player7.classList.add('charImage');
  player8.classList.add('charImage');
  player9.classList.add('charImage');
  player10.classList.add('charImage');
  player11.classList.add('charImage');
  player12.classList.add('charImage');
  player13.classList.add('charImage');
  player14.classList.add('charImage');
  player15.classList.add('charImage');
  player16.classList.add('charImage');
  player17.classList.add('charImage');
  player18.classList.add('charImage');
}

function runPlayer2() {
  player1.classList.add('charImage');
  player2.classList.toggle('charImage');
  player3.classList.add('charImage');
  player4.classList.add('charImage');
  player5.classList.add('charImage');
  player6.classList.add('charImage');
  player7.classList.add('charImage');
  player8.classList.add('charImage');
  player9.classList.add('charImage');
  player10.classList.add('charImage');
  player11.classList.add('charImage');
  player12.classList.add('charImage');
  player13.classList.add('charImage');
  player14.classList.add('charImage');
  player15.classList.add('charImage');
  player16.classList.add('charImage');
  player17.classList.add('charImage');
  player18.classList.add('charImage');
}

function runPlayer3() {
  player1.classList.add('charImage');
  player2.classList.add('charImage');
  player3.classList.toggle('charImage');
  player4.classList.add('charImage');
  player5.classList.add('charImage');
  player6.classList.add('charImage');
  player7.classList.add('charImage');
  player8.classList.add('charImage');
  player9.classList.add('charImage');
  player10.classList.add('charImage');
  player11.classList.add('charImage');
  player12.classList.add('charImage');
  player13.classList.add('charImage');
  player14.classList.add('charImage');
  player15.classList.add('charImage');
  player16.classList.add('charImage');
  player17.classList.add('charImage');
  player18.classList.add('charImage');
}

function runPlayer4() {
  player1.classList.add('charImage');
  player2.classList.add('charImage');
  player3.classList.add('charImage');
  player4.classList.toggle('charImage');
  player5.classList.add('charImage');
  player6.classList.add('charImage');
  player7.classList.add('charImage');
  player8.classList.add('charImage');
  player9.classList.add('charImage');
  player10.classList.add('charImage');
  player11.classList.add('charImage');
  player12.classList.add('charImage');
  player13.classList.add('charImage');
  player14.classList.add('charImage');
  player15.classList.add('charImage');
  player16.classList.add('charImage');
  player17.classList.add('charImage');
  player18.classList.add('charImage');
}

function runPlayer5() {
  player1.classList.add('charImage');
  player2.classList.add('charImage');
  player3.classList.add('charImage');
  player4.classList.add('charImage');
  player5.classList.toggle('charImage');
  player6.classList.add('charImage');
  player7.classList.add('charImage');
  player8.classList.add('charImage');
  player9.classList.add('charImage');
  player10.classList.add('charImage');
  player11.classList.add('charImage');
  player12.classList.add('charImage');
  player13.classList.add('charImage');
  player14.classList.add('charImage');
  player15.classList.add('charImage');
  player16.classList.add('charImage');
  player17.classList.add('charImage');
  player18.classList.add('charImage');
}

function runPlayer6() {
  player1.classList.add('charImage');
  player2.classList.add('charImage');
  player3.classList.add('charImage');
  player4.classList.add('charImage');
  player5.classList.add('charImage');
  player6.classList.toggle('charImage');
  player7.classList.add('charImage');
  player8.classList.add('charImage');
  player9.classList.add('charImage');
  player10.classList.add('charImage');
  player11.classList.add('charImage');
  player12.classList.add('charImage');
  player13.classList.add('charImage');
  player14.classList.add('charImage');
  player15.classList.add('charImage');
  player16.classList.add('charImage');
  player17.classList.add('charImage');
  player18.classList.add('charImage');
}

function runPlayer7() {
  player1.classList.add('charImage');
  player2.classList.add('charImage');
  player3.classList.add('charImage');
  player4.classList.add('charImage');
  player5.classList.add('charImage');
  player6.classList.add('charImage');
  player7.classList.toggle('charImage');
  player8.classList.add('charImage');
  player9.classList.add('charImage');
  player10.classList.add('charImage');
  player11.classList.add('charImage');
  player12.classList.add('charImage');
  player13.classList.add('charImage');
  player14.classList.add('charImage');
  player15.classList.add('charImage');
  player16.classList.add('charImage');
  player17.classList.add('charImage');
  player18.classList.add('charImage');
}

function runPlayer8() {
  player1.classList.add('charImage');
  player2.classList.add('charImage');
  player3.classList.add('charImage');
  player4.classList.add('charImage');
  player5.classList.add('charImage');
  player6.classList.add('charImage');
  player7.classList.add('charImage');
  player8.classList.toggle('charImage');
  player9.classList.add('charImage');
  player10.classList.add('charImage');
  player11.classList.add('charImage');
  player12.classList.add('charImage');
  player13.classList.add('charImage');
  player14.classList.add('charImage');
  player15.classList.add('charImage');
  player16.classList.add('charImage');
  player17.classList.add('charImage');
  player18.classList.add('charImage');
}

function runPlayer9() {
  player1.classList.add('charImage');
  player2.classList.add('charImage');
  player3.classList.add('charImage');
  player4.classList.add('charImage');
  player5.classList.add('charImage');
  player6.classList.add('charImage');
  player7.classList.add('charImage');
  player8.classList.add('charImage');
  player9.classList.toggle('charImage');
  player10.classList.add('charImage');
  player11.classList.add('charImage');
  player12.classList.add('charImage');
  player13.classList.add('charImage');
  player14.classList.add('charImage');
  player15.classList.add('charImage');
  player16.classList.add('charImage');
  player17.classList.add('charImage');
  player18.classList.add('charImage');
}

function runPlayer10() {
  player1.classList.add('charImage');
  player2.classList.add('charImage');
  player3.classList.add('charImage');
  player4.classList.add('charImage');
  player5.classList.add('charImage');
  player6.classList.add('charImage');
  player7.classList.add('charImage');
  player8.classList.add('charImage');
  player9.classList.add('charImage');
  player10.classList.toggle('charImage');
  player11.classList.add('charImage');
  player12.classList.add('charImage');
  player13.classList.add('charImage');
  player14.classList.add('charImage');
  player15.classList.add('charImage');
  player16.classList.add('charImage');
  player17.classList.add('charImage');
  player18.classList.add('charImage');
}

function runPlayer11() {
  player1.classList.add('charImage');
  player2.classList.add('charImage');
  player3.classList.add('charImage');
  player4.classList.add('charImage');
  player5.classList.add('charImage');
  player6.classList.add('charImage');
  player7.classList.add('charImage');
  player8.classList.add('charImage');
  player9.classList.add('charImage');
  player10.classList.add('charImage');
  player11.classList.toggle('charImage');
  player12.classList.add('charImage');
  player13.classList.add('charImage');
  player14.classList.add('charImage');
  player15.classList.add('charImage');
  player16.classList.add('charImage');
  player17.classList.add('charImage');
  player18.classList.add('charImage');
}

function runPlayer12() {
  player1.classList.add('charImage');
  player2.classList.add('charImage');
  player3.classList.add('charImage');
  player4.classList.add('charImage');
  player5.classList.add('charImage');
  player6.classList.add('charImage');
  player7.classList.add('charImage');
  player8.classList.add('charImage');
  player9.classList.add('charImage');
  player10.classList.add('charImage');
  player11.classList.add('charImage');
  player12.classList.toggle('charImage');
  player13.classList.add('charImage');
  player14.classList.add('charImage');
  player15.classList.add('charImage');
  player16.classList.add('charImage');
  player17.classList.add('charImage');
  player18.classList.add('charImage');
}

function runPlayer13() {
  player1.classList.add('charImage');
  player2.classList.add('charImage');
  player3.classList.add('charImage');
  player4.classList.add('charImage');
  player5.classList.add('charImage');
  player6.classList.add('charImage');
  player7.classList.add('charImage');
  player8.classList.add('charImage');
  player9.classList.add('charImage');
  player10.classList.add('charImage');
  player11.classList.add('charImage');
  player12.classList.add('charImage');
  player13.classList.toggle('charImage');
  player14.classList.add('charImage');
  player15.classList.add('charImage');
  player16.classList.add('charImage');
  player17.classList.add('charImage');
  player18.classList.add('charImage');
}

function runPlayer14() {
  player1.classList.add('charImage');
  player2.classList.add('charImage');
  player3.classList.add('charImage');
  player4.classList.add('charImage');
  player5.classList.add('charImage');
  player6.classList.add('charImage');
  player7.classList.add('charImage');
  player8.classList.add('charImage');
  player9.classList.add('charImage');
  player10.classList.add('charImage');
  player11.classList.add('charImage');
  player12.classList.add('charImage');
  player13.classList.add('charImage');
  player14.classList.toggle('charImage');
  player15.classList.add('charImage');
  player16.classList.add('charImage');
  player17.classList.add('charImage');
  player18.classList.add('charImage');
}

function runPlayer15() {
  player1.classList.add('charImage');
  player2.classList.add('charImage');
  player3.classList.add('charImage');
  player4.classList.add('charImage');
  player5.classList.add('charImage');
  player6.classList.add('charImage');
  player7.classList.add('charImage');
  player8.classList.add('charImage');
  player9.classList.add('charImage');
  player10.classList.add('charImage');
  player11.classList.add('charImage');
  player12.classList.add('charImage');
  player13.classList.add('charImage');
  player14.classList.add('charImage');
  player15.classList.toggle('charImage');
  player16.classList.add('charImage');
  player17.classList.add('charImage');
  player18.classList.add('charImage');
}

function runPlayer16() {
  player1.classList.add('charImage');
  player2.classList.add('charImage');
  player3.classList.add('charImage');
  player4.classList.add('charImage');
  player5.classList.add('charImage');
  player6.classList.add('charImage');
  player7.classList.add('charImage');
  player8.classList.add('charImage');
  player9.classList.add('charImage');
  player10.classList.add('charImage');
  player11.classList.add('charImage');
  player12.classList.add('charImage');
  player13.classList.add('charImage');
  player14.classList.add('charImage');
  player15.classList.add('charImage');
  player16.classList.toggle('charImage');
  player17.classList.add('charImage');
  player18.classList.add('charImage');
}

function runPlayer17() {
  player1.classList.add('charImage');
  player2.classList.add('charImage');
  player3.classList.add('charImage');
  player4.classList.add('charImage');
  player5.classList.add('charImage');
  player6.classList.add('charImage');
  player7.classList.add('charImage');
  player8.classList.add('charImage');
  player9.classList.add('charImage');
  player10.classList.add('charImage');
  player11.classList.add('charImage');
  player12.classList.add('charImage');
  player13.classList.add('charImage');
  player14.classList.add('charImage');
  player15.classList.add('charImage');
  player16.classList.add('charImage');
  player17.classList.toggle('charImage');
  player18.classList.add('charImage');
}

function runPlayer18() {
  player1.classList.add('charImage');
  player2.classList.add('charImage');
  player3.classList.add('charImage');
  player4.classList.add('charImage');
  player5.classList.add('charImage');
  player6.classList.add('charImage');
  player7.classList.add('charImage');
  player8.classList.add('charImage');
  player9.classList.add('charImage');
  player10.classList.add('charImage');
  player11.classList.add('charImage');
  player12.classList.add('charImage');
  player13.classList.add('charImage');
  player14.classList.add('charImage');
  player15.classList.add('charImage');
  player16.classList.add('charImage');
  player17.classList.add('charImage');
  player18.classList.toggle('charImage');
}

// toggle end


// document.getElementById('player2').onclick = function () {

  
//   document.getElementById('playVidPlayer2').play();
  
// };



// EXTRA STUFF BELOW

// document.getElementById('playVid').onclick = function () {
//   document.getElementById('video').play();
// };

// document.querySelector('#playVidPlayer1').addEventListener('click', runPlayer1)

// document.getElementById('#player1').onclick = runPlayer1

// document.getElementById('green').onclick = partyGreen
// document.getElementById('blue').onclick = partyBlue
// document.getElementById('red').onclick = partyRed


// function runPlayer1() {
//   document.querySelector('#vidPlayer1').style.background = 'video/characters/baraka.mov'
//   document.querySelector('body').style.color = 'pink'
// }

// function partyGreen() {
//   document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
//   document.querySelector('body').style.color = 'white'
// }

// function partyBlue() {
//   document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
//   document.querySelector('body').style.color = 'white'
// }

// function partyRed() {
//   document.querySelector('body').style.backgroundColor = 'rgba(255,0,0,1)'
//   document.querySelector('body').style.color = 'white'
// }
