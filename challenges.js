/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//define variables to hold scores

var scores, roundScore, activePlayer, gamePlaying, lastDice;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
// gamePlaying = true;


innit();
//put scores for both players in array


//use math.randon function to generate random numbers from 0-6



//sends the dice numbers the console




// //sets dice display to none




//A call bacck function is called by another function. It is a function
// passed intp another function as an arguement

// Anonymous function doesnt have a name so it cannot be reused

//makes roll dice roll the dice
document.querySelector(".btn-roll").addEventListener("click", function () {

    if (gamePlaying) {
        // 1. Random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;


        // console.log(dice.);
        // 2. Display the result- Correct dice number;

        document.getElementById("dice-1").style.display = "block";
        document.getElementById("dice-2").style.display = "block";
        var diceDOM = document.querySelector(".dice")
        diceDOM.style.display = "block";
        document.getElementById("dice-1").src = "dice-" + dice1 + ".png";
        document.getElementById("dice-2").src = "dice-" + dice2 + ".png";

        if (dice1 !== 1 && dice2 !== 1) {
            //add score
            roundScore += dice1 + dice2;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
            // console.log(roundScore);

        } else {
            //Next
            nextPlayer();
        }

        //player losses turn of 2 is played in a row 
        // if (dice === 6 && lastDice === 6) {
        //     scores[activePlayer] = 0;
        //     document.querySelector("#score-" + activePlayer).textContent = "0";
        //     nextPlayer();


        // }

        // // 3. Updates the round score if the rolled number is not a 1
        // else if (dice !== 1) {
        //     //add score
        //     roundScore += dice;
        //     document.querySelector("#current-" + activePlayer).textContent = roundScore;
        //     // console.log(roundScore);

        // } else {
        //     //Next
        //     nextPlayer();
        // }

        // lastDice = dice;


    }

});


document.querySelector(".btn-hold").addEventListener("click", function () {
    if (gamePlaying) {
        // 1. add current score to global score when HOLD if pressed
        scores[activePlayer] += roundScore;
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

        // 2. Update user interface
        // nextPlayer();
        var input, setTotal;
        //3.check if player wins
        input = document.querySelector(".final-score").value;
        // console.log(setTotal);

        if (input) {
            setTotal = input;
        } else {
            setTotal = 50;
        }

        if (scores[activePlayer] >= setTotal) {
            document.querySelector("#name-" + activePlayer).textContent = "Winner";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            document.getElementById("dice-1").style.display = "none";
            document.getElementById("dice-2").style.display = "none";

            gamePlaying = false;

        } else {
            nextPlayer();
        }
    }



});
// document.querySelector("#current-" + activePlayer).innerHTML = dice;

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    //puts active class to the current player

    document.querySelector('.player-0-panel').classList.toggle("active");
    document.querySelector('.player-1-panel').classList.toggle("active");
    document.getElementById("dice-1").style.display = "none";
    document.getElementById("dice-2").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", innit);



function innit() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;


    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    // input = document.querySelector(".final-score").value = " ";

    document.querySelector("#name-" + activePlayer).textContent = "Winner";
    document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
    document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");

    document.getElementById("dice-1").style.display = "none";
    document.getElementById("dice-2").style.display = "none";

    document.querySelector("#name-0").textContent = "Player 1";
    document.querySelector("#name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-" + activePlayer + "-panel").classList.add("active");

}