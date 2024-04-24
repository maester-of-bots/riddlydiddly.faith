function startMedia() {
    const videoPlayer = document.getElementById('background-video');
    const audioPlayer = document.getElementById('background-audio');
    const playButton = document.getElementById('playButton');

    // Play both video and audio
    videoPlayer.play();
    audioPlayer.play();

    // Remove the button after playing
    playButton.style.display = 'none';
}

let seconds = 0;
const counterElement = document.getElementById('seconds');

function incrementSeconds() {
    seconds += 1;
    counterElement.textContent = seconds;
}

setInterval(incrementSeconds, 1000);
