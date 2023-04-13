let stopwatchDisplay = document.querySelector('.stopwatch-display');
let startBtn = document.querySelector('.stopwatch-start');
let stopBtn = document.querySelector('.stopwatch-stop');
let resetBtn = document.querySelector('.stopwatch-reset');
let timeStart, timeElapsed, interval;

function startTimer() {
  timeStart = Date.now() - timeElapsed;
  interval = setInterval(function() {
    timeElapsed = Date.now() - timeStart;
    stopwatchDisplay.textContent = formatTime(timeElapsed);
  }, 10);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  timeElapsed = 0;
  stopwatchDisplay.textContent = formatTime(timeElapsed);
}

function formatTime(timeElapsed) {
  let time = new Date(timeElapsed);
  let hours = time.getUTCHours().toString().padStart(2, '0');
  let minutes = time.getUTCMinutes().toString().padStart(2, '0');
  let seconds = time.getUTCSeconds().toString().padStart(2, '0');
  let milliseconds = time.getUTCMilliseconds().toString().padStart(3, '0');
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);