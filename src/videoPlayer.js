const video = document.getElementById("video");
const button = document.getElementById("buttonVP");
const icon = document.getElementById("icon-videoPlayer");
const timeDisplay = document.getElementById("time");
const progressBar = document.getElementById("progress-bar"); // Referencia a la nueva barra

// Manejo de Reproducir/Pausar
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
});

// Formatear el tiempo (0:00)
function formatTime(timeInSeconds) {
    if (isNaN(timeInSeconds)) return "0:00"; 
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}

// Cargar duración inicial apenas el video cargue los metadatos
video.addEventListener("loadedmetadata", () => {
    const duration = formatTime(video.duration);
    timeDisplay.textContent = `0:00 / ${duration}`;
});

// Actualizar reloj y barra mientras el video se reproduce
video.addEventListener("timeupdate", () => {
    // Texto
    const current = formatTime(video.currentTime);
    const duration = formatTime(video.duration || 0);
    timeDisplay.textContent = `${current} / ${duration}`;

    // Barra de progreso (calcular porcentaje)
    if (video.duration) {
        const progress = (video.currentTime / video.duration) * 100;
        progressBar.value = progress;
        
        // Pinta la barra de la izquierda del botón de color aqua y la de la derecha transparente
        progressBar.style.background = `linear-gradient(to right, var(--aquaLigth) ${progress}%, rgba(255, 255, 255, 0.25) ${progress}%)`;    }
});

// Adelantar/Atrasar el video al arrastrar la barra
progressBar.addEventListener("input", (e) => {
    const seekTime = (e.target.value / 100) * video.duration;
    video.currentTime = seekTime;
});