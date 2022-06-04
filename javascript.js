function PlayRound(PlayerSelection, CPUSelection) {
    
    if (PlayerSelection == CPUSelection) { return "tie" }
    else if (WinCombo[PlayerSelection] == CPUSelection) { return `You win ${PlayerSelection} beats ${CPUSelection}`
        
    }
    else {
        return `You lose ${PlayerSelection} loses to ${CPUSelection}`
    }

}
function ComputerPlay() {
let choice = ['rock', 'paper', 'scissor'];
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
