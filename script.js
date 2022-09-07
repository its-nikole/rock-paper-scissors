const choises = ['rock', 'paper', 'scissors']
const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const yourEmoji = document.querySelector('.your-output')
const computerEmoji = document.querySelector('.computer-output')
const yourScore = document.getElementById('yourScore')
const computerScore = document.getElementById('computerScore')


function getComputerChoice() {
    const computerChoises = choises[Math.floor(Math.random() * choises.length)]
    return computerChoises
}
  
function checkForWinner(playerSelection) {
    const computerChoise = getComputerChoice()
    
    if(playerSelection === computerChoise) {
      console.log("Tie")
      incrementScore(yourScore), incrementScore(computerScore)
    } else if (playerSelection === choises[0] && computerChoise === choises[2]) {
      console.log("Win")
      incrementScore(yourScore)
    } else if (playerSelection === choises[1] && computerChoise === choises[0]) {
        console.log("Win")
        incrementScore(yourScore)
    } else if (playerSelection === choises[2] && computerChoise === choises[1]) {
        console.log("Win") 
        incrementScore(yourScore)
    } else if (playerSelection === choises[0] && computerChoise === choises[1]) {
        console.log("Lose") 
        incrementScore(computerScore)
    } else if (playerSelection === choises[1] && computerChoise === choises[2]) {
        console.log("Lose") 
        incrementScore(computerScore)
    } else if (playerSelection === choises[2] && computerChoise === choises[0]) {
        console.log("Lose") 
        incrementScore(computerScore)
    }   
}

function incrementScore(newScore) {
  newScore.innerHTML = Number(newScore.innerText) +1
} 


function addYourEmoji(playerSelection) {
  if(playerSelection === choises[0]) {
    yourEmoji.innerHTML = "✊"
  } else if (playerSelection === choises[1]) {
    yourEmoji.innerHTML = "✋"
  } else if (playerSelection === choises[2]) {
    yourEmoji.innerHTML = "✌"
  } 
}

function addComputerEmoji(computerChoise) {
  if (computerChoise === choises[0]) {
    computerEmoji.innerHTML = "✊"
  } else if (computerChoise === choises[1]) {
    computerEmoji.innerHTML = "✋"
  } else if (computerChoise === choises[2]) {
    computerEmoji.innerHTML = "✌"
  }
}

rockBtn.addEventListener('click', (e) => {
    checkForWinner(e.target.id)
    addYourEmoji(e.target.id)
    addComputerEmoji(getComputerChoice())
})


paperBtn.addEventListener('click', (e) => {
    checkForWinner(e.target.id)
    addYourEmoji(e.target.id)
    addComputerEmoji(getComputerChoice())
})

scissorsBtn.addEventListener('click', (e) => {
    checkForWinner(e.target.id)
    addYourEmoji(e.target.id)
    addComputerEmoji(getComputerChoice())
})

