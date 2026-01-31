// for each

/*let arr = ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet", "Barishal", "Rangpur"];

arr.forEach(val =>{
    console.log(val);
});
*/

//excercise

const numbers = [5,7,8,6,14,20];

/*numbers.forEach((val, inx, arr )=>{
    arr[inx] = val *val;

    console.log (arr[inx]);
});*/


/*let calSqr = (val)=>{
    console.log(val**2);
};

numbers.forEach(calSqr);

let newArr = numbers.map((val1) =>{
    return val1*val1;
});

console.log(newArr);*/

//Largest Element

/*const arr = [5,13,8,6,14,20,10];

let max =  arr.reduce((prev, curr) =>{
    // if(prev>curr){
    //     return prev;
    // }else{
    //     return curr;
    // }

    return prev>curr?prev:curr;
});

console.log(max);
*/

//filter

/*const arr = [5,13,8,6,14,20,10];

let topper =arr.filter((val)=>{
    return val>10;
});

console.log(topper);

*/

//Reduce 

let number = prompt("Enter a number: ");

let arr = [];

for (let i = 1; i<=number; i++){
   arr[i-1] = parseInt(prompt(`Enter number ${i}: `));
}

let sum = arr.reduce((prev,curr)=>{
    return prev+curr;
});

console.log(sum);

