/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//define variables to hold scores

var scores, roundScore, activePlayer, gamePlaying;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
// gamePlaying = true;


// innit();
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
        var dice = Math.floor(Math.random() * 6) + 1;

        // console.log(dice.);
        // 2. Display the result- Correct dice number;
        var diceDOM = document.querySelector(".dice")
        diceDOM.style.display = "block";
        diceDOM.src = "dice-" + dice + ".png";

        // 3. Updates the round score if the rolled number is not a 1

        if (dice !== 1) {
            //add score
            roundScore += dice;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
            // console.log(roundScore);

        } else {
            //Next
            nextPlayer();
        }
    }

});


document.querySelector(".btn-hold").addEventListener("click", function () {
    if (gamePlaying) {
        // 1. add current score to global score when HOLD if pressed
        scores[activePlayer] += roundScore;
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

        // 2. Update user interface
        // nextPlayer();

        //3.check if player wins


        if (scores[activePlayer] >= 20) {
            document.querySelector("#name-" + activePlayer).textContent = "Winner";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            document.querySelector(".dice").style.display = "none";

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
    document.querySelector(".dice").style.display = "none";

}

document.querySelector(".btn-new").addEventListener("click", innit);



function innit() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector(".dice").style.display = "none";

    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";

    document.querySelector("#name-" + activePlayer).textContent = "Winner";
    document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
    document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");

    document.querySelector(".dice").style.display = "none";

    document.querySelector("#name-0").textContent = "Player 1";
    document.querySelector("#name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-" + activePlayer + "-panel").classList.add("active");

}