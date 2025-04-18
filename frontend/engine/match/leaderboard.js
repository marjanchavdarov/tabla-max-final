// Track wins in localStorage leaderboard
export function updateLeaderboard(winner) {
  const lb = JSON.parse(localStorage.getItem('tablaLeaderboard') || '{}');
  lb['Player ' + winner] = (lb['Player ' + winner] || 0) + 1;
  localStorage.setItem('tablaLeaderboard', JSON.stringify(lb));
  alert('Leaderboard updated: Player ' + winner + ' now has ' + lb['Player ' + winner] + ' total wins');
}