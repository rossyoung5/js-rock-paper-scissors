var player1Name = window.prompt("What is your name?");

var player1Wins = 0,
    player2Wins = 0;

function playGame(choice) {
    function getHand() {
        var hands = ["rock", "paper", "scissors"];
        return hands[parseInt(Math.random()*10)%3];
    }
    var player1 = {
        name: player1Name,
        hand: choice
    }
    var player2 = {
        name: "Rocco",
        hand: getHand()
    }
    
    function newGame(p1, p2) {

    function playRound(x, y) {

        var playerHand1 = x.hand,
            playerHand2 = getHand(),
            playerName1 = x.name,
            playerName2 = y.name,
            commonMsg = playerName1 + ": " + playerHand1 + " | " + playerName2 + ": " + playerHand2,
            player1WinsMsg = commonMsg + " | " + playerName1 + " wins!",
            player2WinsMsg = commonMsg + " | " + playerName2 + " wins!";
      
        if (playerHand1 === "rock" && playerHand2 === "scissors") {
          document.querySelector("#results").innerHTML = player1WinsMsg;
        //   console.log(player1WinsMsg);
          return x;
        } else if (playerHand1 === "scissors" && playerHand2 === "paper"){
            document.querySelector("#results").innerHTML = player1WinsMsg;
        //   console.log(player1WinsMsg);
          return x;
        } else if (playerHand1 === "paper" && playerHand2 === "rock") {
            document.querySelector("#results").innerHTML = player1WinsMsg;
        //   console.log(player1WinsMsg);
          return x;
        } else if (playerHand1 === playerHand2) {
            document.querySelector("#results").innerHTML = commonMsg + " | It's a tie!";
        //   console.log(commonMsg + " | It's a tie!");
          return null;
        } else {
            document.querySelector("#results").innerHTML = player2WinsMsg;
        //   console.log(player2WinsMsg);
          return y;
        }
      }
      var wins = playRound(p1, p2);

       if (wins === null) {
            console.log("");
       } else if (wins.name === p1.name) {
       player1Wins++;
       document.querySelector("#p1-wins").innerHTML = player1Wins;
       } else if (wins.name === p2.name) {
       player2Wins++;
       document.querySelector("#p2-wins").innerHTML = player2Wins;
       }
    }

    newGame(player1, player2);

  msg = player1.name + ": " + player1Wins + " | " + player2.name + ": " + player2Wins;
  p1Msg = msg + " ==> " + player1.name + " wins the game!";
  p2Msg = msg + " ==> " + player2.name + " wins the game!";
  if (player1Wins === 5) {
    document.querySelector("#congrats").innerHTML = p1Msg.toUpperCase();
    return player1;
  } else if (player2Wins === 5) {
    document.querySelector("#congrats").innerHTML = p2Msg.toUpperCase();
    return player2;
  }
}

document.getElementById("paper").onclick = function () {
    playGame("paper");
};

document.getElementById("rock").onclick = function () {
    playGame("rock");
};

document.getElementById("scissors").onclick = function () {
    playGame("scissors");
};