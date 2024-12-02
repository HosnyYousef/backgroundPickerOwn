  function display(playVidPlayer) {
    const [_ , idx] = playVidPlayer.split('-'); 
    hideAndStopAll(+idx)
  } 
  
  
  function hideAndStopAll(videoIdx){
  let ids = ['playVidPlayer1', 'playVidPlayer2', 'playVidPlayer3', 'playVidPlayer4', 'playVidPlayer5', 'playVidPlayer6', 'playVidPlayer7', 'playVidPlayer8', 'playVidPlayer9', 'playVidPlayer10', 'playVidPlayer11', 'playVidPlayer12', 'playVidPlayer13', 'playVidPlayer14', 'playVidPlayer15', 'playVidPlayer16', 'playVidPlayer17', 'playVidPlayer18']

    for (let i = 0; i < ids.length; i++) {
        let video = document.getElementById(ids[i]);
        if (i === (videoIdx - 1)) {
            video.style.display='block'
            video.play()
        }
        else {
            video.pause();
          video.style.display='none'
            video.currentTime =0; 
        }
    }
  }