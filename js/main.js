  function display(playVidPlayer) {
    const [_ , idx] = playVidPlayer.split('-'); 
    hideAndStopAll(+idx)
  } 
  
  
  function hideAndStopAll(videoIdx){
  let ids = ['playVidPlayer1', 'playVidPlayer2', 'playVidPlayer3', 'playVidPlayer4', 'playVidPlayer5', 'playVidPlayer6', 'playVidPlayer7', 'playVidPlayer8', 'playVidPlayer9', 'playVidPlayer10', 'playVidPlayer11', 'playVidPlayer12', 'playVidPlayer13', 'playVidPlayer14', 'playVidPlayer15', 'playVidPlayer16', 'playVidPlayer17', 'playVidPlayer18', 'playVidPlayer0']

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

// changing visability on click

  // function loadpage (page_request, containerid)
  // {
  //   var loading = document.getElementsByClassName ( "videos" ) ;
  
  //   // when connecting to server
  //   if ( page_request.readyState == 1 )
  //       loading.style.visibility = "visible" ;
  
  //   // when loaded successfully
  //   if (page_request.readyState == 4 && (page_request.status==200 || window.location.href.indexOf("http")==-1))
  //   {
  //       document.getElementById(containerid).innerHTML=page_request.responseText ;
  //       loading.style.visibility = "hidden" ;
  //   }
  // }

  function visablility() {    document.getElementById("loading").style.visibility = "visible";
  }

  let vid = document.getElementById("myVideo");
vid.volume = 0.8;