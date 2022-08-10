var main = function (input) {
  noOfPlayersInput(input);
  playerStats(noOfPlayers);

  return myOutputValue;
};

// project black jack

// 1: players

// no of players input
var noOfPlayers = 0;
var players = [];
var noOfPlayersInput = function (input) {
  if (input == 0 || input == isNaN(input)) {
    console.log(`if input is not a valid number ${input}`);
    myOutputValue = ` Please key in a valid number of players for this game `;
  } else {
    noOfPlayers = input;
    console.log(`number of players for the game : ${noOfPlayers}`);
    myOutputValue = `The number of players for this game is ${input}.`;
  }
  return myOutputValue;
};

// object the players name, cash capital
var playerStats = function (noOfPlayers) {
  if (noOfPlayers != 0) {
    playersCounter = 1;
    console.log(`player stats creation start`);
    while (playersCounter <= noOfPlayers) {
      var playerNo = playersCounter;
      var playerCreation = {
        name: "Player" + playerNo,
        credits: 100,
        cardScore: "",
      };
      console.log(playerCreation);
      players.push(playerCreation);
      console.log(`player stats pushing into array`);
      playersCounter = playersCounter + 1;
      console.log(`player counter ${playersCounter}`);
    }

    myOutputValue =
      " Welcome Players, You will have $100 as a starting capital ! ";
  }
};
// player cards array

// player score
// no of players left after final cards calculation and cash capital

// 2: cards deck
// making of cards deck and shuffling
// after every round, cards are added back into the deck

// 3: game logic
// draw first card for each player and computer( dealer )
// draw additional cards for player and computer
// compare score and calculate out for players and computer (hidden)
// hit or skip for players (if player is below 14, forced to hit)
// compare score after final hitting
// if player > 21, player lose
// if dealer > 21, dealer lose
// if player blackjack, player win
// if player == dealer, tie
// if player > dealer , player win
// if player < dealer, player lose
// continue the game with scores calculated and no of players left
