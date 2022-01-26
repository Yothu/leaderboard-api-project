import './style.css';
import {
  createLeaderboardListElement,
  cleanForms,
  appendElementToLeaderboard,
} from './func-module.js';

import { getScoresFromAPI, setScoresToAPI } from './api-module.js';

const addScoreBtn = document.getElementById('add-score-button');
const refreshBtn = document.getElementById('refresh-button');

addScoreBtn.addEventListener('click', () => {
  const newName = document.getElementById('name-form').value;
  const newScore = document.getElementById('score-form').value;

  setScoresToAPI(newName, newScore);

  const scoreElement = createLeaderboardListElement(newName, newScore);

  appendElementToLeaderboard(scoreElement);
  cleanForms();
});

refreshBtn.addEventListener('click', () => getScoresFromAPI());
