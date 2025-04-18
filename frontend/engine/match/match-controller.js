// Handles variation loop and total score
import { initPortes } from '../variation/initPortes.js';
import { initFevga } from '../variation/initFevga.js';
import { initPlakoto } from '../variation/initPlakoto.js';
import { updateLeaderboard } from './leaderboard.js';

const variations = ['Portes', 'Fevga', 'Plakoto'];
let variationIndex = 0;
export let currentVariation = variations[variationIndex];
export let score = { 1: 0, 2: 0 };
let matchOver = false;

export function startNextVariation() {
  if (matchOver) return;

  currentVariation = variations[variationIndex % variations.length];
  variationIndex++;

  if (currentVariation === 'Portes') initPortes();
  if (currentVariation === 'Fevga') initFevga();
  if (currentVariation === 'Plakoto') initPlakoto();

  alert('Starting variation: ' + currentVariation);
}

export function awardPoints(player, points) {
  if (matchOver) return;
  score[player] += points;

  if (score[player] >= 6) {
    matchOver = true;
    alert('🏆 Player ' + player + ' wins the match with ' + score[player] + ' points!');
    updateLeaderboard(player);
  }
}