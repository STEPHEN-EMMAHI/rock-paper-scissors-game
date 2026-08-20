import { userChoosePaper } from "../model/paper.js";
import { userChooseRock } from "../model/rock.js";
import { userChooseScissors } from "../model/scissors.js";

const USER_ROCK_BUTTON = document.getElementById("user-rock-button");
USER_ROCK_BUTTON.addEventListener("click", userChooseRock);

const USER_PAPER_BUTTON = document.getElementById("user-paper-button");
USER_PAPER_BUTTON.addEventListener("click", userChoosePaper);

const USER_SCISSORS_BUTTON = document.getElementById("user-scissors-button");
USER_SCISSORS_BUTTON.addEventListener("click", userChooseScissors);
