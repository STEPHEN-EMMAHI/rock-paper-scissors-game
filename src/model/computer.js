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
    let changeCount = 0;
    let lastIndex = -1;

    // start shuffling every image after 0.5s
    const SHUFFLE_INTERVAL = setInterval(() => {
      let randomIndex;

      // ensure the next image is never the same as the current
      // image
      do {
        randomIndex = Math.floor(Math.random() * CHOICE.length);
      } while (randomIndex === lastIndex);

      lastIndex = randomIndex;
      const TEMP_CHOICE = CHOICE[randomIndex];

      RIGHT_DEFAULT_IMG.src = IMAGES[TEMP_CHOICE];
      changeCount++;

      if (changeCount === 3) {
        clearInterval(SHUFFLE_INTERVAL);

        // lock in final choice
        const FINAL_INDEX = Math.floor(Math.random() * CHOICE.length);
        const COMPUTER_CHOICE = CHOICE[FINAL_INDEX];
        RIGHT_DEFAULT_IMG.src = IMAGES[COMPUTER_CHOICE];

        // return final choice
        resolve(COMPUTER_CHOICE);
      }
    }, 900);
  });
}
