//console.log("Up and running!");
//var cardOne = cards[0];
//cardsInPlay.push(cardOne);
//console.log("User flipped " + cardOne);
//var cardTwo = cards[2];
//cardsInPlay.push(cardTwo);
//console.log("User flipped " + cardTwo);

var cards = [
{
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
},
{
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
},
{
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
},
{
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  }
}

var flipCard = function(cardId) {
  //console.log("User flipped " + cards[cardId].rank);
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  //console.log(cards[cardId].cardImage);
  //console.log(cards[cardId].suit);
  this.getAttribute('data-id');
  this.setAttribute('src', cards[cardId].cardImage);

  if (cardsInPlay.length === 2) {
    console.log("they match");
  } else {
    alert("Sorry try again!");
  }
};
  checkForMatch();
//flipCard(0);
//flipCard(2);

var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
  var cardElement = document.createElement("img");
  cardElement.setAttribute("src", "images/back.png");
  cardElement.setAttribute('data-id', i);
  cardElement.addEventListener('click', flipCard);
  //cardElement.appendChild('game-board');
  document.getElementById("game-board").appendChild(cardElement);
  }
  console.log();
};
createBoard();
