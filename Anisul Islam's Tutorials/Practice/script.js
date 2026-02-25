// Task 4

/* let num1 = Number(prompt("Enter first number: "))
let num2 = Number(prompt("Enter second number: "))
let num3 = Number(prompt("Enter third number: "))

result = (num1 > num2 && num1> num3) ? num1: (num2>num3 && num2>num1) ? num2: num3;

document.write(result) */

// Task 5

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

// Task 6

/* let sum = 0, n=1;

while (n<=100){

    if (n%3==0 && n%5==0){
        sum = sum+n
    }
    n=n+1
}

console.log(sum) */

// FizzBuzz Challenge

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

// Task 7

(function sum(num1, num2) {
  let sum = num1 + num2;
  console.log(sum);
})(5, 10);
