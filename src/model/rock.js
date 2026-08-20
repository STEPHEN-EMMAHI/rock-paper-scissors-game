import { computerSelectChoice } from "./computer.js";
import { IMAGES } from "./computer.js";
import { displayResults } from "../controller/results.js";
import { isGameOver } from "../controller/game-state.js";

export function userChooseRock() {
  // if game is over, return
  if (isGameOver) return;

  const LEFT_DEFAULT_IMG = document.querySelector(".left-default-img");

  LEFT_DEFAULT_IMG.src = IMAGES.rock;

  // generate a random computer image
  computerSelectChoice();

  // display results
  displayResults("rock");
}
