var deck = [
// spades
  {card: ["🂡"], score: 14 },
  {card: ["🂮"], score: 13 },
  {card: ["🂭"], score: 12 },
  {card: ["🂫"], score: 11 },
  {card: ["🂪"], score: 10 },
  {card: ["🂩"], score: 9 },
  {card: ["🂨"], score: 8 },
  {card: ["🂧"], score: 7 },
  {card: ["🂦"], score: 6 },
  {card: ["🂥"], score: 5 },
  {card: ["🂤"], score: 4 },
  {card: ["🂣"], score: 3 },
  {card: ["🂢"], score: 2 },
//hearts//
  {card: ["🂡"], score: 14 },
  {card: ["🂾"], score: 13 },
  {card: ["🂽"], score: 12 },
  {card: ["🂻"], score: 11 },
  {card: ["🂺"], score: 10 },
  {card: ["🂹"], score: 9 },
  {card: ["🂸"], score: 8 },
  {card: ["🂷"], score: 7 },
  {card: ["🂶"], score: 6 },
  {card: ["🂵"], score: 5 },
  {card: ["🂴"], score: 4 },
  {card: ["🂳"], score: 3 },
  {card: ["🂲"], score: 2 },
//clubs
  {card: ["🃑"], score: 14 },
  {card: ["🃞"], score: 13 },
  {card: ["🃝"], score: 12 },
  {card: ["🃛"], score: 11 },
  {card: ["🃚"], score: 10 },
  {card: ["🃙"], score: 9 },
  {card: ["🃘"], score: 8 },
  {card: ["🃗"], score: 7 },
  {card: ["🃖"], score: 6 },
  {card: ["🃕"], score: 5 },
  {card: ["🃔"], score: 4 },
  {card: ["🃓"], score: 3 },
  {card: ["🃒"], score: 2 },
//diamonds
  {card: ["🃁"], score: 14 },
  {card: ["🃎"], score: 13 },
  {card: ["🃍"], score: 12 },
  {card: ["🃋"], score: 11 },
  {card: ["🃊"], score: 10 },
  {card: ["🃉"], score: 9 },
  {card: ["🃈"], score: 8 },
  {card: ["🃇"], score: 7 },
  {card: ["🃆"], score: 6 },
  {card: ["🃅"], score: 5 },
  {card: ["🃄"], score: 4 },
  {card: ["🃃"], score: 3 },
  {card: ["🃂"], score: 2 },
];


var deckCopy = deck.slice();
var player1;
var player2;
var winner = [];

function Player(deck) {
  this.name = prompt("What is your name?");
  this.deck = deck;
  this.active = [];
}

//input: nothing, process: shuffle deck, out: shuffled deck
function shuffle() {
  //create a copy of the deck so that we can access it later if needed.
  var currentIndex = deckCopy.length;
  var tempValue;
  var randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    tempValue = deckCopy[currentIndex];
    deckCopy[currentIndex] = deckCopy[randomIndex];
    deckCopy[randomIndex] = tempValue;
   }

    return deckCopy;
}


//input: shuffled deck, process: split deck in two, out: array of two decks
function createPlayer(shuffledDeck) {
  var deck1 = shuffledDeck.splice(0, 26);
  var deck2 = shuffledDeck;
  player1 = new Player(deck1);
  player2 = new Player(deck2);
}



//input: array of two decks, process: pull first card off each, out: two individual cards for each player
function drawCards(player, num) {
  var card = player.deck.splice(0, num);
  if (player.deck.length === 0) {
    alert(player.name + " YOU LOSE!!");
  } else {
    for (var i = 0; i < card.length; i++) {
        player.active.push(card[i]);
    }
  }
}

//input: two cards, process: compare the score of two cards, output: give the winner both of the cards
function compareCards (player1, player2) {
  var player1Score = player1.active[player1.active.length - 1].score;
  var player2Score = player2.active[player2.active.length - 1].score;

  winnerCards(player1);
  winnerCards(player2);
  //conidtionals for comparing the score of each card to see who's score is greater.
  if (player1Score > player2Score) {
    for (var i = 0; i < winner.length; i++) {
      player1.deck.push(winner[i]);
    }
    winner = [];
  } else if (player1Score === player2Score) {
    //calling the function miniGame below if there is a tie in scores.
    drawCards(player1, 4);
    drawCards(player2, 4);
    compareCards(player1, player2);
    console.log("tie");
  } else {
    //pushing the cards to the second players deck if they win
    for (var j = 0; j < winner.length; j++) {
      player2.deck.push(winner[j]);
    }
    winner = [];
  }
}

//input: players active cards, process: push all cards into winner array, out: array of all active cards
function winnerCards(player) {
  var active = player.active;
  while (active.length > 0) {
    var playerCards = active.shift();
    winner.push(playerCards);
  }
}



