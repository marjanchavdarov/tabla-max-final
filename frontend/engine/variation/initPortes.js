// Portes Starting Positions
import { checkers } from '../checkers.js';

export function initPortes() {
  checkers.points = [
    2, 0, 0, 0, 0, -5,  0, -3, 0, 0, 0, 5,
    -5, 0, 0, 0, 3, 0,  5, 0, 0, 0, 0, -2
  ];
}