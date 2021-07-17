function computerPlay() {
	let choice = ['rock', 'paper', 'scissors'];
	let randNum = Math.floor(Math.random() * 3);
	return choice[randNum];
}

function playRound(playerSelection, computerSelection) {
	
	if (playerSelection == 'rock' && computerSelection == 'rock' || 
		 playerSelection == 'paper' && computerSelection == 'paper' || 
		 playerSelection == 'scissors' && computerSelection == 'scissors') {
		return 'The Draw!';
	} 
	else if (playerSelection == 'rock' && computerSelection == 'paper') {
		return "You Lose! Paper beats Rock";
	} 
	else if (playerSelection == 'rock' && computerSelection == 'scissors') {
		return "You Wins! Scissors beats Rock";
	} 
	else if (playerSelection == 'paper' && computerSelection == 'rock') {
		return "You Wins! Paper beats Rock";
	} 
	else if (playerSelection == 'paper' && computerSelection == 'scissors') {
		return "You Lose! Paper beats Scissors";
	} 
	else if (playerSelection == 'scissors' && computerSelection == 'rock') {
		return "You Lose! Scissors beats Rock";
	} 
	else if (playerSelection == 'scissors' && computerSelection == 'paper') {
		return "You Wins! Paper beats Scissors";
	} 
	else {
		return "Unknown";
	}
}


function game() {
	for (let raund = 1; raund <= 5; raund++) {
		const playerSelection = prompt("Please enter the (rock or paper or scissors) up to: ").toLowerCase();
		const computerSelection = computerPlay();
		console.log(playRound(playerSelection, computerSelection));		
	}
}


game();
