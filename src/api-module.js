import { createLeaderboardFromAPIResult } from './func-module.js';

const GAME_CODE = '2BHxqzhUcOfUgrTQWNyo';
const GAME_ADDRESS = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${GAME_CODE}/scores/`;

const getScoresFromAPI = async () => {
  const RESPONSE = await fetch(GAME_ADDRESS);

  const RESPONSE_OBJECT = await RESPONSE.json();

  createLeaderboardFromAPIResult(RESPONSE_OBJECT.result);
};

const setScoresToAPI = async (newName, newScore) => {
  await fetch(GAME_ADDRESS, {
    method: 'POST',
    body: JSON.stringify({
      score: newScore,
      user: newName,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export { getScoresFromAPI, setScoresToAPI };
