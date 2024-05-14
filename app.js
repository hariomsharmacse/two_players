const userName1 = document.getElementById("username1");
const userName2 = document.getElementById("username2");
const attackBtn1 = document.getElementById("attack1");
const attackBtn2 = document.getElementById("attack2");
const proPower1 = document.getElementById("power1");
const proPower2 = document.getElementById("power2");
const playerScore1 = document.getElementById("score1");
const playerScore2 = document.getElementById("score2");
const health1 = document.getElementById("health1");
const health2 = document.getElementById("health2");
const playerwins1 = document.getElementById("player1wins");
const playerwins2 = document.getElementById("player2wins");
const newGame = document.getElementById("newGame");
const resetBtn = document.getElementById("resetGame");
let score1 = 0;
let score2 = 0;
let playerWin1 = 0;
let playerWin2 = 0;
let playerturn1 = false;

userName1.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    userName1.value = userName1.value;
    userName1.style.fontWeight = "500";
    playerwins1.innerText = `${userName1.value} Wins: 0`;
    userName1.disabled = true;
    health1.innerText = `${userName1.value} Health: 100`;
  }
});

userName2.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    userName2.value = userName2.value;
    userName2.style.fontWeight = "500";
    playerwins2.innerText = `${userName2.value} Wins: 0`;
    userName2.disabled = true;
    health2.innerText = `${userName2.value} Health: 100`;
  }
});

attackBtn1.addEventListener("click", () => {
  let arr = [10, 20, 30, 40, 50];
  let num = arr[Math.floor(Math.random() * arr.length)];
  proPower2.value = proPower2.value - num;
  score1 = score1 + num;

  if (score1 <= 100) {
    playerScore1.innerText = `Score: ${score1}`;
    health2.innerText = `${userName2.value} Health: ${100 - score1}`;
  } else {
    playerScore1.innerText = `Score: 100`;
    health2.innerText = `${userName2.value} Health: 0`;
  }
  // console.log(num)
  playerturn1 = true;
  turn();
  checkWin();
});

attackBtn2.addEventListener("click", () => {
  let arr = [10, 20, 30, 40, 50];
  let num = arr[Math.floor(Math.random() * arr.length)];
  proPower1.value = proPower1.value - num;
  score2 = score2 + num;
  if (score2 <= 100) {
    playerScore2.innerText = `Score: ${score2}`;
    health1.innerText = `${userName1.value} Health: ${100 - score2}`;
  } else {
    playerScore2.innerText = `Score: 100`;
    health1.innerText = `${userName1.value} Health: 0`;
  }
  // console.log(num);
  playerturn1 = false;
  turn();
  checkWin();
});

function turn() {
  if (playerturn1) {
    attackBtn1.disabled = true;
    attackBtn2.disabled = false;
    attackBtn1.style.backgroundColor = "Red";
    attackBtn2.style.backgroundColor = "Green";
    attackBtn1.style.color = "white";
    attackBtn2.style.color = "white";
  } else {
    attackBtn1.disabled = false;
    attackBtn2.disabled = true;
    attackBtn2.style.backgroundColor = "Red";
    attackBtn1.style.backgroundColor = "Green";
    attackBtn1.style.color = "white";
    attackBtn2.style.color = "white";
  }
}

function checkWin() {
  if (score1 >= 100) {
    console.log("Player 1 wins");
    playerWin1++;
    playerwins1.innerText = `${userName1.value} Wins: ${playerWin1}`;
    attackBtn1.disabled = true;
    attackBtn2.disabled = true;
    newGame.style.display = "block";
    finalWinner();
  } else if (score2 >= 100) {
    console.log("player 2 wins");
    playerWin2++;
    playerwins2.innerText = `${userName2.value} Wins: ${playerWin2}`;
    attackBtn1.disabled = true;
    attackBtn2.disabled = true;
    newGame.style.display = "block";
    finalWinner();
  }
}

newGame.addEventListener("click", () => {
  proPower1.value = 100;
  proPower2.value = 100;
  score1 = 0;
  score2 = 0;
  health1.innerText = `Player 1 Health: 100`;
  health2.innerText = `Player 2 Health: 100`;
  playerScore1.innerText = `Score: 100`;
  playerScore2.innerText = `Score: 100`;
  newGame.style.display = "none";
  if (playerturn1) {
    attackBtn1.disabled = true;
    attackBtn2.disabled = false;
  } else {
    attackBtn1.disabled = false;
    attackBtn2.disabled = true;
  }
});

function finalWinner() {
  if (playerWin1 + playerWin2 >= 5) {
    if (playerWin1 > playerWin2) {
      userName1.value = `${userName1.value} wins🎉🎉`;
      newGame.style.display = "none";
      attackBtn1.disabled = true;
      attackBtn2.disabled = true;
      attackBtn1.style.background = "rgba(255, 255, 255, 0.15)";
      attackBtn2.style.background = "rgba(255, 255, 255, 0.15)";
      attackBtn1.style.color = "rgb(58, 56, 56)";
      attackBtn2.style.color = "rgb(58, 56, 56)";
      resetBtn.style.backgroundColor = "green";
      resetBtn.style.color = "white";
    } else if (playerWin2 > playerWin1) {
      userName2.value = `${userName2.value} wins🎉🎉`;
      newGame.style.display = "none";
      attackBtn1.disabled = true;
      attackBtn2.disabled = true;
      attackBtn1.style.background = "rgba(255, 255, 255, 0.15)";
      attackBtn2.style.background = "rgba(255, 255, 255, 0.15)";
      attackBtn1.style.color = "rgb(58, 56, 56)";
      attackBtn2.style.color = "rgb(58, 56, 56)";
      resetBtn.style.backgroundColor = "green";
      resetBtn.style.color = "white";
    }
  }
}

resetBtn.addEventListener("click", () => {
  resetBtn.style.background = "rgba(255, 255, 255, 0.15)";
  resetBtn.style.color = "rgb(58, 56, 56)";
  score1 = 0;
  score2 = 0;
  playerWin1 = 0;
  playerWin2 = 0;
  playerturn1 = false;
  userName1.value = "";
  userName2.value = "";
  health1.innerText = "Player 1 Health: 100";
  health2.innerText = "Player 2 Health: 100";
  playerScore1.innerText = "Score: 0";
  playerScore2.innerText = "Score: 0";
  attackBtn1.disabled = false;
  attackBtn2.disabled = false;
  proPower1.value = 100;
  proPower2.value = 100;
  playerwins1.innerText = `Wins: 0`;
  playerwins2.innerText = `Wins: 0`;
  userName1.disabled = false;
  userName2.disabled = false;
  attackBtn1.style.background = "rgba(255, 255, 255, 0.15)";
  attackBtn2.style.background = "rgba(255, 255, 255, 0.15)";
  attackBtn1.style.color = "rgb(58, 56, 56)";
  attackBtn2.style.color = "rgb(58, 56, 56)";
});
