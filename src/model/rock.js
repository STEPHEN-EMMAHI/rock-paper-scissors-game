import { computerSelectChoice } from "./computer.js";
import { IMAGES } from "./computer.js";
import { displayResults } from "../controller/results.js";
import { isGameOver } from "../controller/game-state.js";

export function userChooseRock() {
  // if game is over, return
  if (isGameOver) return;

  const LEFT_DEFAULT_IMG = document.querySelector(".left-default-img");

  // update the players choice
  LEFT_DEFAULT_IMG.src = IMAGES.rock;

  // display results
  displayResults("rock");
}
