let RoundResult;

function PlayRound(PlayerSelection, CPUSelection) {
  if (PlayerSelection == CPUSelection) {
    console.log("tie");
    RoundResult = 0;
  } else if (WinCombo[PlayerSelection] == CPUSelection) {
    console.log(`You win ${PlayerSelection} beats ${CPUSelection}`);
    RoundResult = "Pscore";
  } else {
    console.log(`You lose ${PlayerSelection} loses to ${CPUSelection}`);
    RoundResult = "CPUscore";
  }
}
function ComputerPlay() {
  let choice = ["rock", "paper", "scissor"];
  return choice[Math.floor(choice.length * Math.random())];
}
function GetChoice() {
  return prompt("rock paper or scissor").toLowerCase();
}
const WinCombo = {
  rock: "scissor",

  paper: "rock",

  scissor: "paper",
};

function game() {
  let Pscore = 0,
    CPUscore = 0;
  for (let index = 0; index < 5; index++) {
    PlayRound(GetChoice(), ComputerPlay());
    if (RoundResult) {
      if (RoundResult == "Pscore") {
        Pscore++;
      } else {
        CPUscore++;
      }
    }
  }
  console.log(Pscore, CPUscore);
  Pscore == CPUscore
    ? console.log("you tied")
    : Pscore > CPUscore
    ? console.log("Player won")
    : console.log("CPU won");
}
