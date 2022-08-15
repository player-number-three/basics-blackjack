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
    myOutputValue = `Welcome Player ${player}, Press 🍁 to start the game`;
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

  return myOutputValue;
};

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
    return (myOutputValue = `BLACKJACK! <br><br> Player ${player} WINS! <br><br> Player ${player} card 1 : ${playerHand[0].name} of ${playerHand[0].suit} <br><br> Player ${player} card 2 : ${playerHand[1].name} of ${playerHand[1].suit}`);
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
    return (myOutputValue = `BLACKJACK! <br><br> Dealer WINS! <br><br> Dealer card 1 : ${dealerHand[0].name} of ${dealerHand[0].suit} <br><br> Dealer card 2 : ${dealerHand[1].name} of ${dealerHand[1].suit}`);
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

// if total player score is less than 21 , able to hit or stay
var hit = function (input) {
  if (playerHand.length < 5) {
    if (input != "hit" && input != "stay") {
      return (myOutputValue = `Player ${player} please key in hit or stay! You currently have ${playerSum} points`);
    }

    if (playerSum <= 21 && input == "hit") {
      var drawncard = shuffledDeck.pop();
      if (drawncard.name == "ace") {
        playerAceCount + 1;
      }
      playerHand.push(drawncard);

      newPlayerSum = playerSum + drawncard.value;
      while (newPlayerSum > 21 && playerAceCount > 0) {
        newPlayerSum -= 10;
        playerAceCount -= 1;
      }
      playerSum = newPlayerSum;
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
      return (myOutputValue = `Player ${player}, You went over 21!<br><br> Let's wait for the dealer to draw!`);
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
    if (drawncard.name == "ace") {
      dealerAceCount + 1;
    }
    dealerHand.push(drawncard);
    console.log(`dealer draws`, drawncard.name + drawncard.suit);
    newdealerSum = dealerSum + drawncard.value;
    while (newdealerSum > 21 && dealerAceCount > 0) {
      newdealerSum -= 10;
      dealerAceCount -= 1;
    }
    dealerSum = newdealerSum;
    myOutputValue = `Dealer has drawn ${drawncard.name} of ${drawncard.suit} Dealer currently has ${dealerSum}`;
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
    if (dealerSum > 21 && playerSum > 21) {
      currentGameMode = "restart_game";
      return (myOutputValue = ` Both players busts! No winner for this round!`);
    }
    if (dealerSum > 21 && playerSum <= 21) {
      currentGameMode = "restart_game";
      return (myOutputValue = `${player} wins! Dealer has ${dealerSum} while ${player} has ${playerSum}`);
    }
    if (dealerSum <= 21 && playerSum > 21) {
      currentGameMode = "restart_game";
      return (myOutputValue = `Dealer wins! Dealer has ${dealerSum} while ${player} has ${playerSum}`);
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
    myOutputValue = `The round has ended! Press 🍁 to play again!`;
    return myOutputValue;
  }

  return myOutputValue;
};
