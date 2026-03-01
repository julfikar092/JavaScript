let count = 0;
for (let i = 0; i < 5; i++) {
  let random_number = Math.floor(Math.random() * 5 + 1);

  let guessing_number = parseInt(prompt("Enter a number between 1-5"));

  if (random_number == guessing_number) {
    console.log("You guessed correctly!");
    console.log(`Your guessed number is: ${guessing_number}`);
    console.log(`Random number is: ${random_number}`);
    count += 1;
  } else {
    console.log("Wrong!");
    console.log(`Your guessed number is: ${guessing_number}`);
    console.log(`Random number is: ${random_number}`);
  }
}

console.log(`You guessed ${count} times correctly`);
