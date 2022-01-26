const gameName = {
  name: 'Dhaivy',
};

const leaderboardAPIAddress = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

fetch(leaderboardAPIAddress, {
  method: 'POST',
  body: JSON.stringify(gameName),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => {
    console.log('e:', response);
    return response.json();
  })
  .then((json) => console.log(json));
