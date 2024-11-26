

function display(playVidPlayer){
  hideAndStopAll()
  var vid = document.getElementById(playVidPlayer);
  vid.style.display = 'block';
  // vid.play();
document.getElementById('playVidPlayer1').play();
} 
var ids= ['playVidPlayer1','playVidPlayer2','playVidPlayer3','playVidPlayer4','playVidPlayer5','playVidPlayer6']

function hideAndStopAll(){

    for(i=0;i<ids.length;i++){
        var video = document.getElementById(ids[i]);
        video.pause();
        video.style.display='none'
        console.log('oneWorks')
    }
}



// function display(playVidPlayer){
//   hideAndStopAll()
//   var vid = document.getElementById(playVidPlayer);
//   vid.style.display = 'block';
//   // vid.play();
// document.getElementById('playVidPlayer2').play();
// } 
// var ids= ['playVidPlayer1','playVidPlayer2','playVidPlayer3','playVidPlayer4','playVidPlayer5','playVidPlayer6']

// function hideAndStopAll(){

//     for(i=0;i<ids.length;i++){
//         var video = document.getElementById(ids[i]);
//         video.pause();
//         video.style.display='none'
//         console.log('twoWorks')
//     }
// }

