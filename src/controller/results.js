import { IMAGES } from "../model/computer.js";
import { computerSelectChoice } from "../model/computer.js";
import { setGameOver } from "./game-state.js";

let player_count = 0;
let computer_count = 0;

export async function displayResults(playerChoice) {
  const RESULTS = document.querySelector(".results");
  const RIGHT_DEFAULT_IMG = document.querySelector(".right-default-img");

  const PLAYER_SCORE = document.getElementById("player-score");
  const COMPUTER_SCORE = document.getElementById("computer-score");

  // pass the returned value of the computer choice to a variable
  // rock or paper or scissors
  const COMPUTER_CHOICE = await computerSelectChoice();

  // update computer image directly
  RIGHT_DEFAULT_IMG.src = IMAGES[COMPUTER_CHOICE];

  if (playerChoice === COMPUTER_CHOICE) {
    RESULTS.classList.remove("text-red-900");
    RESULTS.classList.remove("text-green-900");
    RESULTS.textContent = "DRAW";
  } else if (playerChoice === "rock" && COMPUTER_CHOICE === "scissors") {
    player_count++;
    RESULTS.textContent = "YOU WIN";
    RESULTS.classList.remove("text-red-900");
    RESULTS.classList.add("text-green-900");
    PLAYER_SCORE.textContent = `${player_count}`;
  } else if (playerChoice === "scissors" && COMPUTER_CHOICE === "rock") {
    computer_count++;
    RESULTS.textContent = "COMPUTER WINS";
    RESULTS.classList.remove("text-green-900");
    RESULTS.classList.add("text-red-900");
    COMPUTER_SCORE.textContent = `${computer_count}`;
  } else if (playerChoice === "scissors" && COMPUTER_CHOICE === "paper") {
    player_count++;
    RESULTS.textContent = "YOU WIN";
    RESULTS.classList.remove("text-red-900");
    RESULTS.classList.add("text-green-900");
    PLAYER_SCORE.textContent = `${player_count}`;
  } else if (playerChoice === "paper" && COMPUTER_CHOICE === "scissors") {
    computer_count++;
    RESULTS.textContent = "COMPUTER WINS";
    RESULTS.classList.remove("text-green-900");
    RESULTS.classList.add("text-red-900");
    COMPUTER_SCORE.textContent = `${computer_count}`;
  } else if (playerChoice === "rock" && COMPUTER_CHOICE === "paper") {
    computer_count++;
    RESULTS.textContent = "COMPUTER WINS";
    RESULTS.classList.remove("text-green-900");
    RESULTS.classList.add("text-red-900");
    COMPUTER_SCORE.textContent = `${computer_count}`;
  } else if (playerChoice === "paper" && COMPUTER_CHOICE === "rock") {
    player_count++;
    RESULTS.textContent = "YOU WIN";
    RESULTS.classList.remove("text-red-900");
    RESULTS.classList.add("text-green-900");
    PLAYER_SCORE.textContent = `${player_count}`;
  }

  setGameOver(true);
}
