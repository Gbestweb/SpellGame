window.addEventListener('load', init);
//Globals

//  Availiable levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}
// To Change levels
const currentLevel = levels.easy;

let time = 5;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'river',
    'hat',
    'lucky',
    'genius',
    'related',
    'appropiate',
    'understanding',
    'chef',
    'closure',
    'international',
    'liberation',
    'power',
    'love',
    'oppression',
    'intelligency',
    'diabatic',
    'dibase',
    'dibolic',
    'viable',
    'vibes',
    'bitchy',
    'capability',
    'bended',
    'chalic',
    'disdain',
    'wisdom',
    'behaviour',
    'magnitude',
    'level',
    'organization',
    'immune',
    'instructions',
    'zoo',
    'abadite',
    'zealous',
    'zebra',
    'zeaxanthin',
    'zealander',
    'kleptomamia',
    'klaxon',
    'inaccessible',
    'inactivation',
    'inaccuracy',
];

//initialize Game
function init() {
    //console.log('init')
    //Show number of seconds in UI
    seconds.innerHTML = currentLevel;

    //load word from array
    showWord(words);
    // call countdown every second
    setInterval(countDown, 1000);
    // Check game status
    setInterval(checkStatus, 50);
    // Start matching on word input
    wordInput.addEventListener('input', startMatch);
}


// pick and show random word
function showWord(words) {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    currentWord.innerHTML = words[randIndex];
}

//countdown timer
function countDown() {
    //Make sure time is not run out
    if (time > 0) {
        //Decreament
        time--;
    } else if (time === 0) {
        // Game over
        isPlaying = false;
    }
    // Show time
    timeDisplay.innerHTML = time;
}

// Check game Status
function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!';
        score = -1;
    }
}

// Start Match
function startMatch() {
    if (matchWords()) {
        //console.log('MATCH!!!');
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    // if score is -1 display 0
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

// Match currentword to wordinput
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}