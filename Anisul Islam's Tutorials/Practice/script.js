// ### Task 4 ###

/* let num1 = Number(prompt("Enter first number: "))
let num2 = Number(prompt("Enter second number: "))
let num3 = Number(prompt("Enter third number: "))

result = (num1 > num2 && num1> num3) ? num1: (num2>num3 && num2>num1) ? num2: num3;

document.write(result) */

// ### Task 5 ###

/* letter = prompt("Enter a character from your keyboard: ")

l = letter.toLowerCase()

switch(l){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("vowel")
        break;
    default:
        console.log("Consonant")

} */

// ### Task 6 ###

/* let sum = 0, n=1;

while (n<=100){

    if (n%3==0 && n%5==0){
        sum = sum+n
    }
    n=n+1
}

console.log(sum) */

// ### FizzBuzz Challenge ###

/* let n = 1;

while(n<=100){
   
    if(n%3==0){
         
        if(n%5==0){
            document.write(n + " FizzBuzz"+ "<br>")
        }
        else
            document.write(n + " Fizz"+ "<br>")
    }
    else if(n%5==0){
         document.write(n + " Buzz"+ "<br>")
    }
    else
         document.write(n+ "<br>")
    
    n+=1
}
 */

// ### Task 7 ###

// IIFE Function
/* (function sum(num1, num2) {
  let sum = num1 + num2;
  console.log(sum);
})(5, 10); */

// ### Array Methods ###

/* let nums = [54, 44, 69, 2, 45, 63, 5, 14];

let names = [
  "Julfikar",
  "Labonno",
  "Agun",
  "Jewel",
  "Hridoy",
  "Ritu",
  "Oishi",
  "Abir",
  "Prince",
];

// Slice
new_Array = names.slice(2, 5);
console.log(new_Array);

// Removing and Adding using Splice
// (position, how many will remove, adding values)
names.splice(2, 6, "Samanta", "Khusi", "Sinthia");
console.log(names);

// Removing using Splice
// (Return a new array = starting position, how many)
new_Array2 = names.splice(2, 5);
console.log(new_Array2);

//Sorting Name

console.log(names.sort());

// Sorting value

sorted_value = nums.sort(function (a, b) {
  return a - b;
});
console.log(sorted_value);
 */

// ### Task 8 ###

/* function Highest_Score(numbers) {
  let highest_number = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > highest_number) {
      highest_number = numbers[i];
    }
  }
  return highest_number;
}

let scores = [88, 65, 75, 96, 35, 66, 77, 61];

console.log(Highest_Score(scores)); */

// ### Task 9 ###

function Highest_Score(b_score) {
  let hi = 0;
  let hi_scorer = "";
  for (let i = 0; i < b_score.length; i++) {
    if (b_score[i][1] > hi) {
      hi = b_score[i][1];
      hi_scorer = b_score[i][0];
    }
  }
  return [hi_scorer, hi];
}

let score = [
  ["Ashraful", 45],
  ["Aftab", 32],
  ["Habibul", 22],
  ["Sakib", 69],
  ["Mushfiq", 42],
  ["Mahmudullah", 38],
  ["Mashrafee", 19],
];

hs = Highest_Score(score);
document.write(`Highest Scorer is ${hs[0]} and the score is ${hs[1]}`);
