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