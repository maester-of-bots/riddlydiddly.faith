let seconds = 0;
const counterElement = document.getElementById('seconds');

function incrementSeconds() {
    seconds += 1;
    counterElement.textContent = seconds;
}

setInterval(incrementSeconds, 1000);
