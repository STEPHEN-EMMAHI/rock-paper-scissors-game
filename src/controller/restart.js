import { IMAGES } from "../model/computer.js";
import { setGameOver } from "./game-state.js";

export function RestartGame() {
  // reset the images are the right and left
  const LEFT_DEFAULT_IMG = document.querySelector(".left-default-img");
  const RIGHT_DEFAULT_IMG = document.querySelector(".right-default-img");
  const RESULTS = document.querySelector(".results");

  LEFT_DEFAULT_IMG.src = IMAGES.default;
  RIGHT_DEFAULT_IMG.src = IMAGES.default;
  RESULTS.textContent = "START GAME";
  setGameOver(false);
}
