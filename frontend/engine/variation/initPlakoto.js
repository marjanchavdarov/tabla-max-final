// Plakoto Starting Positions
import { checkers } from '../checkers.js';

export function initPlakoto() {
  checkers.points = Array(24).fill(0);
  checkers.points[0] = 1;   // Player 1 starts stacked at point 1
  checkers.points[0] += 14; // Total 15 checkers
  checkers.points[23] = -1; // Player 2 stacked at point 24
  checkers.points[23] -= 14;
}