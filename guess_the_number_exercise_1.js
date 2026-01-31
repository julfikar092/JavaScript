const prompt = require("prompt-sync")();

let main_number = Math.floor(Math.random() * 101);
let guess_number;

let number_of_chances = 0;

//console.log(main_number);

do {
  guess_number = prompt("Enter any number from 1-100: ");
  guess_number = Number.parseInt(guess_number);
  if (guess_number > main_number) {
    console.log(
      "The guessed number is greater than original number; Please try again",
    );
  } else if (guess_number < main_number) {
    console.log(
      "The guessed number is smaller than original number; Please try again",
    );
  } else {
    console.log("You are right");
  }

  number_of_chances += 1;
  console.log("Total tried: ", number_of_chances);
} while (main_number != guess_number);
