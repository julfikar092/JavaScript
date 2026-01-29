// Q1: Create a variable of string and try to add with a number

let a = "Julfikar Rahman";
let b = 342;

console.log(a + b);

// Q2: Datatype of the string

console.log(typeof (a + b));

// Q3: Const Object

const student = {
  name: "julfikar Rahman",
  roll: 640,
  cgpa: 3.43,
};
// student = 20;
// we will get error if we try to assgin student = 20; because reassigning value to constant object will give error.

console.log(student.roll);

// Q4: Add value to the object

student["department"] = "Software Engineering";

console.log(student.department);

// Q5: Real Dictionary
const dictionary = {
  Paradise: "Heaven",
  Sky: "Limitless",
  Work: "Do something",
  Boy: "Opposite of girl",
  Class: "Has different meaning",
};

console.log(dictionary["Paradise"]);
