// Dice roll to decide who starts and checker color
export function startMatch() {
  let p1Roll, p2Roll;
  do {
    p1Roll = Math.floor(Math.random() * 6) + 1;
    p2Roll = Math.floor(Math.random() * 6) + 1;
    alert('Player 1 rolled: ' + p1Roll + '\nPlayer 2 rolled: ' + p2Roll);
  } while (p1Roll === p2Roll);

  const starter = p1Roll > p2Roll ? 1 : 2;
  alert('Player ' + starter + ' starts and chooses checker color!');
  return starter;
}