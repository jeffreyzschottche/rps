// function getComputerChoice(){
//     let compChoice;
//     let randomNum = Math.floor(Math.random() * 10);
//     if(randomNum <= 3.33){
//         compChoice = 'rock';
//     }else if(randomNum <= 6.66){
//         compChoice = 'paper';
//     }else{
//         compChoice = 'scissors';
//     }
//     return compChoice;
// }

// function getPlayerChoice(){
//     let userChoice = prompt('choose rock paper or scissors');
//     let compChoice = getComputerChoice();
//     // gameRound(userChoice.toUpperCase(),compChoice.toUpperCase());
// }

// // alert(getComputerChoice());
// // playerChoice, computerChoice
// function gameRound(){
//     let compChoice = getComputerChoice().toUpperCase();
//     let userChoice = getPlayerChoice().toUpperCase();
//     if(playerChoice === computerChoice){
//         alert('draw');
//         return 'draw';
//     }else if(playerChoice === "ROCK" && computerChoice === "PAPER" || playerChoice === "SCISSORS" && computerChoice === "ROCK" || playerChoice === "PAPER" && computerChoice === "SCISSORS"){
//         alert('computer wins');
//         alert('comp choice' + ' ' + computerChoice + ' ' + 'player choice' + ' ' + playerChoice);
//         return 'comp';
//     }else{
//         alert('player wins');
//         alert('comp choice' + ' ' + computerChoice + ' ' + 'player choice' + ' ' + playerChoice);
//         return 'user';
//     }
// }

// function game(){
//     for(let i = 0; i <= 5; i++){
//         // getPlayerChoice();
//         // alert(getPlayerChoice());
//         gameRound();
//         alert(gameRound());
//     }
// }

// function compChoice2() {
//     let computerChoice;
//     let randomNum = Math.floor(Math.random() * 10);
//     if (randomNum <= 3.33) {
//         computerChoice = "rock";
//     } else if (randomNum <= 6.66) {
//         computerChoice = "paper";
//     } else {
//         computerChoice= "scissors";
//     }
//     return computerChoice;
//   }
  
//   function userChoice2() {
//     let userChoice = prompt("Choose rock, paper or scissors");
//     return userChoice;
//   }
  

// function game() {
//     let compCount = 0;
//     let userCount = 0;
//     let draw = 0;
//   for (let i = 0; i < 5; i++) {
//     gameRound();
//     if (gameRound() === "comp") {
//         compCount++;
//     }else if(gameRound() === "user"){
//         userCount++;
//     }else{
//         draw++;
//     }
//   }
//     alert('comp won' + ' ' + compCount + 'times' + ' ' + 'user won' + ' ' + userCount + ' ' + 'times')
// }

// function gameRound() {
//   let computerChoice = compChoice2().toUpperCase();
//   let playerChoice = userChoice2().toUpperCase();

//   if (playerChoice === computerChoice) {
//     alert("draw");
//     return "draw";
//   } else if (
//     (playerChoice === "ROCK" && computerChoice === "PAPER") ||
//     (playerChoice === "SCISSORS" && computerChoice === "ROCK") ||
//     (playerChoice === "PAPER" && computerChoice === "SCISSORS")
//   ) {
//     alert("computer wins");
//     // alert(
//     //   "comp choice" +
//     //     " " +
//     //     computerChoice +
//     //     " " +
//     //     "player choice" +
//     //     " " +
//     //     playerChoice
//     // );
//     return "comp";
//   } else {
//     alert("player wins");
//     // alert(
//     //   "comp choice" +
//     //     " " +
//     //     computerChoice +
//     //     " " +
//     //     "player choice" +
//     //     " " +
//     //     playerChoice
//     // );
//     return "user";
//   }
// }
function getCompChoice(){
    let randomNum = Math.floor(Math.random() * 10);
    let compChoice;
    if(randomNum <= 3.33){
        compChoice = 'rock';
    }else if(randomNum <= 6.66){
        compChoice = 'paper';
    }else{
        compChoice = 'scissors';
    }
    return compChoice;
}
function getUserChoice(){
    let userChoice = prompt('choose rock, paper, scissors');
    return userChoice;
}

function gameRound(){
    let computer = getCompChoice().toLowerCase();
    let user = getUserChoice().toLowerCase();

    if(computer === 'rock' && user === 'scissors' || computer === 'scissors' && user === 'paper' || computer === 'paper' && user === 'rock'){
        alert('pc won');
        return 'pc';
    }else if(computer === user){
        alert('draw');
        return 'draw';
    }else{
        alert('user won');
        return 'user';
    }

}

function game(){
    let draw = 0;
    let comp = 0;
    let user = 0;
    for(let i = 0; i < 5; i++){
        gameRound();
        let gamePoint = gameRound();
        if(gamePoint === 'pc'){
            comp++;
        }else if(gamePoint === 'user'){
            user++;
        }else{
            draw++;
        }
    }
    alert('computer has' + ' ' + comp + ' ' + 'points');
    alert('user has' + ' ' + user +  ' ' +  'points');
    alert('there were' + ' ' + draw + ' ' + 'draws');
}

