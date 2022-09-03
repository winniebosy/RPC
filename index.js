let round = 0;
let gameRound = document.querySelector('.game-round')
let buttons = document.querySelectorAll('.button');
let overallscoreHuman = document.querySelector('.score-overall-human');
let overallscoreComputer = document.querySelector('.score-overall-computer');
let humanScore = 0;
let computerScore = 0;
let scoreWinner = document.querySelector('.score-winner');
let reloadBtn = document.querySelector('reload-btn');





function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;

    })
}
//selecting human choice 



//get computer choice randomly

function computerSelection() {

    //randomly selects a choice from the array
    let randomChoice = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * randomChoice.length);
    let computerDisplay = document.querySelector('.selection-output-computer')
    if (choice === 0) {
        computerDisplay.textContent = 'The Computer selected Rock';
        return 'rock';
    } else if (choice === 1) {
        computerDisplay.textContent = 'The Computer selected Paper'
        return 'paper'
    } else if (choice === 2) {
        computerDisplay.textContent = 'The Computer selected Scissors'
        return 'scissors';
    }
}




//continue from here
//play round to compare selection
function playRound(playerSelection, computerPlay) {
    computerPlay = computerSelection();
    let winningScore = 1;
    let loosingScore = 0;

    let gameOutput = document.querySelector('.selection-output-game');
    let humanScores = document.querySelector('.score-output-human');
    let computerScores = document.querySelector('.score-output-computer')
    if (playerSelection === computerPlay) {
        gameOutput.textContent = "It's a tie!";
        humanScores.textContent = `Human player scores: ${loosingScore}`;
        computerScores.textContent = `Computer scores: ${loosingScore}`;
        round++
        gameRound.textContent = `This is round ${round}`;
        return ("It's a tie!");
    } else if ((playerSelection === 'rock') && (computerPlay === 'scissors')) {
        humanScore++
        gameOutput.textContent = `You win! Rock beats scissors`;
        humanScores.textContent = `Human player scores: ${winningScore}`;
        computerScores.textContent = `Computer scores: ${loosingScore}`;
        round++
        gameRound.textContent = `This is round ${round}`;

        // console.log(`Score: Human Player scores $ { winningScore }: Computer Player $ { loosingScore });            
        return ("You win! Rock beats scissors");
    } else if (playerSelection === 'rock' && computerPlay === 'paper') {
        gameOutput.textContent = `You loose! Paper beats Rock`;
        humanScores.textContent = `Human player scores:${loosingScore}`;
        computerScore.textContent = `Computer scores:${winningScore}`;
        computerScore++
        round++
        gameRound.textContent = `This is round ${round}`;

        // console.log(`Score: Human Player scores ${loosingScore }: Computer Player ${winningScore++}`)
        return ("You lose! Paper beats rock");
    } else if (playerSelection === "paper" && computerPlay === 'rock') {
        gameOutput.textContent = `You win! Paper beats Rock`;
        humanScores.textContent = `Human player scores:${winningScore}`;
        computerScores.textContent = `Computer scores:${loosingScore}`;
        humanScore++;
        round++
        gameRound.textContent = `This is round ${round}`;

        // console.log(`Score: Human Player scores $ { winningScore }: Computer Player $ { loosingScore }`)
        return ("You win! Paper beats rock");
    } else if (playerSelection === 'paper' && computerPlay === 'scissors') {
        gameOutput.textContent = `You loose! Scissors beats Paper`;
        humanScores.textContent = `Human player scores ${loosingScore}`;
        computerScores.textContent = `Computer scores ${winningScore}`;
        computerScore++;
        round++
        gameRound.textContent = `This is round ${round}`;

        // console.log(`Score: Human Player scores $ { loosingScore }: Computer Player $ { winningScore }`)
        return ("You lose! Scissors beat paper");
    } else if (playerSelection === 'scissors' && computerPlay === 'paper') {
        gameOutput.textContent = `You win! Scissors beat paper`;
        humanScore.textContent = `Human player scores ${winningScore}`;
        computerScore.textContent = `Computer scores ${loosingScore}`;
        humanScore++;
        round++
        gameRound.textContent = `This is round ${round}`;

        // console.log(`Score: Human Player scores $ { winningScore }: Computer Player ${loosingScore}`)
        return ("You win! Scissors beat paper");
    } else if (playerSelection === 'scissors' && computerPlay === 'rock') {
        gameOutput.textContent = `You lose!Rock beats scissors`;
        humanScores.textContent = `Human player scores ${loosingScore}`;
        computerScores.textContent = `Computer scores ${winningScore}`;
        computerScore++;
        round++
        gameRound.textContent = `This is round ${round}`;

        // console.log(`Score: Human Player scores $ { loosingScore }: Computer Player ${winningScore }`)
        return ("You lose!Rock beats scissors");
    } else {
        return 'Invalid';
    }


}


//update scores 
//function checkWinner() {


//}


function gameEnd() {

    if (humanScore > computerScore) {
        scoreWinner.textContent = `The Winner is Human Player!`;
    } else {
        scoreWinner.textContent = `The Winner is the Computer Player!`;
    }
}



//window reload after game ends

//reloadPage()


buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        //call both computer and human players to evaluate choices
        playerSelection = button.value;
        computerPlay = computerSelection();
        let outputDisplay = document.querySelector('.selection-output-human')
        outputDisplay.textContent = `You have selected ${button.value}`;
        playRound(playerSelection, computerPlay);
        overallscoreComputer.textContent = `The overall computer score is ${computerScore}`;
        overallscoreHuman.textContent = `The overall human score is ${humanScore}`;

        if (humanScore === 5 || computerScore === 5) {
            //ends game after one gets five points first.
            gameEnd()
                //buttons are disabled to indicate end of game
            disableButtons();
            let scoreOutput = document.querySelector('.score-output')
            let p = document.createElement('p');
            p.textContent = 'Refresh page or press F5 to reload the game';
            scoreOutput.append(p)
        }



    });



});