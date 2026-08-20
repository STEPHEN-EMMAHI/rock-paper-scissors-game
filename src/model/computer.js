// create an array to hold the choices
const CHOICE = ["rock", "paper", "scissors"];

// create an object to hold the images
export const IMAGES = {
  rock: "src/assets/rock.jpeg",
  paper: "src/assets/paper.jpeg",
  scissors: "src/assets/scissor.jpeg",
  default: "src/assets/default.jpeg",
};

export function computerSelectChoice() {
  // generate a random number from the array
  const RANDOM_INDEX = Math.floor(Math.random() * CHOICE.length);
  const COMPUTER_CHOICE = CHOICE[RANDOM_INDEX];

  // update the computer image from the object
  const RIGHT_DEFAULT_IMG = document.querySelector(".right-default-img");
  RIGHT_DEFAULT_IMG.src = IMAGES[COMPUTER_CHOICE];

  return COMPUTER_CHOICE;
}
