
let whoWins = document.querySelector('#who-wins');
let playerScoreText = document.querySelector('#player-score');
let computerScoreText = document.querySelector('#computer-score');
let totalText = document.querySelector('#total');



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
}




function game() {

	let buttons = document.querySelectorAll('button');
	let playerSelection="";
	let result = "";
	let count = 0;
	let playerScore = 0;
	let computerScore = 0;

		buttons.forEach(function(btn) {
			btn.addEventListener('click', function(e) {
			e.preventDefault();

			const computerSelection = computerPlay();

			console.log(computerSelection);
			playerSelection =  btn.getAttribute('id');
			console.log(playerSelection);
			result = playRound(playerSelection, computerSelection);
			whoWins.textContent = result;
			if (result.indexOf('Wins') != -1) {
				playerScore++;
				playerScoreText.textContent = playerScore;
				if (playerScore == 5) {
					totalText.textContent = "You Wins!";
					playerScore = 0;
					computerScore = 0;
					playerScoreText.textContent = playerScore;
					computerScoreText.textContent = computerScore;
				} else {
					totalText.textContent = "";
				}

			}
			if (result.indexOf('Lose') != -1) {
				computerScore++;
				computerScoreText.textContent = computerScore;
				if (computerScore == 5) {
					totalText.textContent = "You lost!";
					computerScore = 0;
					playerScore = 0;
					computerScoreText.textContent = computerScore;
					playerScoreText.textContent = playerScore;
				} else {
					totalText.textContent = "";
				}

			}

		})
	});

}


game();
