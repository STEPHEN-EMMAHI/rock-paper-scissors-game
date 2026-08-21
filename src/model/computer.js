// import the images
import rockImg from "../assets/rock.jpeg";
import paperImg from "../assets/paper.jpeg";
import scissorsImg from "../assets/scissor.jpeg";
import defaultImg from "../assets/default.jpeg";

// create an array to hold the choices
const CHOICE = ["rock", "paper", "scissors"];

// create an object to hold the images
export const IMAGES = {
  rock: rockImg,
  paper: paperImg,
  scissors: scissorsImg,
  default: defaultImg,
};

export function computerSelectChoice() {
  return new Promise((resolve) => {
    const RIGHT_DEFAULT_IMG = document.querySelector(".right-default-img");

    // start shuffling every image after 0.5s
    const SHUFFLE_INTERVAL = setInterval(() => {
      const TEMP_INDEX = Math.floor(Math.random() * CHOICE.length);
      const TEMP_CHOICE = CHOICE[TEMP_INDEX];
      RIGHT_DEFAULT_IMG.src = IMAGES[TEMP_CHOICE];
    }, 500);

    // stop after 2s and pick a choice
    setTimeout(() => {
      clearInterval(SHUFFLE_INTERVAL);
      const RANDOM_INDEX = Math.floor(Math.random() * CHOICE.length);
      const COMPUTER_CHOICE = CHOICE[RANDOM_INDEX];
      RIGHT_DEFAULT_IMG.src = IMAGES[COMPUTER_CHOICE];

      // return final choice
      resolve(COMPUTER_CHOICE);
    }, 1500);
  });
}
