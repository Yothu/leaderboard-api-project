const createLeaderboardListElement = (newName, newScore) => {
  const scoreContainer = document.createElement('li');
  scoreContainer.classList.add('ps-3', 'py-1');

  const scoreText = document.createElement('p');
  scoreText.classList.add('name', 'm-0');

  const text = document.createTextNode(`${newName}: ${newScore}`);
  scoreText.appendChild(text);

  scoreContainer.appendChild(scoreText);

  return scoreContainer;
}

const appendElementToLeaderboard = (elem) => {
  const leaderboard = document.querySelector('.score-list');
  leaderboard.appendChild(elem);
}

const cleanForms = () => {
  document.getElementById('name-form').value = '';
  document.getElementById('score-form').value = '';  
}

export { cleanForms, appendElementToLeaderboard, createLeaderboardListElement };
