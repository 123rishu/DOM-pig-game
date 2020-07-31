/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
//var winningScore = 100;



var scores, roundScore, activePlayer,gamePlaying, dice , dice2;
var prev = 0;
init();

document.querySelector('.btn-roll').addEventListener('click', function() {
	if(gamePlaying) {
		//1.Random number
		var dice = Math.floor(Math.random() * 6) + 1;
		var dice2 = Math.floor(Math.random() * 6) + 1;
	
		//storeAndCheck(dice);
		
		
		//2.Display the result
		var diceDOM1 = document.querySelector('.dice');
		var diceDOM2 = document.querySelector('.dice2');
		diceDOM1.style.display = 'block';
		diceDOM2.style.display = 'block';
		diceDOM1.src = 'dice-' + dice + '.png';
		diceDOM2.src = 'dice-' + dice2 + '.png';

		//3.Update the round score if the rolled number was not a 1.
		if(dice !== 1 && dice2!==1) {
			//Add dice number in round score and then display that in current score
			roundScore = roundScore + dice;
			roundScore = roundScore + dice2;

			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		}else {
			nextPlayer();
		}
	}
	
});

document.querySelector('.btn-hold').addEventListener('click', function() {
	if(gamePlaying) {
			//Add current score to global score
		scores[activePlayer] += roundScore;

		//Update the UI
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		var input = document.querySelector('.final-score').value;
		var winningScore;
		//Undefined, 0 , null or '' are coerced as false
		//Anything else is coerced as true

		if(input) {
			winningScore = input;
		} else {
			winningScore = 100;
		}

		//Check if player won the game
		if( scores[activePlayer] >= winningScore) {
			document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.dice2').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
			//Next player
			nextPlayer();
		}
	}
	

});

document.querySelector('.btn-new').addEventListener('click', init);


function init() {
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	//winningScore = prompt("Please enter the winning score that you want", "100");
	//if (winningScore === null) {
	//	winningScore = 100;
	//}
	document.querySelector('.dice').style.display = 'none';
	document.querySelector('.dice2').style.display = 'none';

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('#name-0').textContent = 'Player 1';
	document.querySelector('#name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');

}

function nextPlayer() {
	//Next Player 
		//Swap Active Player
		//current dono ke zero
		//active class toggle kardi hai
		//bich ka dice gayab
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;

		document.querySelector('#current-0').textContent = 0;
		document.querySelector('#current-1').textContent = 0;

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.dice2').style.display = 'none';
}


/*
function storeAndCheck(dice) {
	if(dice === 6 && prev === 6){
			roundScore = 0;
			scores[activePlayer]= 0;
			document.querySelector('#score-' + activePlayer).textContent = 0;
			document.querySelector('#current-' + activePlayer).textContent = 0;
			nextPlayer();
		} else {
			prev = dice;
		}
}
*/

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x= document.querySelector('#score-0').textContent;
//console.log(x);



//document.getElementById("myText").value = "Johnny Bravo";

/*

document.getElementById('txt').value = "Enter the winning total which u want";


function getVal() {
	
}
var txt = document.getElementById('txt').value;
if( txt === null) {
	txt = 100;
*/







