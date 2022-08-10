var main = function (input) {
  noOfPlayersInput(input);
  playerStats(noOfPlayers);

  return myOutputValue;
};

// project black jack

// 1: players

// no of players input
var noOfPlayers = 0;

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
// player cards array
var players = [];
// object the players name, cash capital
var playerStats = function (noOfPlayers) {
  if (noOfPlayers != 0) {
    playersCounter = 1;
    console.log(`player stats creation start`);
    while (playersCounter <= noOfPlayers) {
      var playerNo = playersCounter;
      var playerCreation = {
        name: " Player " + playerNo,
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

// player score
// no of players left after final cards calculation and cash capital

// 2: cards deck
// making of cards deck

var makeDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ["hearts", "diamonds", "clubs", "spades"];

  // Loop over the suits array
  var suitIndex = 0;
  while (suitIndex < suits.length) {
    // Store the current suit in a variable
    var currentSuit = suits[suitIndex];

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    var rankCounter = 1;
    while (rankCounter <= 13) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = "ace";
      } else if (cardName == 11) {
        cardName = "jack";
      } else if (cardName == 12) {
        cardName = "queen";
      } else if (cardName == 13) {
        cardName = "king";
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter,
      };

      // Add the new card to the deck
      cardDeck.push(card);

      // Increment rankCounter to iterate over the next rank
      rankCounter += 1;
    }

    // Increment the suit index to iterate over the next suit
    suitIndex += 1;
  }

  // Return the completed card deck
  return cardDeck;
};
var deck = makeDeck();
// shuffling cards function
// Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
};
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
