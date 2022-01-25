import './style.css';
import { 
  createLeaderboardListElement,
  cleanForms,
  appendElementToLeaderboard,
 } from './func-module';

const addScoreBtn = document.getElementById('add-score-button');

addScoreBtn.addEventListener('click', () => {
  const newName = document.getElementById('name-form').value;
  const newScore = document.getElementById('score-form').value;

  const scoreElement = createLeaderboardListElement(newName, newScore);

  appendElementToLeaderboard(scoreElement);
  cleanForms();
});
