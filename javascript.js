let RoundResult;
let Pscore = 0;
let CPUscore = 0;

const consol = document.querySelector(".console");
const buttons = document.querySelectorAll("button");
const score = document.querySelector(".score");

score.innerText = "0 - 0";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    !checkRound() ? game(button.id) : newGame(button.id);
  });
});

function PlayRound(PlayerSelection, CPUSelection) {
  if (PlayerSelection == CPUSelection) {
    consol.innerText += "tie \r\n";
    RoundResult = 0;
  } else if (WinCombo[PlayerSelection] == CPUSelection) {
    consol.innerText += `You win ${PlayerSelection} beats ${CPUSelection} \r\n`;
    RoundResult = "Pscore";
  } else {
    consol.innerText += `You lose ${PlayerSelection} loses to ${CPUSelection} \r\n`;
    RoundResult = "CPUscore";
  }
}
function ComputerPlay() {
  let choice = ["rock", "paper", "scissor"];
  return choice[Math.floor(choice.length * Math.random())];
}

const WinCombo = {
  rock: "scissor",

  paper: "rock",

  scissor: "paper",
};

function game(choix) {
  PlayRound(choix, ComputerPlay());
  if (RoundResult) {
    if (RoundResult == "Pscore") {
      Pscore++;
    } else {
      CPUscore++;
    }
    updateScore();
  }

  console.log(Pscore, CPUscore);
  Pscore == CPUscore
    ? console.log("you tied")
    : Pscore > CPUscore
    ? console.log("Player won")
    : console.log("CPU won");
}
function checkRound() {
  if (Pscore == 5 || CPUscore == 5) {
    return true;
  } else {
    return false;
  }
}
function updateScore() {
  score.innerText = Pscore + "-" + CPUscore;
}

function newGame(choice) {
  Pscore = 0;
  CPUscore = 0;
  consol.innerText = "";
  score.innerText = "0 - 0";
  game(choice);
}
