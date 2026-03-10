let randomNUM = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const LowHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let preGuess = [];
let numGuesses = 1;

let playGame = true; //checked you avail to play this or not

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}
function validateGuess(guess){
  //check your guess integer is a valid formate or not
  if(isNaN(guess)){
    alert("please enter a valid number");
  }
  else if(guess<1){
    alert("please enter a number more than or equal 1");
  }
  else if(guess>100){
    alert("please enter a number less or equal 100");
  }
  else{
    preGuess.push(guess);
    if(numGuesses===11){
      displayGuess(guess);
      displayMsg(`Game over. Random number was ${randomNUM}`);
      endGame();
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess){
  //check your guess integer is matched to num or not
  if(guess===randomNUM){
    displayMsg(`You guess it right.`);
    endGame();
  }
  else if(guess<randomNUM){
    displayMsg(`Number is too low`);
  }
  else if(guess>randomNUM){
    displayMsg(`Number is too high`);
  }

}
function displayGuess(guess){
  // display the guess number of user
  numGuesses++;
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  remaining.innerHTML = `${11-numGuesses}`;
}
function displayMsg(message){
  // prints user message.
   LowHigh.innerHTML = `<h2>${message}</h2>`;
}
function endGame(){
  userInput.value='';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame(){ 
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click',function(e){
    randomNUM =  parseInt(Math.random() * 100 + 1)
    preGuess = [];
    numGuesses = 1;
    guessSlot.innerHTML='';
    LowHigh.innerHTML = '';
    remaining.innerHTML=`${11-numGuesses}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

  })
}