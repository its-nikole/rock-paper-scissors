const choises = ['rock', 'paper', 'scissors']
const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')

function getComputerChoice() {
    const computerChoises = choises[Math.floor(Math.random() * choises.length)]
    return computerChoises
}


const checkForWinner = (mySelection) => {
    const computerChoice = getComputerChoice();
    const myChoiseIndex = choises.indexOf(mySelection);
    if (mySelection === computerChoice) {
      console.log("Tie");
    } else if (
      mySelection === choises[myChoiseIndex] &&
      computerChoice === choises[(choises.indexOf(mySelection) + 2) % choises.length]
    ) {
      console.log("win");
    } else if (
      mySelection === choises[myChoiseIndex] &&
      computerChoice === choises[(choises.indexOf(mySelection) + 1) % choises.length]
    ) {
      console.log("loose");
    }
  
   
  };
  

// function checkForWinner(playerSelection) {
//     const computerChoise = getComputerChoice()
    
//     if(playerSelection === computerChoise) {
//         console.log("Tie")
//     } else if (playerSelection === choises[0] && computerChoise === choises[2]) {
//         console.log("Win")
//     } else if (playerSelection === choises[1] && computerChoise === choises[0]) {
//         console.log("Win")
//     } else if (playerSelection === choises[2] && computerChoise === choises[1]) {
//         console.log("Win") 
//     } else if (playerSelection === choises[0] && computerChoise === choises[1]) {
//         console.log("Lose") 
//     }else if (playerSelection === choises[1] && computerChoise === choises[2]) {
//         console.log("Lose") 
//     }else if (playerSelection === choises[2] && computerChoise === choises[0]) {
//         console.log("Lose") 
//     }   
// }

rockBtn.addEventListener('click', (e) => {
    checkForWinner(e.target.id)
})


paperBtn.addEventListener('click', (e) => {
    checkForWinner(e.target.id)
})

scissorsBtn.addEventListener('click', (e) => {
    checkForWinner(e.target.id)
})

