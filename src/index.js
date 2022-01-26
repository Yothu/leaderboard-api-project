import logo from './components/images/logo.svg';
import './components/style.css';
import {
  createLeaderboardListElement,
  cleanForms,
  appendElementToLeaderboard,
  inputsAreAcceptable,
} from './func-module.js';

import { getScoresFromAPI, setScoresToAPI } from './api-module.js';

const addScoreBtn = document.getElementById('add-score-button');
const refreshBtn = document.getElementById('refresh-button');
const header = document.getElementById('top-header');

const loadImage = (imageAddress, elementContainer) => {
  const myIcon = new Image();
  myIcon.src = imageAddress;
  elementContainer.appendChild(myIcon);
};

addScoreBtn.addEventListener('click', () => {
  const newName = document.getElementById('name-form').value;
  const newScore = document.getElementById('score-form').value;

  if (inputsAreAcceptable(newName, newScore)) {
    setScoresToAPI(newName, newScore);
    const scoreElement = createLeaderboardListElement(newName, newScore);
    appendElementToLeaderboard(scoreElement);
    cleanForms();
    const errorContainer = document.getElementById('error-container');
    errorContainer.classList.add('d-none');
  } else {
    const errorContainer = document.getElementById('error-container');
    errorContainer.classList.remove('d-none');
  }
});

refreshBtn.addEventListener('click', () => getScoresFromAPI());

loadImage(logo, header);