/*

// Print 1 to 10 using for loop

let a;

for(a = 1; a <= 10; a++){
    console.log(a);
}

*/

//calculate the sum of numbers from 1 to n

/*let n = prompt("Enter a number: ");

let sum = 0;

for (let i = 1; i <= n; i++){

    sum= sum+i;
    
}
console.log(sum);*/

//for in loop

/*let person ={
    name: "John",
    age: 30,
    city: "New York"
};

for(let key in person){
    console.log(key," = ", person[key]);
}*/


//game number practice

/*let game_number = 7;

let guess = prompt("Guess the number between 1 to 10: ");

while(guess != game_number){
    
    if(guess < game_number){
        guess =  prompt("Your guess is low. please try again");
    }
    else{
        guess = prompt("Your guess is high. Please try again");
    }
}

console.log("Congratulation! You have guessed the number correctly");

*/

//Practice of String

let name = prompt("Enter Your Full Name: ");

let username = "@" + name+name.length;

console.log("Username: ", username);
