// Ques-1: funttion that take input from user and give it in alert

/* 

let age = prompt("Enter a age: ");
age = Number.parseInt(age);

const can_drive = (age) => {
  age >= 18 && age <= 70 v? true : false;
};

if (can_drive(age)) {
  alert("You can drive");
} else {
  alert("You can't drive");
} 
  
*/

// Ques-2: confirmation of the promt to run again
// Ques-3: negative age give console error

/* let user_confirmation = true;
const can_drive = (age) => {
  return age >= 18 && age <= 70 ? true : false;
};

while (user_confirmation) {
  let age = prompt("Enter a age: ");
  age = Number.parseInt(age);

  if (age < 0) {
    console.error("Age can't be negative. Please enter a valid age");
    break;
  } else {
    if (can_drive(age)) {
      alert("You can drive");
    } else {
      alert("You can't drive");
    }
  }
  user_confirmation = confirm("Do you want to run it again?");
} */

// Ques 4: Redirect google.com if user input is getter than 4

/* let number4 = prompt("Enter a valid number: ");
number4 = Number.parseInt(number4);

if (number4 > 4) {
  location.href = "https://www.youtube.com/";
} */

//   Ques 5: change background color

let color = prompt("Enter your preffered color for backgroud: ");
document.body.style.background = color;
