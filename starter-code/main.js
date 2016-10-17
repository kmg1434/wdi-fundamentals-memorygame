// four card array initialization
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var board = document.getElementById('game-board');

function createBoard(){
	for (var i = 0; i< cards.length; i++){

			var cardElement = document.createElement('div');
			cardElement.className = 'card';
			cardElement.setAttribute('data-card', cards[i]);
			cardElement.addEventListener('click', isTwoCards);

			board.appendChild(cardElement);

	}
}

// check if we have a match
function isMatch(){
	if (cardsInPlay[0] === cardsInPlay[1])
	{
		alert("You found a match!");
	} else
	{
		alert("Sorry, try again.");
	}
}

//check to see if there are two cards in play
function isTwoCards(){

	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));

	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='king.png'>";
	} else {
		this.innerHTML = "<img src='queen.png'>";
	}

	if (cardsInPlay.length === 2){
		cardsInPlay = [];
		isMatch(cardsInPlay);
	}
}

function resetCards() {
		var board_children = board.children;

		for (var i = 0; i < board_children.length; i++) {
				board_children[i].innerHTML = '';
		}
}
