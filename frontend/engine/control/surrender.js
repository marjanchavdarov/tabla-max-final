// Surrender system: offer + accept logic
import { awardPoints } from '../match/match-controller.js';

let surrenderOffered = false;

export function offerSurrender(fromPlayer, toPlayer) {
  surrenderOffered = true;
  const accepted = confirm('Player ' + fromPlayer + ' offers surrender. Accept?');

  if (accepted) {
    const pts = prompt('Accept for 1 or 2 points?', '1');
    const award = Math.min(Math.max(parseInt(pts), 1), 2);
    awardPoints(toPlayer, award);
    alert('Surrender accepted. Player ' + toPlayer + ' awarded ' + award + ' points.');
  } else {
    alert('Surrender denied.');
  }

  surrenderOffered = false;
}