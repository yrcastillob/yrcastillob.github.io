/*Game to guess a word*/

/*********************************'BACK END'*******************************************/

/* WORD OPTIONS */

class WordOption {
    constructor ( word, wordAmount, clueOne, clueTwo, clueThree, hasPlayed ) {
        this.word = word,
        this.wordAmount = wordAmount,
        this.clueOne = clueOne,
        this.clueTwo = clueTwo,
        this.clueThree = clueThree,
        this.hasPlayed = hasPlayed
    };

    evaluateAnswer ( answer ) {
        return this.word.toLowerCase() === answer.toLowerCase();
    };

    giveHint ( attempt ) {
        switch( attempt ){
            case ( 1 ) :
                return this.clueOne;
            case ( 2 ) :
                return this.clueTwo;
            case ( 3 ) :
                return this.clueThree;
            default:
                return `Sorry, try again!`
        }
    }

    changePlayedStatus ( playedStatus ) {
        this.hasPlayed = playedStatus;
    }
}

/*CREATIONAL PATTERNS*/

let singleton = new WordOption("Singleton", 1, "Creating a single instance of a class", "Global state can lead to issues", "Managing global state", false);

let factoryMethod = new WordOption("Factory Method", 2, "Creating objects without specifying the exact class", "Can lead to a large number of subclasses", "Creating objects with a common interface", false);

let abstractFactory = new WordOption("Abstract Factory", 2, "Creating families of related or dependent objects", "Complexity increases with more product types", "Building complex objects with multiple parts", false);

/*STRUCTURAL PATTERNS*/

let adapter = new WordOption("Adapter", 1, "Allowing incompatible interfaces to work together", "May introduce an additional layer of complexity", "Integrating new components with existing systems", false);

let decorator = new WordOption("Decorator", 1, "Adding new functionality to an object without altering its structure", "Can lead to a large number of small classes", "Extending behavior dynamically", false);

let composite = new WordOption("Composite", 1, "Treating individual objects and compositions of objects uniformly", "May be overly generalized for some use cases", "Building complex tree structures", false);

/*BEHAVIORAL PATTERNS*/

let observer = new WordOption("Observer", 1, "Defining a dependency between objects so that when one changes state, others are notified", "Can lead to memory leaks if not managed properly", "Implementing distributed event handling systems", false);

let strategy = new WordOption("Strategy", 1, "Defining a family of algorithms, encapsulating each one, and making them interchangeable", "May introduce complexity when there are many strategies", "Allowing clients to choose the appropriate algorithm", false);

let command = new WordOption("Command", 1, "Encapsulating a request as an object, thereby parameterizing clients with different requests", "Can lead to a large number of command classes", "Supporting undoable operations and queuing of requests", false);

/* LIST WITH WORDS*/

var optionList = [singleton, factoryMethod, abstractFactory, adapter, decorator, composite, observer, strategy, command]

/*********************************'FRONT END'*******************************************/

/* VARIABLES */

let word = ``;
let response = ``;
let hint = ``;
let score = 0;
let attempt = 1;
let game = {
    lifes: 3,
    subtract: function () {
        this.lifes = this.lifes - 1;
    },
    reset: function () {
        this.lifes = 3;
    }
};

/* VARIABLES DOM*/

let wordAmountHtml = document.getElementById('wordAmount');
let scoreHtml =  document.getElementById('scoreCounter');
let lifeHtml = document.getElementById('lifesCounter');
let answerHtml = document.getElementById('answer');
let checkButtonHtml = document.getElementById('checkButton');
let hintSpaceHtml = document.getElementById('hintText');
let restultsHtml = document.getElementById('resultCard--Title');
let restultsScoreHtml = document.getElementById('resultCard_scoreCounter');
let playAgainButtonHtml = document.getElementById('playButton');
let closeHtml = document.getElementById('resultCard--Close');
let reloadButtonHtml = document.getElementById('mainCard_reload');

/* FUNCTIONS */

function getOptionWord ( list ) {

    let option = list[Math.floor(Math.random() * list.length)];

    if (option.hasPlayed === true) {
        for (let word of list) {
            option = word;
            if (option.hasPlayed === false) {
                return option;
            }
        }
    }

    return option;
}

function evaluateAnswer( wordToGuess, answer ) {
    if ( answer !== wordToGuess.toLocaleLowerCase() ) {
        return false;
    } else {
        return true;
    }
}


function tryAttempt( wordToGuess, answer, score ) {
    attempt = attempt + 1;

    if ( attempt < 4 ) {
        if ( evaluateAnswer( wordToGuess.word, answer.value ) ) {
            checkButtonHtml.style.display = 'none';
            giveResults( wordToGuess, answer )
        } else {
            updateHintSpace( attempt )
            game.subtract();
            updateVisualLife( game.lifes )           
            console.log(`Pista: ${hint}`)
        }
    } else {
        if ( evaluateAnswer( wordToGuess.word, answer.value ) ) {
            giveResults( wordToGuess, answer )
            
        } else {
            game.subtract();
            updateVisualLife( game.lifes );
            answerHtml.setAttribute( "disabled", "" );
            answerHtml.value = ""; 
            answerHtml.placeholder = `Try Again! 🥺`;
            checkButtonHtml.style.display = 'none';  
            giveResults( wordToGuess, answer )
        }
    }
}

function startRound() {
    answerHtml.value = "";
    word = getOptionWord ( optionList )
    console.log(word)
    wordAmountHtml.textContent = (word.wordAmount > 1) ? `${word.wordAmount} Words!` : `${word.wordAmount} Word!`;
    scoreHtml.textContent = score;
    attempt = 1;
    game.reset();
    checkButtonHtml.style.display = 'flex';  
    answerHtml.disabled = false;
    answerHtml.placeholder = `Answer Here`; 
    hideElement( 'resultCard' );
    hintSpaceHtml.textContent = "";
    updateHintSpace( 1 );
    updateVisualLife( game.lifes );
}

function updateVisualLife( lifes ) {
    lifeHtml.innerHTML = '';
    for (let i = 0; i < lifes; i++) {
        const image = document.createElement('img');
        image.src = './assets/heart.svg';
        image.alt = 'heart lifes';
        image.classList.add('lifeHeart');
        lifeHtml.appendChild(image)
    }
}

function updateHintSpace( attempt ) {
    hint = word.giveHint( attempt );
    const p = document.createElement('p');
    p.classList.add('mainCard_Game--hint_p');
    p.textContent = `💡 Hint ${attempt}: `+ hint;
    hintSpaceHtml.appendChild(p)
}

function giveResults( wordToGuess, answer ){
    game.reset();
    attempt = 5;
    wordToGuess.hasPlayed = true;
    scoreHtml.textContent = score;
    if ( evaluateAnswer( wordToGuess.word, answer.value ) ) {
        score = score + 1;
        restultsHtml.textContent = `Great job! 👏 the word was "${wordToGuess.word}"🏆.`;
    } else {
        restultsHtml.textContent = `Try Again! 🥺 the word was "${wordToGuess.word}".`;
    }
    scoreHtml.textContent = score;
    restultsScoreHtml.textContent = score;
    showElement( 'resultCard' )
}

function hideElement( idElement ){
    element = document.getElementById( idElement );
    element.style.display = 'none'; 
}

function showElement( idElement ){
    element = document.getElementById( idElement );
    element.style.display = 'flex'; 
}

startRound()

checkButtonHtml.addEventListener('click', () => tryAttempt(word,answerHtml,score));
playAgainButtonHtml.addEventListener('click', () => startRound());
closeHtml.addEventListener('click', () => hideElement('resultCard'));
reloadButtonHtml.addEventListener('click', () =>startRound());
answerHtml.addEventListener('keypress',function(event){if (event.key === 'Enter'){tryAttempt(word,answerHtml,score)}});

