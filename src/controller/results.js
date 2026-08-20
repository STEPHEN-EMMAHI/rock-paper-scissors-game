import { IMAGES } from "../model/computer.js";
import { computerSelectChoice } from "../model/computer.js";
import { setGameOver } from "./game-state.js";

export function displayResults(playerChoice) {
  const RESULTS = document.querySelector(".results");
  const RIGHT_DEFAULT_IMG = document.querySelector(".right-default-img");

  // pass the returned value of the computer choice to a variable
  // rock or paper or scissors
  const COMPUTER_CHOICE = computerSelectChoice();

  // update computer image directly
  RIGHT_DEFAULT_IMG.src = IMAGES[COMPUTER_CHOICE];

  if (playerChoice === COMPUTER_CHOICE) {
    RESULTS.textContent = "DRAW";
  } else if (playerChoice === "rock" && COMPUTER_CHOICE === "scissors") {
    RESULTS.textContent = "YOU WIN";
  } else if (playerChoice === "scissors" && COMPUTER_CHOICE === "rock") {
    RESULTS.textContent = "COMPUTER WINS";
  } else if (playerChoice === "scissors" && COMPUTER_CHOICE === "paper") {
    RESULTS.textContent = "YOU WIN";
  } else if (playerChoice === "paper" && COMPUTER_CHOICE === "scissors") {
    RESULTS.textContent = "COMPUTER WINS";
  } else if (playerChoice === "rock" && COMPUTER_CHOICE === "paper") {
    RESULTS.textContent = "COMPUTER WINS";
  } else if (playerChoice === "paper" && COMPUTER_CHOICE === "rock") {
    RESULTS.textContent = "YOU WIN";
  }

  setGameOver(true);
}
