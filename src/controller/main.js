import { userChoosePaper } from "../model/paper.js";
import { userChooseRock } from "../model/rock.js";
import { userChooseScissors } from "../model/scissors.js";
import { RestartGame } from "./restart.js";

// player clicks on rock button then add functionality
const USER_ROCK_BUTTON = document.getElementById("user-rock-button");
USER_ROCK_BUTTON.addEventListener("click", userChooseRock);

// player clicks on paper-button then add functionality
const USER_PAPER_BUTTON = document.getElementById("user-paper-button");
USER_PAPER_BUTTON.addEventListener("click", userChoosePaper);

// player clicks on scissors button then add functionality
const USER_SCISSORS_BUTTON = document.getElementById("user-scissors-button");
USER_SCISSORS_BUTTON.addEventListener("click", userChooseScissors);

// restart game
const RESTART_BUTTON = document.querySelector(".reset-button");
RESTART_BUTTON.addEventListener("click", RestartGame);
