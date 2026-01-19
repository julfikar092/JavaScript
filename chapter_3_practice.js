// factorial
/*
const prompt = require("prompt-sync")();

let num = prompt("Enter a number: ");

num = Number.parseInt(num);

let factorial = 1;

for (let i = 1; i <= num; i++) {
  factorial = factorial * i;
}

console.log(factorial);

*/

// while loop

/*
const prompt = require("prompt-sync")();

let num = prompt("Enter number: ");

num = Number.parseInt(num);
let i = 1;
while (i <= num) {
  console.log(i);
  i++;
}
*/

// Ques - 1: Object; marks of a student: using "for loop"

/*
const marks = {
  math: 92,
  english: 88,
  gk: 90,
  physics: 95,
  chemistry: 88,
};

for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(Object.keys(marks)[i], ": ", marks[Object.keys(marks)[i]]);
}

*/

// Ques: 2 - Q1 using "for in loop"

/*
for (let key in marks) {
  console.log(key, ":", marks[key]);
}
*/

// ques : 3 - i will use while loop for guessing correct number using function
/*
function guessing() {
  const prompt = require("prompt-sync")();
  let guessing_number = 56;
  let num = prompt("Guess the number: (50-60): ");
  num = Number.parseInt(num);

  if (num == guessing_number) console.log("You are right");
  else
    while (num != guessing_number) {
      console.log("Please try again: ");
      guessing();
    }
}

guessing();

*/

// ques : 3 - while loop without funtion
/*
const prompt = require("prompt-sync")();
let correct_Number = 4;
let num;
num = Number.parseInt(num);

while (num != correct_Number) {
  num = prompt("Guess the number: (1-10): ");
}

console.log("The number is correct now");
*/

// Ques 5: mean using funtion

/*
function mean(a, b, c, d, e) {
  return (a + b + c + d + e) / 5;
}

*/

// shortcut method

const mean = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 5;
};

console.log(mean(1, 2, 3, 4, 5));
