/*let marks = [85, 97, 44, 37, 76, 60];

//for of
let sum = 0;


for (let i of marks){
    sum = sum+i;
}

console.log(sum/marks.length);
*/

//2ND EXERCISE

/*let prices = [250, 645, 300, 900, 50]

let off = 0.10;

for (let i in prices){

    console.log(`Regular Price: ${prices[i]}`);
    
    prices[i]= prices[i] - prices[i]*off;

    console.log(`The prices after off is: ${prices[i]}`);
}
*/

//3RD EXERCISE

let companies = ["Bloomberg", "Microsoft","Uber", "Google", "IBM", "Netflix"];

// let newcompanies = companies.shift();

// console.log(companies);

companies.splice(3,1,"OLA");