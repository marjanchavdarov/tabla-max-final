// Turn Timer: 30s per player
let turnTimer = null;
let secondsLeft = 30;

export function startTurnTimer(onExpire) {
  clearInterval(turnTimer);
  secondsLeft = 30;
  updateTimerDisplay(secondsLeft);

  turnTimer = setInterval(() => {
    secondsLeft--;
    updateTimerDisplay(secondsLeft);
    if (secondsLeft <= 0) {
      clearInterval(turnTimer);
      onExpire(); // e.g. auto move or pass turn
    }
  }, 1000);
}

function updateTimerDisplay(seconds) {
  const display = document.getElementById('turn-timer');
  if (display) display.textContent = '⏱ ' + seconds + 's';
}

export function stopTurnTimer() {
  clearInterval(turnTimer);
}