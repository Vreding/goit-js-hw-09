const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function startColorChanging() {
  startBtn.disabled = true;
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopColorChanging() {
  startBtn.disabled = false;
  clearInterval(intervalId);
}

startBtn.addEventListener('click', startColorChanging);
stopBtn.addEventListener('click', stopColorChanging);
