const btn = document.getElementById("getStarted")
const player1 = document.getElementById("player1")
const player2 = document.getElementById("player2");

btn.onclick = function () {
   document.getElementById("player1Name").append(player1.value);
   document.getElementById("player2Name").append(player2.value);
}

const start = document.getElementById("start");

let score1 = 0;
let score2 = 0;

document.getElementById("scorePlayer1").innerHTML = score1;
document.getElementById("scorePlayer2").innerHTML = score2;

start.onclick = function () {
   let rndNumberForPlayer1 = Math.floor(Math.random() * 10);
   document.getElementById("randomNumberPlayer1").innerHTML = rndNumberForPlayer1;
   let rndNumberForPlayer2 = Math.floor(Math.random() * 10);
   document.getElementById("randomNumberPlayer2").innerText = rndNumberForPlayer2;

   if (rndNumberForPlayer1 > rndNumberForPlayer2) {
      score1 += 1;

   } else if (rndNumberForPlayer2 > rndNumberForPlayer1) {
      score2 += 1;
   } else {
      score1 = score1;
      score2 = score2;
   }

   if (score1 === 5 || score2 === 5) {
      score1 = 0;
      score2 = 0;
      alert("win")
   }
   document.getElementById("scorePlayer1").innerHTML = score1;
   document.getElementById("scorePlayer2").innerHTML = score2;


}


