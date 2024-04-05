
// functtion 
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex =
    Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}



// Call the function 
const comptuerChoice = getComputerChoice();
console.log("Computer chose: " + comptuerChoice);






// function that plays a round of the game 
function playRound(playerSelection, computerSelection) {
    // convert playerSelection to lowercase for case insensitivity 
    const playerChoice = playerSelection.toLowerCase();

    // define the rules of the game 
    const rules = { rock:    { beats: "scissors", losesTo: "paper"}, 
                    paper:   { beats: "rock", losesTo: "scissors" },
                    scissors: {beats: "paper", losesTo: "rock" } 
}; 

// check if it's tied
if (playerChoice === computerSelection)
{
    return "It's a tie!";
}
// check if player wins 
if (rules[playerChoice].beats ===
    computerSelection) {
        return `You win! ${playerChoice}
        beats ${computerSelection}`;
    }

    // if it's not tie and the player didn't win, then computer wins 
    return `You lose! ${computerSelection}
    beats ${playerChoice}`;
}

// Example usage: 
const playerSelection = "Rock";
const computerSelection = 
getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


// play game function 
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = 
        prompt("Enter your choice (rock, paper, or scissors):");
        const computerSelection =
        getComputerChoice();
        const result = 
        playRound(playerSelection, computerSelection);

        console.log(result);

        // update scores
        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose"))
        {
            computerScore++;
        }
    }


// report final scores and winner 
console.log(`Player Score: $
{playerScore}`);

console.log(`Computer Score: $
{computerScore}`);

if (playerScore > computerScore) {
    console.log("Congratulations! You win the game!");
} else if (playerScore < computerScore)
{
    console.log("Sorry, you lose the game.");
} else {
    console.log("It's a tie!");
    }
}

// call the playgame function to startthe game 
playGame();
