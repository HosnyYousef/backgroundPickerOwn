
// psuedo-code

// When we click on a character, it plays the single video
  // but also resets from the beginning of the video
// when another character is clicked, it stops the current video played and switches to that video
  // also reseting that current playing/clicked video from the beginning of the video
  // videos don't loop


function display(playVidPlayer){
  hideAndStopAll()
  // oneVidPlay()
  var vid = document.getElementById(playVidPlayer);
  vid.style.display = 'block'; //makes video appear: becomes a block level element, taking up it's own line and appearing as intended
  // vid.play();
  document.getElementById('playVidPlayer1').play();
  document.getElementById('playVidPlayer2').play();
  document.getElementById('playVidPlayer3').play();
  document.getElementById('playVidPlayer4').play();
  document.getElementById('playVidPlayer5').play();
  document.getElementById('playVidPlayer6').play();
  document.getElementById('playVidPlayer7').play();
  document.getElementById('playVidPlayer8').play();
  document.getElementById('playVidPlayer9').play();
  document.getElementById('playVidPlayer10').play();
  document.getElementById('playVidPlayer11').play();
  document.getElementById('playVidPlayer12').play();
  document.getElementById('playVidPlayer13').play();
  document.getElementById('playVidPlayer14').play();
  document.getElementById('playVidPlayer15').play();
  document.getElementById('playVidPlayer16').play();
  document.getElementById('playVidPlayer17').play();
  document.getElementById('playVidPlayer18').play();

} 


function hideAndStopAll(){
var ids= ['playVidPlayer1','playVidPlayer2', 'playVidPlayer3', 'playVidPlayer4', 'playVidPlayer5', 'playVidPlayer6',
  'playVidPlayer7', 'playVidPlayer8', 'playVidPlayer9', 'playVidPlayer10', 'playVidPlayer11', 'playVidPlayer12',
  'playVidPlayer13', 'playVidPlayer14', 'playVidPlayer15', 'playVidPlayer16', 'playVidPlayer17', 'playVidPlayer18']
    for(i=0;i<ids.length;i++){
        var video = document.getElementById(ids[i]);
        video.pause();
        video.style.display='none'
        console.log('oneWorks')
        video.currentTime =0; // if you want to go back to beginning

    }
}



// function oneVidPlay(){
//   ('click', function(){
//     for(var i = 0;i < playVidPlayer.players.length; i++){
//       playVidPlayer.players[i].pause();
//     }
//     });
// }

// function pauseAllVideos() {
            

// }



// window.addEventListener('load', function(event) {
//   document.getElementsByClassName("videoChar").forEach((video) => {
//     video.onplay = function(event) {
//       event.preventDefault();
//       document.getElementsByClassName("videoChar").forEach((playing) => {
//         if (video === playing)
//           playing.play();
//         else
//           playing.pause();
//       });
//     }
//   });
// });

// var video = document.getElementById("myVideoPlayer");
// function stopVideo(){
//      video.pause();
//      video.currentTime = 0;
// }

// $("#stop").on('click', function(){
//   stopVideo();
// });






// // tying to figure out how to play one at a time
// function playVideo1() {

// // document.getElementsByClassName('videoChar').currentTime = 0

// document.getElementById('playVidPlayer1').play();

// document.getElementById('playVidPlayer2').pause();
//   document.getElementById('playVidPlayer3').pause();
//   document.getElementById('playVidPlayer4').pause();
//   document.getElementById('playVidPlayer5').pause();
//   document.getElementById('playVidPlayer6').pause();
//   document.getElementById('playVidPlayer7').pause();
//   document.getElementById('playVidPlayer8').pause();
//   document.getElementById('playVidPlayer9').pause();
//   document.getElementById('playVidPlayer10').pause();
//   document.getElementById('playVidPlayer11').pause();
//   document.getElementById('playVidPlayer12').pause();
//   document.getElementById('playVidPlayer13').pause();
//   document.getElementById('playVidPlayer14').pause();
//   document.getElementById('playVidPlayer15').pause();
//   document.getElementById('playVidPlayer16').pause();
//   document.getElementById('playVidPlayer17').pause();
//   document.getElementById('playVidPlayer18').pause();
// }

// function playVideo2() {
//   document.getElementById('playVidPlayer1').pause();

// document.getElementById('playVidPlayer2').play();speechSynthesis
//   document.getElementById('playVidPlayer3').pause();
//   document.getElementById('playVidPlayer4').pause();
//   document.getElementById('playVidPlayer5').pause();
//   document.getElementById('playVidPlayer6').pause();
//   document.getElementById('playVidPlayer7').pause();
//   document.getElementById('playVidPlayer8').pause();
//   document.getElementById('playVidPlayer9').pause();
//   document.getElementById('playVidPlayer10').pause();
//   document.getElementById('playVidPlayer11').pause();
//   document.getElementById('playVidPlayer12').pause();
//   document.getElementById('playVidPlayer13').pause();
//   document.getElementById('playVidPlayer14').pause();
//   document.getElementById('playVidPlayer15').pause();
//   document.getElementById('playVidPlayer16').pause();
//   document.getElementById('playVidPlayer17').pause();
//   document.getElementById('playVidPlayer18').pause();
// }
