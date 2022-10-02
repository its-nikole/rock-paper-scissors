const choises = ["rock", "paper", "scissors"];
const totalRounds = 5;
let currentRound = 0;
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const playerEmoji = document.querySelector(".your-output");
const computerEmoji = document.querySelector(".computer-output");
const yourScore = document.getElementById("yourScore");
const computerScore = document.getElementById("computerScore");
const newRoundBtn = document.querySelector('.new-round-button');
const gameOverTextEl = document.querySelector('.game-over-text');
const modalEl = document.querySelector('.modal')

 

function getComputerChoice() {
  const computerChoises = choises[Math.floor(Math.random() * choises.length)];
  return computerChoises;
}

function checkForWinner(playerSelection, computerChoise) {
  if (playerSelection === computerChoise) {
    return "Tie";
  } else if (playerSelection === choises[0] && computerChoise === choises[2]) {
    return "Win";
  } else if (playerSelection === choises[1] && computerChoise === choises[0]) {
    return "Win";
  } else if (playerSelection === choises[2] && computerChoise === choises[1]) {
    return "Win";
  } else if (playerSelection === choises[0] && computerChoise === choises[1]) {
    return "Lose";
  } else if (playerSelection === choises[1] && computerChoise === choises[2]) {
    return "Lose";
  } else if (playerSelection === choises[2] && computerChoise === choises[0]) {
    return "Lose";
  }
}

function incrementScore(newScore) {
  newScore.innerHTML = Number(newScore.innerText) + 1;
}

function emojiDiv() {
  document.createElement;
}

const drawEmoji = (element, emoji) => {
  element.innerHTML += `<div>${emoji}</div>`;
};

const getEmoji = (choice) => {
  if (choice === choises[0]) return "✊";
  if (choice === choises[1]) return "✋";
  if (choice === choises[2]) return "✌";
};

const addEmoji = (choise, type) => {
  type === "player"
    ? drawEmoji(playerEmoji, getEmoji(choise))
    : drawEmoji(computerEmoji, getEmoji(choise));
};

const addScore = (outcome) => {
  if (outcome === "Tie") {
    
    incrementScore(yourScore);
    incrementScore(computerScore);
  }
  if (outcome === "Win") incrementScore(yourScore);
  if (outcome === "Lose") incrementScore(computerScore);
};

const checkIfGameOver = () => {
  currentRound += 1

  if(currentRound === totalRounds) {
    const playerPrintedScore = yourScore.innerText
    const computerPrintedScore = computerScore.innerText
    gameOverState()
    if(playerPrintedScore === computerPrintedScore){
      gameOverTextEl.innerText = 'Tie!'
      return
    }
   gameOverTextEl.innerText = playerPrintedScore > computerPrintedScore ? "You win" : "Computer wins"
  }
}

const gameOverState = () => {
  rockBtn.setAttribute('disabled', true)
  paperBtn.setAttribute('disabled',true)
  scissorsBtn.setAttribute('disabled',true)
  modalEl.style.display = 'block'
  
}

const clickHandler = (event) => {
  const generatedComputerChoice = getComputerChoice();
  const playerChoice = event.target.id;
  const outcome = checkForWinner(playerChoice, generatedComputerChoice);
  addScore(outcome);
  addEmoji(playerChoice, "player");
  addEmoji(generatedComputerChoice, "computer");
  checkIfGameOver()
};

rockBtn.addEventListener("click", clickHandler);

paperBtn.addEventListener("click", clickHandler);

scissorsBtn.addEventListener("click", clickHandler);

newRoundBtn.addEventListener('click', function() {
  modalEl.style.display = 'none'
  rockBtn.removeAttribute('disabled')
  paperBtn.removeAttribute('disabled')
  scissorsBtn.removeAttribute('disabled')
  yourScore.innerText = 0
  computerScore.innerText = 0
  playerEmoji.innerHTML = ''
  computerEmoji.innerHTML=''
  currentRound = 0
});
