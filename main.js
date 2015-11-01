function newDeck(){

  var ranks = [
    {card:"a"},
    {card:"2"},
    {card:"3"},
    {card:"4"},
    {card:"5"},
    {card:"6"},
    {card:"7"},
    {card:"8"},
    {card:"9"},
    {card:"10"},
    {card:"j"},
    {card:"q"},
    {card:"k"}
  ];

  var suits = [ "d", "c", "s", "h"];

  var deck = [];


  //creates 52 card deck with suits
  for (var i = 0; i < ranks.length; i++) {
    for (var j = 0; j < suits.length; j++) {
      deck.push({
        card: ranks[i].card,
        suit: suits[j]
      });
    }
  }
  return deck;
}

var player1;
var player2;
var winner = [];

function Player(deck) {
  // this.name = prompt("What is your name?");
  this.deck = deck;
  this.active = [];
}

//input: nothing, process: shuffle deck, out: shuffled deck
function shuffle(deck){
  var output = [];
  var workingArray = deck.slice(0);
  var current = workingArray.length;

  while (current) {
    var random = Math.floor(Math.random() * current);
    output.push(workingArray.splice(random, 1)[0]);
    current --;
  }
  return output;
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
  var player1Score = player1.active[player1.active.length - 1].card;
  var player2Score = player2.active[player2.active.length - 1].card;

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



