// // game modes ( control flow )
// // set up mode
// var gameMode = "set_up_mode";
// // create player mode
// var createPlayer = "create_player_mode";
// // betting mode
// var bettingMode = "betting_mode";
// // draw mode
// var drawMode = "draw_mode";
// // compare mode
// // end mode tally score
// // restart game

// var main = function (input) {
//   if (gameMode == "set_up_mode") {
//     noOfPlayersInput(input);
//     console.log(`control flow set up mode over`);
//     return myOutputValue;
//   }
//   if (gameMode == createPlayer) {
//     playerStats(noOfPlayers);
//     console.log(`control flow`, bettingMode);

//     return myOutputValue;
//   }
//   if (gameMode == "betting_mode") {
//     playerBets(input);
//     gameMode = "draw_mode";
//     return myOutputValue;
//   }
//   if (gameMode == "draw_mode") {
//     cardDraw(deck);
//     listCards(players);
//     // cardValues(dealer);

//     // console.log(cardValues(dealer));
//     return myOutputValue;
//   }
//   return myOutputValue;
// };

// // project black jack

// // 1: players

// // no of players input
// var noOfPlayers = 0;

// var noOfPlayersInput = function (input) {
//   if (input < 1 || isNaN(input)) {
//     console.log(`if input is not a valid number ${input}`);
//     myOutputValue = ` Please key in a valid number of players for this game `;
//   } else {
//     noOfPlayers = input;

//     console.log(`number of players for the game : ${noOfPlayers}`);
//     myOutputValue = `The number of players for this game is ${input}.<br><br><br> Press Submit to start the game!`;
//     gameMode = "create_player_mode";
//   }
//   return myOutputValue;
// };
// // player cards array
// var players = [];
// // object the players name, cash capital
// var playerStats = function (noOfPlayers) {
//   if (noOfPlayers != 0) {
//     playersCounter = 1;
//     console.log(`player stats creation start`);
//     while (playersCounter <= noOfPlayers) {
//       var playerNo = playersCounter;
//       var playerCreation = {
//         name: " Player " + playerNo,
//         credits: 100,
//         cardScore: 0,
//         hand: [],
//         betamount: [],
//       };
//       console.log(playerCreation);
//       players.push(playerCreation);
//       console.log(`player stats pushing into array`);
//       playersCounter = playersCounter + 1;
//       console.log(`player counter ${playersCounter}`);
//     }

//     myOutputValue =
//       " Welcome Players, You will have $100 as a starting capital ! ";
//   }
//   return (gameMode = "betting_mode");
// };

// // player score
// // no of players left after final cards calculation and cash capital

// // 2: cards deck
// // making of cards deck

// var makeDeck = function () {
//   // Initialise an empty deck array
//   var cardDeck = [];
//   // Initialise an array of the 4 suits in our deck. We will loop over this array.
//   var suits = ["hearts", "diamonds", "clubs", "spades"];

//   // Loop over the suits array
//   var suitIndex = 0;
//   while (suitIndex < suits.length) {
//     // Store the current suit in a variable
//     var currentSuit = suits[suitIndex];

//     // Loop from 1 to 13 to create all cards for a given suit
//     // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
//     // This is an example of a loop without an array.
//     var rankCounter = 1;
//     while (rankCounter <= 13) {
//       // By default, the card name is the same as rankCounter
//       var cardName = rankCounter;

//       // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
//       if (cardName == 1) {
//         cardName = "ace";
//       } else if (cardName == 11) {
//         cardName = "jack";
//       } else if (cardName == 12) {
//         cardName = "queen";
//       } else if (cardName == 13) {
//         cardName = "king";
//       }

//       // Create a new card with the current name, suit, and rank
//       var card = {
//         name: cardName,
//         suit: currentSuit,
//         rank: rankCounter,
//       };

//       // Add the new card to the deck
//       cardDeck.push(card);

//       // Increment rankCounter to iterate over the next rank
//       rankCounter += 1;
//     }

//     // Increment the suit index to iterate over the next suit
//     suitIndex += 1;
//   }

//   // Return the completed card deck
//   return cardDeck;
// };
// var deck = makeDeck();

// var deckValues = function (cardDeck) {
//   for (var i = 0; i < cardDeck.length.name; i++) {
//     if (cardDeck.name == `ace`) {
//       cardDeck.rank = 11;
//     }
//     if (cardDeck.name == "king") {
//       cardDeck.rank = 10;
//     }
//     return newdeck;
//   }
// };
// var newdeck = deckValues(deck);
// // shuffling cards function
// // Get a random index ranging from 0 (inclusive) to max (exclusive).
// var getRandomIndex = function (max) {
//   return Math.floor(Math.random() * max);
// };

// // Shuffle the elements in the cardDeck array
// var shuffleCards = function (deck) {
//   // Loop over the card deck array once
//   var currentIndex = 0;
//   while (currentIndex < deck.length) {
//     // Select a random index in the deck
//     var randomIndex = getRandomIndex(deck.length);
//     // Select the card that corresponds to randomIndex
//     var randomCard = deck[randomIndex];
//     // Select the card that corresponds to currentIndex
//     var currentCard = deck[currentIndex];
//     // Swap positions of randomCard and currentCard in the deck
//     deck[currentIndex] = randomCard;
//     deck[randomIndex] = currentCard;
//     // Increment currentIndex
//     currentIndex = currentIndex + 1;
//   }
//   // Return the shuffled deck
//   return deck;
// };
// var shuffledDeck = shuffleCards(deck);

// // 3: game logic
// // betting system
// var playerBets = function (input) {
//   if (gameMode == "betting_mode") {
//     var bettingCounter = 0;
//     var allPlayerBets = [];
//     while (bettingCounter <= noOfPlayers) {
//       // var players[bettingCounter] = players[bettingCounter];
//       // var playersbettingCounterCredits = players[bettingCounter].credits;
//       // for (let i = 0; i <= players.length; i++) {
//       if (input < 1 || isNaN(input)) {
//         myOutputValue = `${players[bettingCounter].name} Pleast input a valid betting amount ! your current credits is ${players[bettingCounter].credits}`;
//         console.log(` if it clears`);
//         console.log(players[bettingCounter.credits], `player credits`);
//       } else if (input > players[bettingCounter].Credits) {
//         myOutputValue = `You have input an amount more than you have ! LOANSHARKS ARE COMING ! Please reconsider. You have ${players[bettingCounter].Credits} left.`;
//         console.log(players[bettingCounter.credits], `player credits`);
//       } else {
//         myOutputValue = `${players[bettingCounter].name} you have staked ${input}`;
//         // players[bettingCounter].betamount.push(input);
//         allPlayerBets.push(input);
//         console.log(` if it clears 3`);
//         console.log(players[bettingCounter.credits], `player credits`);
//       }

//       bettingCounter = bettingCounter + 1;
//       console.log(`betting counter `, bettingCounter);
//     }
//     // }
//     gameMode = "draw_mode";
//   }
//   return myOutputValue;
// };
// // make a computer(dealer) object
// var dealer = {
//   Score: [],
//   Hand: [],
// };
// // draw first card for each player and computer( dealer )

// var cardDraw = function (shuffledDeck) {
//   //first card pop for the dealer
//   firstCard = shuffledDeck.pop();
//   //second card pop for the dealer
//   secondCard = shuffledDeck.pop();
//   console.log(firstCard, secondCard, `dealer draw`);
//   // pushing the cards into dealer hand
//   dealer.Hand.push(firstCard);
//   dealer.Hand.push(secondCard);
//   // push score of the dealer
//   dealer.Score.push(dealer.Hand[0].rank + dealer.Hand[1].rank);
//   console.log(
//     `dealer draw cards: ${firstCard.name}, ${secondCard.name}, and the total dealer score : ${dealer.Score}`
//   );
//   drawCounter = 0;
//   while (drawCounter < noOfPlayers) {
//     var currentPlayer = players[drawCounter];
//     var currentPlayerHand = currentPlayer.hand;
//     // first card pop for the player
//     firstCard = shuffledDeck.pop();
//     // second card pop for the player
//     secondCard = shuffledDeck.pop();
//     // push the cards into array
//     currentPlayerHand.push(firstCard);
//     currentPlayerHand.push(secondCard);
//     console.log(`pushing the players card into array`);
//     players[drawCounter].cardScore =
//       currentPlayerHand[0].rank + currentPlayerHand[1].rank;
//     drawCounter = drawCounter + 1;
//     console.log(`player card draw counter ${drawCounter}`);
//   }
//   console.log(players);
//   myOutputValue = `The Dealer Hands out the cards <br> `;

//   return myOutputValue;
// };

// // list player and dealer cards
// var listCards = function (players) {
//   var listCounter = 0;
//   while (listCounter <= noOfPlayers) {
//     myOutputValue = `${players[listCounter].hand[0].name} of ${players[listCounter].hand[0].suit} and ${players[listCounter].hand[1].name} of ${players[listCounter].hand[1].suit}`;

//     listCounter = listCounter + 1;
//     console.log(`list players counter`, listCounter);
//   }

//   return myOutputValue;
// };
// // making Ace,King,Queen,Jack the correct values

// // draw additional cards for player and computer
// // compare score and calculate out for players and computer (hidden)
// // hit or skip for players (if player is below 14, forced to hit)
// // compare score after final hitting
// // if player > 21, player lose

// // if dealer > 21, dealer lose
// // if player blackjack, player win
// // if player == dealer, tie
// // if player > dealer , player win
// // if player < dealer, player lose
// // continue the game with scores calculated and no of players left
// // after every round, cards are added back into the deck

// 2 player game
dealer = 0;
player = 0;
//start game
currentGameMode = "input_mode";
//input player name
var playerName = function (input) {
  myOutputValue = "";
  if (input == "" || isNaN(input)) {
    myOutputValue = `Welcome player ! <br><br>Please key in your name `;
  }
  if (input != "") {
    player = input;
    currentGameMode = "draw_mode";
    console.log(currentGameMode);
    myOutputValue = `Welcome Player ${player}, Press submit to start the game`;
  }
  return myOutputValue;
};
// card deck
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

      var cardValue = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = "ace";
        cardValue = 11;
      } else if (cardName == 11) {
        cardName = "jack";
        cardValue = 10;
      } else if (cardName == 12) {
        cardName = "queen";
        cardValue = 10;
      } else if (cardName == 13) {
        cardName = "king";
        cardValue = 10;
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter,
        value: cardValue,
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
// shuffled deck
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};
var shuffleCards = function (deck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < deck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(deck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = deck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = deck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    deck[currentIndex] = randomCard;
    deck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return deck;
};

// card draw for computer and player
var playerHand = [];
var dealerHand = [];
var cardDraw = function (shuffledDeck) {
  // card 1 and 2 drawn
  dealerCard1 = shuffledDeck.pop();
  playerCard1 = shuffledDeck.pop();
  dealerCard2 = shuffledDeck.pop();
  playerCard2 = shuffledDeck.pop();

  //card 1 and 2 pushed into array

  dealerHand.push(dealerCard1, dealerCard2);
  playerHand.push(playerCard1, playerCard2);
  for (let i = 0; i < playerHand.length; i++) {
    if (playerHand[i].name == "ace") {
      playerAceCount++;
    }
    for (let i = 0; i < dealerHand.length; i++) {
      if (dealerHand[i].name == "ace") {
        dealerAceCount++;
      }
    }
    console.log(
      `dealer hand  card 1 ${dealerHand[0].name} , ${dealerHand[0].suit} `
    );
    console.log(
      `dealer hand  card 2 ${dealerHand[1].name} , ${dealerHand[1].suit} `
    );
    console.log(
      `player hand  card 1 ${playerHand[0].name} , ${playerHand[0].suit} `
    );
    console.log(
      `player hand  card 2 ${playerHand[1].name} , ${playerHand[1].suit} `
    );
    currentGameMode = "black_jack_check";
    myOutputValue = `Player ${player} card 1 : ${playerHand[0].name} of ${playerHand[0].suit} <br> Player ${player} card 2 : ${playerHand[1].name} of ${playerHand[1].suit}<br> `;
  }
  return myOutputValue;
};
// card value of picture cards
// var pictureCards = function (deck) {
//   cardCounter = 0;
//   while (cardCounter <= deck.length.name) {
//     if (isNaN(deck[cardCounter].name)) {
//       if (deck[cardCounter].name == "ace") {
//         deck[cardCounter].rank = 1 || 11;
//       }
//       if (deck[cardCounter].name == "jack") {
//         deck[cardCounter].rank = 10;
//       }
//       if (deck[cardCounter].name == "queen") {
//         deck[cardCounter].rank = 10;
//       }
//       if (deck[cardCounter].name == "king") {
//         deck[cardCounter].rank = 10;
//       }
//     }
//     cardCounter = cardCounter + 1;
//   }
//   return deck;
// };
// var playerHandValue = [];
// var dealerSum = [];
// var valueChange = function (values) {
//   if (
//     playerHand[0].name == `jack` ||
//     playerHand[0].name == `queen` ||
//     playerHand[0].name == `king`
//   ) {
//     playerHand[0].rank = 10;
//   }
//   if (
//     playerHand[1].name == `jack` ||
//     playerHand[1].name == `queen` ||
//     playerHand[1].name == `king`
//   ) {
//     playerHand[1].rank = 10;
//   }

//   if (
//     dealerHand[0].name == "jack" ||
//     dealerHand[0].name == "queen" ||
//     dealerHand[0].name == "king"
//   ) {
//     dealerHand[0].rank = 10;
//   }

//   if (
//     dealerHand[1].name == "jack" ||
//     dealerHand[1].name == "queen" ||
//     dealerHand[1].name == "king"
//   ) {
//     dealerHand[1].rank = 10;
//   }

//   return values;
// };

// black jack
var blackjack = function () {
  myOutputValue = "No one wins by blackjack!";
  if (
    (playerHand[0].name == "ace" && playerHand[1].name == "ace") ||
    (playerHand[0].name == "ace" && playerHand[1].name == "king") ||
    (playerHand[0].name == "ace" && playerHand[1].name == "queen") ||
    (playerHand[0].name == "ace" && playerHand[1].name == "jack") ||
    (playerHand[0].name == "ace" && playerHand[1].name == "10") ||
    (playerHand[1].name == "ace" && playerHand[0].name == "ace") ||
    (playerHand[1].name == "ace" && playerHand[0].name == "king") ||
    (playerHand[1].name == "ace" && playerHand[0].name == "queen") ||
    (playerHand[1].name == "ace" && playerHand[0].name == "jack") ||
    (playerHand[1].name == "ace" && playerHand[0].name == "10")
  ) {
    currentGameMode = "restart_game";
    return (myOutputValue = `BLACKJACK! <br><br> Player ${player} WINS! `);
  }
  if (
    (dealerHand[0].name == "ace" && dealerHand[1].name == "ace") ||
    (dealerHand[0].name == "ace" && dealerHand[1].name == "king") ||
    (dealerHand[0].name == "ace" && dealerHand[1].name == "queen") ||
    (dealerHand[0].name == "ace" && dealerHand[1].name == "jack") ||
    (dealerHand[0].name == "ace" && dealerHand[1].name == "10") ||
    (dealerHand[1].name == "ace" && dealerHand[0].name == "ace") ||
    (dealerHand[1].name == "ace" && dealerHand[0].name == "king") ||
    (dealerHand[1].name == "ace" && dealerHand[0].name == "queen") ||
    (dealerHand[1].name == "ace" && dealerHand[0].name == "jack") ||
    (dealerHand[1].name == "ace" && dealerHand[0].name == "10")
  ) {
    currentGameMode = "restart_game";
    return (myOutputValue = `BLACKJACK! <br><br> Dealer WINS! `);
  } else {
    currentGameMode = "1st_round";
  }

  return myOutputValue;
};
var playerSum = 0;
var playerAceCount = 0;
var playerScore = function () {
  for (let i = 0; i < playerHand.length; i++) {
    playerSum += playerHand[i].value;
  }

  myOutputValue = `Player ${player}, Your total score currently is ${playerSum}`;
  return myOutputValue;
};
var dealerSum = 0;
var dealerAceCount = 0;
var dealerSCore = function () {
  for (let i = 0; i < dealerHand.length; i++) {
    dealerSum += dealerHand[i].value;
  }
  console.log(`Dealer has ${dealerSum} points!`);

  return myOutputValue;
};
// reduce Ace function

var reducePlayerAce = function (playerSum, playerAceCount) {
  if (playerSum > 21 && playerAceCount > 0) {
    playerSum = playerSum - 10;
    playerAceCount = playerAceCount - 1;
  }
};
var reduceComputerAce = function (dealerSum, dealerAceCount) {
  if (dealerSum > 21 && dealerAceCount > 0) {
    dealerSum = dealerSum - 10;
    dealerAceCount = dealerAceCount - 1;
  }
};
// if total player score is less than 21 , able to hit or stay
var hit = function (input) {
  if (playerHand.length < 5) {
    if (input != "hit" && input != "stay") {
      return (myOutputValue = `Player ${player} please key in hit or stay! You currently have ${playerSum} points`);
    }

    if (playerSum <= 21 && input == "hit") {
      var drawncard = shuffledDeck.pop();
      playerHand.push(drawncard);
      playerSum = playerSum + drawncard.value;
      reducePlayerAce();
      console.log(`card value`, drawncard);
      return (myOutputValue = `${player} you have drawn ${drawncard.name} of ${drawncard.suit}<br><br> Your current points is ${playerSum}<br><br> Would you like to hit or stay?`);
    }

    if (playerSum <= 21 && input == "stay") {
      currentGameMode = "dealer_turn";
      console.log(currentGameMode);
      return (myOutputValue = `Player ${player}, you have total of ${playerSum} Let's wait for the dealer to draw!`);
    }
    if (playerSum > 21) {
      currentGameMode = "dealer_turn";
      console.log(currentGameMode);
      return (myOutputValue = `Player ${player}, you are unable to hit! You went over 21!<br><br> Let's wait for the dealer to draw!`);
    }
  } else if (playerHand.length == 5) {
    currentGameMode = "5_cards";
    if (playerSum > 21) {
      currentGameMode = "restart_game";
      return (myOutputValue = `YOU LOSE! You have 5 cards and exceed 21 points!`);
    }
    if (playerSum <= 21) {
      currentGameMode = "restart_game";
      return (myOutputValue = ` YOU WIN! You have 5 cards and below 21 points!`);
    }
  }
  // }
  // noOfCards++;
};

// dealer's turn to draw
var dealerhit = function () {
  if (
    (dealerSum < playerSum && dealerSum < 21) ||
    (dealerSum < 17 && dealerSum < 21)
  ) {
    var drawncard = shuffledDeck.pop();
    dealerHand.push(drawncard);
    dealerSum = dealerSum + drawncard.value;
    reduceComputerAce();
    myOutputValue = `Dealer has drawn ${drawncard.name} of ${drawncard.suit}`;
    return myOutputValue;
  } else {
    currentGameMode = "final_tally";
    myOutputValue = `Dealer Stays! Let's Tally the scores!`;
    return myOutputValue;
  }
};
var deck = makeDeck();
var shuffledDeck = shuffleCards(deck);
var myOutputValue = "";
var main = function (input) {
  // var newdeck = pictureCards(deck);

  if (currentGameMode == "input_mode") {
    console.log(`gameflow`, currentGameMode);
    playerName(input);

    return myOutputValue;
  }
  if (currentGameMode == "draw_mode") {
    console.log(`gameflow`, currentGameMode);
    var drawcard = cardDraw(shuffledDeck);
    return myOutputValue;
  }

  if (currentGameMode == "black_jack_check") {
    console.log(`gameflow`, currentGameMode);
    blackjack(drawcard);
    return myOutputValue;
  }
  if (currentGameMode == "1st_round") {
    playerScore();
    dealerSCore();
    currentGameMode = "hit_or_stay";
    return myOutputValue;
  }

  if (currentGameMode == "hit_or_stay") {
    console.log(`gameflow`, currentGameMode);
    // hit(input);
    return hit(input);
  }
  if (currentGameMode == "dealer_turn") {
    console.log(`gameflow`, currentGameMode);

    myOutputValue = dealerhit();
    return myOutputValue;
  }

  if (currentGameMode == "final_tally") {
    console.log(`gameflow`, currentGameMode);
    if (dealerSum <= 21 && playerSum <= 21) {
      if (dealerSum > playerSum) {
        currentGameMode = "restart_game";
        return (myOutputValue = `Dealer wins! Dealer has ${dealerSum} while ${player} has ${playerSum}`);
      } else if (dealerSum < playerSum) {
        return (myOutputValue = `${player} wins! Dealer has ${dealerSum} while ${player} has ${playerSum}`);
      }
    }
    if (dealerSum == playerSum) {
      currentGameMode = "restart_game";
      return (myOutputValue = ` Its a TIE! Dealer has ${dealerSum} while ${player} has ${playerSum}`);
    }
    if (dealerSum && playerSum > 21) {
      currentGameMode = "restart_game";
      return (myOutputValue = ` Both players busts! No winner for this round!`);
    }
    if (dealerSum > 21 && playerSum <= 21) {
      currentGameMode = "restart_game";
      return (myOutputValue = `${player} wins! Dealer has ${dealerSum} while ${player} has ${playerSum}`);
    }
    if (dealerSum <= 21 && playerSum > 21) {
      currentGameMode = "restart_game";
      return (myOutputValue = `$Dealer wins! Dealer has ${dealerSum} while ${player} has ${playerSum}`);
    }
  }

  if (currentGameMode == "restart_game") {
    currentGameMode = "draw_mode";
    playerSum = 0;
    dealerSum = 0;
    playerHand = [];
    dealerHand = [];
    playerAceCount = 0;
    dealerAceCount = 0;
    deck = makeDeck();
    shuffledDeck = shuffleCards(deck);
    myOutputValue = `The round has ended! Press submit to play again!`;
    return myOutputValue;
  }

  return myOutputValue;
};
