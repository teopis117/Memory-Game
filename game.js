var cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
var currentSelection = [];
var matchedCards = [];

// Barajar las tarjetas
cards.sort(function() { return 0.5 - Math.random() });

var board = document.querySelector('#game-board');

// Crear las tarjetas
cards.forEach(function(card) {
    var cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.textContent = card;
    cardElement.addEventListener('click', function() {
        cardElement.classList.add('hide');
        currentSelection.push(card);
        if (currentSelection.length === 2) {
            if (currentSelection[0] === currentSelection[1]) {
                matchedCards.push(currentSelection[0]);
            } else {
                setTimeout(function() {
                    var selectedCards = document.querySelectorAll('.hide');
                    selectedCards.forEach(function(card) {
                        card.classList.remove('hide');
                    });
                }, 1000);
            }
            currentSelection = [];
            if (matchedCards.length === cards.length / 2) {
                alert('¡Has ganado!');
            }
        }
    });
    board.appendChild(cardElement);
});

// Ocultar todas las tarjetas al inicio del juego
var allCards = document.querySelectorAll('.card');
allCards.forEach(function(card) {
    card.classList.add('hide');
});
