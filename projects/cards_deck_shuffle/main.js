/***************VARIABLES***************/
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suit = ["♠", "♥", "♦", "♣"];
let messagesStack = [];

/*HTML DOM PARTS*/

var numberPlayersHtml = document.getElementById("playerNumber");
var numberCardsHtml = document.getElementById("cardAmount");
var dealCardButtonHtml = document.getElementById("dealCardButton");
var cardSpaceHtml = document.getElementById("cardsSpace");
var cardBucketsHtmls = document.getElementsByClassName("PlayerDeck--cardBucket");
var messageBoxHtml = document.getElementById("messageBar");

/***************FUNCTIONS***************/

function createCardDeck ( numbers, symbols ) {
    //Create the card deck uning ranks and suit for each card.
    let resultDeck = [];
    symbols.forEach(symbol =>{
        numbers.forEach(number =>{
            resultDeck.push(String(number)+String(symbol));
        })
    })
    return resultDeck;
}

function suffleDeck ( deck ) {
    //Mix the deck to assure everyone get differents cards.
    /*let index = 0;
     while (index < deck.length*2){
        var indexOne = Math.floor(Math.random()*deck.length);
        var indexTwo = Math.floor(Math.random()*deck.length);
        var cardOne = deck[indexOne]
        var cardTwo = deck[indexTwo]
        insertCardTaken = deck.splice(indexOne,1,cardTwo);
        InsertCardPutt = deck.splice(indexTwo,1,cardOne);
        index = index + 1;
    } */
    // Using Fisher-Yates Algorithm
    for (let i = deck.length -1; i > 0; i--) {
        const j = Math.floor(Math.random()*(i+1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
        
}

function dealCards ( playerNumbers, cardNumber, deck ){
    //Assign one card deck for each player according to the number of players and the card number that was entered.
    let cardDeck = [];
    for (let indexPlayer = 0; indexPlayer < playerNumbers; indexPlayer++) {
        let indexCard = 0
        let temporaryDeck = []
        while ( indexCard < cardNumber ){
            let card = deck.shift();
            temporaryDeck.unshift(card);
            indexCard++
        }
        cardDeck.push(temporaryDeck)
    }
    return cardDeck;
}


function createRipple(event) {
    const button = event.currentTarget;
    
    // Crear el elemento de onda
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
  
    // Calcular las coordenadas del clic
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
  
    // Establecer las coordenadas y agregar la onda al botón
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    button.appendChild(ripple);
  
    // Eliminar la onda después de la animación
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  }


function createPlayerDeckSpace ( playerNumber ){
    cardSpaceHtml.innerHTML = "";
    for (let index = 1; index < playerNumber+1; index++) {
        var domFragment = document.createDocumentFragment();

        const playerDeck = document.createElement("div");
        playerDeck.classList.add("playerDeck");

        const playerDeckTitle = document.createElement("div");
        playerDeckTitle.classList.add("playerDeck--title");
        const title = document.createElement("p");
        title.innerHTML = `Player ${index}`;
        playerDeckTitle.appendChild(title);

        const PlayerDeckCardBucket = document.createElement("div");
        PlayerDeckCardBucket.classList.add("PlayerDeck--cardBucket");

        playerDeck.appendChild(playerDeckTitle);
        playerDeck.appendChild(PlayerDeckCardBucket);
        domFragment.appendChild(playerDeck)
        cardSpaceHtml.appendChild(domFragment);
        domFragment.innerHTML = "";
    }

    return true;
}

function addCardsToPlayer ( distributedDeckCard ) {
    for (let index = 0; index < cardBucketsHtmls.length; index++) {
        let deckForPlayer = distributedDeckCard[index];
        let bucketForPlayer = cardBucketsHtmls[index];
        var domFragment = document.createDocumentFragment();

        for (let indexDeck = 0 ; indexDeck < deckForPlayer.length; indexDeck++ ){
            
            const card = document.createElement("div");
            card.classList.add("PlayerDeck--cardBucket--Card");
            const symbol = deckForPlayer[indexDeck];
            if (symbol[1] === "♠" || symbol[1] === "♣"){
                card.classList.add("blackCard");
            } else{
                card.classList.add("redCard");
            }

            var pInside = [
                document.createElement("p"),
                document.createElement("p"),
                document.createElement("p")
            ]
            pInside.forEach(element =>{
                element.innerHTML = `${symbol}`;
                card.appendChild(element)
            })

            domFragment.appendChild(card)
            bucketForPlayer.appendChild(domFragment)
            domFragment.innerHTML = ""
        }

    }
    return true;
}

function startGame ( playersAmount, playersCard ) {
    players = Number(playersAmount);
    cards = Number(playersCard);
    deck = createCardDeck ( ranks, suit );

    if (players*cards > 52){
        console.log();
        ManageMessages({ message: "The current selection of players and cards per player is not possible since there are only 52 cards. Please try again.", class: "errorMessage" })
        return false;
    } 

    suffleDeck ( deck );
    const cardsPlayers = dealCards ( players, cards, deck );

    createPlayerDeckSpace ( players )
    addCardsToPlayer ( cardsPlayers ) 
    ManageMessages({message: "Cards dealt.", class: "successMessage"});
}


function ManageMessages(message) {
    // We add the message to the messages stack
    messagesStack.unshift(message);

    // We clean the HTML messages item
    messageBoxHtml.innerHTML = "";

    // We iterate the messages stack and create and append one p element
    
    messagesStack.forEach(messageOfStack => {
        const individualMessage = document.createElement('p');
        individualMessage.classList.add(messageOfStack.class);
        individualMessage.innerHTML = `${messageOfStack.message}`;
        messageBoxHtml.appendChild(individualMessage);
    });

    setTimeout(function () {
        messagesStack.pop();
        messageBoxHtml.lastElementChild.remove()
    }, 3000);
}




dealCardButtonHtml.addEventListener("click", function(){
    startGame ( numberPlayersHtml.value, numberCardsHtml.value )
})