console.log("JS file is connected to HTML! Woo!")


// four card variable initialization
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "king";
var cardFour = "king";

var board = document.getElementById('game-board');

var createCards = function(cardCount){

	cardCount = 4;

	for (var i=1; i<=cardCount; i++){

		var newCard = document.createElement('div');
		newCard.className = 'card';
		board.appendChild(newCard);
	}
}

/*
if (cardTwo === cardFour){

	alert('You found a match!');
}
else {
	alert('Sorry, try again.');
}
*/
