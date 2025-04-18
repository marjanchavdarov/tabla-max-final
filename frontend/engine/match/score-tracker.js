// Returns readable score
import { score } from './match-controller.js';

export function getScore() {
  return 'Score: Player 1 - ' + score[1] + ' | Player 2 - ' + score[2];
}