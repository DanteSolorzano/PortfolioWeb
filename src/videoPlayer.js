const video = document.getElementById("video");
const button = document.getElementById("buttonVP");
const icon = document.getElementById("icon-videoPlayer");

button.addEventListener("click", function () {
    if (video.paused) {
      icon.src = "./src/media/pause.png";
      icon.classList.remove("icon-play");
      icon.classList.add("icon-pause");
      video.play();
    } else {
      icon.src = "./src/media/play.png";
      icon.classList.remove("icon-pause");
      icon.classList.add("icon-play");
      video.pause();
    }

    function formatTime(timeInSeconds) {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60)
          .toString()
          .padStart(2, '0');
        return `${minutes}:${seconds}`;
      }
      
      setInterval(() => {
        const current = formatTime(video.currentTime);
        const duration = formatTime(video.duration);
        document.getElementById("time").textContent = `${current} / ${duration}`;
      }, 100);
      
  });
    
