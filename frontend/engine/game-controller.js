// game-controller.js
import { initPortes } from './variation/initPortes.js';
import { initFevga } from './variation/initFevga.js';
import { initPlakoto } from './variation/initPlakoto.js';

let variations = ['Portes', 'Fevga', 'Plakoto'];
let variationIndex = 0;
let currentVariation = variations[variationIndex];
let score = { 1: 0, 2: 0 };
let gameOver = false;

export function initVariation() {
  if (currentVariation === 'Portes') initPortes();
  if (currentVariation === 'Fevga') initFevga();
  if (currentVariation === 'Plakoto') initPlakoto();
}

export function awardPoints(player, points) {
  if (gameOver) return;

  score[player] += points;
  if (score[player] >= 6) {
    gameOver = true;
    alert('Player ' + player + ' wins the match with ' + score[player] + ' points!');
    return;
  }
}
