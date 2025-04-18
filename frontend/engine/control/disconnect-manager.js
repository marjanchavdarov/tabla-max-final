// Disconnection logic: 90s countdown
let disconnectTimer = null;
let disconnectSeconds = 90;

export function startDisconnectTimer(onTimeout) {
  clearInterval(disconnectTimer);
  disconnectSeconds = 90;
  updateDisconnectDisplay(disconnectSeconds);

  disconnectTimer = setInterval(() => {
    disconnectSeconds--;
    updateDisconnectDisplay(disconnectSeconds);
    if (disconnectSeconds <= 0) {
      clearInterval(disconnectTimer);
      onTimeout();
    }
  }, 1000);
}

function updateDisconnectDisplay(seconds) {
  const el = document.getElementById('disconnect-timer');
  if (el) el.textContent = 'Reconnect in: ' + seconds + 's';
}

export function stopDisconnectTimer() {
  clearInterval(disconnectTimer);
}