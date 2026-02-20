/* console.log("Budget Tracker App")

// Phase 1:
console.log("Name: Mohammad Julfikar Rahman")
console.log("Salary: ", 42000)
console.log("Expenses: ", 42000)

// Phase 2:
let name = "Mohammad Julfikar Rahman"
let income = 42000
let expences = 38000
console.log("Name: ", name, "\nIncome: ", income, "\nExpenses: ", expences)
 */

// Phase 3:

/* let name1 = "Mohammad Julfikar Rahman"
let income1= 42000
let expences1 = 38000
document.write("User: "+ name1.toUpperCase())
document.write("<br>Total Income: " + "$"+income1)
document.write("<br>Total Expenses: " + "$"+expences1) */

// Task 1:

/* number1= prompt("Enter first number: ")
number2 = prompt("Enter second number: ")

number3 = parseInt(number1,10)
number4 = parseInt(number2,10)

document.write(number3+ " + " + number4 + " = "+ (number3+number4) + "<br>")
document.write(number3+ " - " + number4 + " = "+ (number3-number4) + "<br>")
document.write(number3+ " * " + number4 + " = "+ (number3*number4) + "<br>")
document.write(number3+ " / " + number4 + " = "+ (number3/number4) + "<br>")
document.write(number3+ " % " + number4 + " = "+ (number3%number4) + "<br>") */

// Phase 4

let name = "Mohammad Julfikar Rahman"

salary = parseFloat(prompt("Enter your salary: "))
house_rent = parseFloat(prompt("Enter your house rent: "));
groceries = parseFloat(prompt("Enter your grocery cost: "))
transport = parseFloat(prompt("Enter your transport cost: "))
entertainment = parseFloat(prompt("Enter your entertainment cost: "))

total_cost = house_rent+groceries+transport+entertainment
tax_deduction = (salary*10)/100;
after_tax_deduction = salary-tax_deduction;
remaining_balance = after_tax_deduction-total_cost
saving = (20*remaining_balance)/100;

document.write("User Name: "+ name + "<br>")
document.write("Salary: "+ salary + "<br>")
document.write("Total Cost: "+ total_cost + "<br>")
document.write("Tax: "+ tax_deduction + "<br>")
document.write("Remaining Balance: "+ remaining_balance + "<br>")
document.write("Savings: "+ saving + "<br>")

if (total_cost>salary)
    document.write("Over Expending!")
else{
    if(saving>=1000)
        document.write("Excellent")
    else if(saving>=500 && saving<=999)
        document.write("Good")
    else if(saving>=1000)
        document.write("Excellent")
    else if(saving>=100 && saving <=499)
        document.write("Need Improvement")
    else
        document.write("Critical")
}








