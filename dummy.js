/get human choice

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