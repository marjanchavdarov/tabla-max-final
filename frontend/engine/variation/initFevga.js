// Fevga Starting Positions
import { checkers } from '../checkers.js';

export function initFevga() {
  checkers.points = Array(24).fill(0);
  checkers.points[0] = 15;  // Player 1 starts at point 1 (index 0)
  checkers.points[12] = -15; // Player 2 starts at point 13 (index 12)
}