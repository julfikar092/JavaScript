// Quiz

let my_name = "Mohammad";

let information = `${my_name} is my name`;

console.log(information);

for (let i = 0; i < my_name.length; i++) {
  console.log(my_name[i]);
}

// Ques: 1

console.log('har\"'.length);

// Ques: 2

let paragraph = "My name is julfikar Rahman";

console.log(paragraph.includes("nae"));

console.log(paragraph.startsWith("may"));

console.log(paragraph.endsWith("Rahman"));

// Ques: 3

console.log(paragraph.toLowerCase());

// Ques: 4

let str = "Give me taka 1000";
let amount = Number.parseInt(str.slice(13));

console.log(amount);

// Ques: 5

let str2 = "Julfikar";

str2[4] = "M";

console.log(str2); //This is not possible, because string is immutable
