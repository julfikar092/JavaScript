/*let a = 5;
let b = 3;

console.log("a+b = ", a+b)
console.log("a-b = ", a-b)*/

/*let mode = "dark";

let color;

if(mode === "dark"){
    color = "black";
}else if(mode === "light"){
    color = "white";
}else{
    color = "gray";
}

console.log(color);
*/

/*let express = "apple";

switch (express){
    case "mango":
        console.log("This is mango");
        break;
    case "apple":
        console.log("This is apple");
        break;
    case "banana":
        console.log("This is banana"); 
        break;

    default:
        console.log("This is default case");
        break;
}*/

/*let a = prompt("Enter a number:");

if(a%5 === 0){
    console.log(a ," is multiple of 5");
}
else{
    console.log(a," is not multiple of 5");
}*/


let number = prompt("Enter a number:");

if(number>=80 && number<=100){
    console.log("A");
}else if(number>=70 && number<=79){
    console.log("B");
}else if (number>=60 && number<=69){
    console.log("C");
}else if (number>=50 && number<=59){
    console.log("D");
}
else{
    console.log("F");
}
