const createLeaderboardListElement = (newName, newScore) => {
  const scoreContainer = document.createElement('li');
  scoreContainer.classList.add('ps-3', 'py-1');

  const scoreText = document.createElement('p');
  scoreText.classList.add('name', 'm-0', 'font-inter', 'font-20px');

  scoreText.innerHTML = `<b>${newName}</b>: ${newScore}`;

  scoreContainer.appendChild(scoreText);

  return scoreContainer;
};

const appendElementToLeaderboard = (elem) => {
  const leaderboard = document.querySelector('.score-list');
  leaderboard.appendChild(elem);
};

const deleteAllScoresFromLeaderboard = () => {
  const leaderboard = document.querySelector('.score-list');
  for (let i = leaderboard.childElementCount - 1; i >= 0; i -= 1) {
    leaderboard.children[i].remove();
  }
};

const createLeaderboardFromAPIResult = (scoresArray) => {
  deleteAllScoresFromLeaderboard();
  for (let i = 0; i < scoresArray.length; i += 1) {
    const scoreElement = createLeaderboardListElement(scoresArray[i].user, scoresArray[i].score);

    appendElementToLeaderboard(scoreElement);
  }
};

const inputsAreAcceptable = (newName, newScore) => {
  if (/^[a-zA-Z]/.test(newName) && /^\d+$/.test(newScore)) {
    return true;
  }
  return false;
};

const cleanForms = () => {
  document.getElementById('name-form').value = '';
  document.getElementById('score-form').value = '';
};

export {
  cleanForms,
  appendElementToLeaderboard,
  createLeaderboardListElement,
  createLeaderboardFromAPIResult,
  inputsAreAcceptable,
};
