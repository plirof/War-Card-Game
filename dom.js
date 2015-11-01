$(document).ready(function() {
  $("#draw").hide();
  $("#create").on("click", function () {
    var deck = newDeck();
    var shuffled = shuffle(deck);
    console.log(shuffled);
    createPlayer(shuffled);
    $("#player1").find("h1").html(player1.name);
    $("#player2").find("h1").html(player2.name);
    $("#player1Deck").append('<img class="card" src="images/back.png">');
    $("#player2Deck").append('<img class="card" src="images/back.png">');
    $("#create").hide();
    $("#draw").show();
  });

  $("#draw").on("click", function() {
    drawCards(player1, 1);
    drawCards(player2, 1);
    $("#player1Show").empty();
    $("#player2Show").empty();
    $("#player1Show").append("<img class='card' id='p1' src='images/" + player1.active[0].suit + "-" + player1.active[0].card + ".png'></div");
    $("#player2Show").append("<img class='card' id='p2' src='images/" + player2.active[0].suit + "-" + player2.active[0].card + ".png'></div");

    // setInterval(function() {
    //   compareCards(player1, player2);
    //   console.log("hi");
    // }, 5000);
  });

});
