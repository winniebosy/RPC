//get human choice

function getHumanChoice() {

    //let choice = prompt('Rock,paper,scissors?').toLowerCase();

    //prompts for human choice and changed to lowercase to make it case insensitive
    if (humanChoice === buttons[0] || humanChoice === buttons[1] || humanChoice === buttons[2]) {
        console.log(`The human player chose  ${humanChoice}`)
        return humanChoice
    }
    /* else {
        console.log('Invalid!')
        return 'Invalid'
    }




    function reloadPage() {
    reloadBtn.addEventListener('click', () => {
       div.style.background ='red';
       div.setAttribute('data-state', reloadBtn.getAttribute('data-state') === 'inactive' ? 'active' : 'inactive')
        
        console.log('clicked')
       console.log('div')
    })
}
reloadPage();












    function playRound(playerSelection, computerSelection) {
    let winningScore = 1;
    let loosingScore = 0;
    if (playerSelection === computerSelection) {
        return ("It's a draw!");
    } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
        humanScore++;
        console.log(`
                        Score: Human Player scores $ { winningScore }: Computer Player $ { loosingScore }
                        `)
        return ("You win! Rock beats scissors");
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        console.log(`
                        Score: Human Player scores $ { loosingScore }: Computer Player $ { winningScore++ }
                        `)
        return ("You lose! Paper beats rock");
    } else if (playerSelection === "paper" && computerSelection === 'rock') {
        humanScore++;
        console.log(`
                        Score: Human Player scores $ { winningScore }: Computer Player $ { loosingScore }
                        `)
        return ("You win! Paper beats rock");
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++
        console.log(`
                        Score: Human Player scores $ { loosingScore }: Computer Player $ { winningScore }
                        `)
        return ("You lose! Scissors beat paper");
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        humanScore++;
        console.log(`
                        Score: Human Player scores $ { winningScore }: Computer Player $ { loosingScore }
                        `)
        return ("You win! Scissors beat paper");
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        console.log(`
                        Score: Human Player scores $ { loosingScore }: Computer Player $ { winningScore }
                        `)
        return ("You lose!Rock beats scissors");
    } else if (playerSelection === '') {
        return 'Invalid';
    }


}






/* function playGame() {


    for (let i = 1; i <= 5; i++) {
        const playerSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        // console.log(playRound(playerSelection, computerSelection));
        // console.log(`
        //             End of round $ { i }
        //             of the game `);
        // console.log(`
        //             The Scores
        //             for the game: Human scored $ { humanScore }: Computer Scored $ { computerScore }
        //             `);

        // const playGame = () => {
        //     getHumanChoice;
        //     getComputerChoice();

    }
    playGame();



}
// } */

    // playGame()

    //gameWinner()






    /* Helper function. Assessing the winner or looser of the game after every play round.
    function gameWinner() {
        if (computerScore > humanScore) {
            console.log(`
                            The Winner of this round is the Computer Player!`)

        } else if (humanScore > computerScore) {
            console.log(`
                            The Winner of this round is the Human Player!`)
        } else {
            console.log('It\'s a tie game!')

        }








    //}




    //play round to compare selection
function playRound(playerSelection) {
    let computerPlay = computerSelection();
    let winningScore = 1;
    let loosingScore = 0;
   
    let gameOutput = document.querySelector('.selection-output-game');
    let humanScore = document.querySelector('.score-output-human');
    let computerScore = document.querySelector('.score-output-computer')
    if (playerSelection === computerPlay) {
        gameOutput.textContent = "It's a tie!";
        humanScore.textContent = `Human player scores: ${loosingScore}`;
        computerScore.textContent = `Computer scores: ${loosingScore}`;
        return ("It's a tie!");
    } else if ((playerSelection === 'rock') && (computerPlay === 'scissors')) {
        gameOutput.textContent = `You win! Rock beats scissors`;
        humanScore.textContent = `Human player scores: ${winningScore}`;
        computerScore.textContent = `Computer scores: ${loosingScore}`;
        humanScore++;
        // console.log(`Score: Human Player scores $ { winningScore }: Computer Player $ { loosingScore });            
        return ("You win! Rock beats scissors");
    } else if (playerSelection === 'rock' && computerPlay === 'paper') {
        gameOutput.textContent = `You loose! Paper beats Rock`;
        humanScore.textContent = `Human player scores:${loosingScore}`;
        computerScore.textContent = `Computer scores:${winningScore}`;
        computerScore++;
        // console.log(`Score: Human Player scores ${loosingScore }: Computer Player ${winningScore++}`)
        return ("You lose! Paper beats rock");
    } else if (playerSelection === "paper" && computerPlay === 'rock') {
        gameOutput.textContent = `You win! Paper beats Rock`;
        humanScore.textContent = `Human player scores:${winningScore}`;
        computerScore.textContent = `Computer scores:${loosingScore}`;
        humanScore++;
        // console.log(`Score: Human Player scores $ { winningScore }: Computer Player $ { loosingScore }`)
        return ("You win! Paper beats rock");
    } else if (playerSelection === 'paper' && computerPlay === 'scissors') {
        gameOutput.textContent = `You loose! Scissors beats Paper`;
        humanScore.textContent = `Human player scores ${loosingScore}`;
        computerScore.textContent = `Computer scores ${winningScore}`;
        computerScore++
        // console.log(`Score: Human Player scores $ { loosingScore }: Computer Player $ { winningScore }`)
        return ("You lose! Scissors beat paper");
    } else if (playerSelection === 'scissors' && computerPlay === 'paper') {
        gameOutput.textContent = `You win! Scissors beat paper`;
        humanScore.textContent = `Human player scores ${winningScore}`;
        computerScore.textContent = `Computer scores ${loosingScore}`;
        humanScore++;
        // console.log(`Score: Human Player scores $ { winningScore }: Computer Player ${loosingScore}`)
        return ("You win! Scissors beat paper");
    } else if (playerSelection === 'scissors' && computerPlay === 'rock') {
        gameOutput.textContent = `You lose!Rock beats scissors`;
        humanScore.textContent = `Human player scores ${loosingScore}`;
        computerScore.textContent = `Computer scores ${winningScore}`;
        computerScore++;
        // console.log(`Score: Human Player scores $ { loosingScore }: Computer Player $ { winningScore }`)
        return ("You lose!Rock beats scissors");
    } else if (playerSelection === '') {
        humanScore.textContent = `Please select your preffered weapon`
        return 'Invalid';
    }


}







//selecting human choice and calling the play round to compare choices.
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        playRound(button.value)
        let outputDisplay = document.querySelector('.selection-output-human')
        outputDisplay.textContent = `You have selected ${button.value}`;

    });

});




//continue from here. How to loop for the game to play five times 








// // Helper function. Assessing the winner or looser of the game after every play round.
// function gameWinner() {
//     let scoreWinner = document.querySelector('.score-winner');
//     if (computerScore > humanScore) {
//         scoreWinner.textContent = `Congratulations! The Winner of this round is the Computer Player!`
//             //console.log(`The Winner of this round is the Computer Player!`)
//     } else if (humanScore > computerScore) {
//         scoreWinner.textContent = `The Winner of this round is the Computer Player!`
//             //console.log(`Congratulations! The Winner of this round is the Human Player!`)
//     } else {
//         scoreWinner.textContent = `It\'s a tie game!`
//             //console.log('It\'s a tie game!')
//     }
// }

// gameWinner();



//get computer choice randomly

function computerSelection() {

    //randomly selects a choice from the array
    let randomChoice = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * randomChoice.length);
    let computerDisplay = document.querySelector('.selection-output-computer')
    if (choice === 0) {
        computerDisplay.textContent = 'The Computer selected Rock';
        console.log('Computer selected rock')
        return 'rock';
    } else if (choice === 1) {
        computerDisplay.textContent = 'The Computer selected Paper'
        console.log('Computer selected Paper')
        return 'paper'
    } else if (choice === 2) {
        computerDisplay.textContent = 'The Computer selected Scissors'
        console.log('Computer selected Scissors')
        return 'scissors';
    } else {
        return 'Nothing selected';
    }
}