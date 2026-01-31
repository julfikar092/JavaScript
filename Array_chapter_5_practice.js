// Ques 1: take user input and make array
/*
const prompt = require("prompt-sync")();
let num = [];

let highestNumber = prompt("Enter How many numbers in the array: ");

for (let i = 0; i < highestNumber; i++) {
  num[i] = prompt(`Number ${i + 1}: `);
}

console.log("The array is: ", num);
*/

// Ques 1: take user input and add to an array of numbers

/*
let numbers = [46, 98, 55, 88, 44, 33, 5, 6, 45];

let input = prompt("Enter a number: ");

numbers.push(input);

console.log(numbers);
*/

// ques 2: add numbers to the array untill input is 0

/*
const prompt = require("prompt-sync")();
let numbers2 = [46, 98];

do {
  let input = prompt("Enter a number: ");
  input = Number.parseInt(input);
  numbers2.push(input);
} while (input != 0);

console.log(numbers2);
*/

// ques 3: using filter method

/*
let numbers3 = [15, 69, 66, 70, 99, 20, 40, 60, 77, 78];

let newArray = numbers3.filter((element) => {
  return element % 10 == 0;
});

newArray.sort((a, b) => a - b);
console.log(newArray);

*/

// Ques 4: create an array of existing array

/*
let number4 = [4, 5, 6, 8, 1, 2, 6];

let new_Array = number4.map((element) => {
  return element * element;
});

console.log(new_Array);

*/

// Ques 5: Use reduce method for calculate factorial

let number5 = [1, 2, 3, 4, 5, 6, 7];

let new_Array = number5.reduce((element1, element2) => {
  return element1 + element2;
});

console.log(new_Array);
