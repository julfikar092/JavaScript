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

// Phase 4

/* let name = "Mohammad Julfikar Rahman"

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
} */

// Phase 6

/* let name = prompt("Enter your name: ");
let total_expense = 0;

let income = Number(prompt("Enter your income: "));
if (isNaN(income) || income <= 0) {
  document.write("Income is not correct! Please check again.");
} else {
  let expense_number = Number(prompt("How many expenses you have: "));

  if (isNaN(expense_number) || expense_number <= 0) {
    document.write("Number of expense is not correct! Please check again.");
  } else {
    for (let i = 0; i < expense_number; i++) {
      new_expense = Number(prompt(`Enter Expense ${i + 1}`));
      if (isNaN(new_expense) || new_expense < 0) {
        new_expense = 0;
      }
      total_expense = total_expense + new_expense;
    }

    let tax_deduction = (income * 10) / 100;
    remaining_balance = income - tax_deduction - total_expense;
    saving = (20 * remaining_balance) / 100;

    document.write("User Name: " + name + "<br>");
    document.write("Salary: " + income + "<br>");
    document.write("Total Cost: " + total_expense + "<br>");
    document.write("Tax: " + tax_deduction + "<br>");
    document.write("Remaining Balance: " + remaining_balance + "<br>");
    document.write("Savings: " + saving + "<br>");

    if (total_expense > income) document.write("Over Expending!");
    else {
      if (saving >= 1000) document.write("Excellent");
      else if (saving >= 500 && saving <= 999) document.write("Good");
      else if (saving >= 1000) document.write("Excellent");
      else if (saving >= 100 && saving <= 499)
        document.write("Need Improvement");
      else document.write("Critical");
    }
  }
}
 */

// Phase 7

/* let name = prompt("Enter your name: ");
let total_expense = 0;
let expense_Arr = [];

let income = Number(prompt("Enter your income: "));
if (isNaN(income) || income <= 0) {
  document.write("Income is not correct! Please check again.");
} else {
  let expense_number = Number(prompt("How many expenses you have: "));

  if (isNaN(expense_number) || expense_number <= 0) {
    document.write("Number of expense is not correct! Please check again.");
  } else {
    for (let i = 0; i < expense_number; i++) {
      new_expense = Number(prompt(`Enter Expense ${i + 1}`));
      if (isNaN(new_expense) || new_expense < 0) {
        new_expense = 0;
      }
      expense_Arr.push(new_expense);
    }

    for (let i = 0; i < expense_Arr.length; i++) {
      total_expense = total_expense + expense_Arr[i];
    }

    let tax_deduction = (income * 10) / 100;
    remaining_balance = income - tax_deduction - total_expense;
    saving = (20 * remaining_balance) / 100;

    document.write("User Name: " + name + "<br>");
    document.write("Salary: " + income + "<br>");
    document.write("Total Cost: " + total_expense + "<br>");
    document.write("Tax: " + tax_deduction + "<br>");
    document.write("Remaining Balance: " + remaining_balance + "<br>");
    document.write("Savings: " + saving + "<br>");

    if (total_expense > income) document.write("Over Expending!");
    else {
      if (saving >= 1000) document.write("Excellent");
      else if (saving >= 500 && saving <= 999) document.write("Good");
      else if (saving >= 1000) document.write("Excellent");
      else if (saving >= 100 && saving <= 499)
        document.write("Need Improvement");
      else document.write("Critical");
    }
  }
} */

// Phase 8

/* function get_user_input(prompt_Message) {
  return prompt(prompt_Message);
}

function validate_txt(input) {
  if (input === null || input.trim() === "" || !isNaN(input)) {
    console.log(`"${input}" is not a valid name! Please use letters.`);
    return false;
  }
  return true;
}

function validate_num(input) {
  if (isNaN(input) || input <= 0) {
    console.log(`${input} is not correct! Please check again.`);
    return false;
  }

  return true;
}

function get_expenses(expense_number) {
  let expences = [];
  for (let i = 0; i < expense_number; i++) {
    let new_expense = get_user_input(`Enter Your Expense ${i + 1}: `);
    if (validate_num(new_expense)) {
      expences.push(Number(new_expense));
    } else {
      i--;
    }
  }

  return expences;
}

function total_expenses(expences_arr) {
  let total = 0;
  for (let i = 0; i < expences_arr.length; i++) {
    total = total + expences_arr[i];
  }
  return total;
}

function calculation(income, total_expen) {
  income = Number(income);
  let tax_deduction = (income * 10) / 100;
  let remaining_balance = income - tax_deduction - total_expen;
  let saving = (20 * remaining_balance) / 100;
  let cal = [tax_deduction, remaining_balance, saving];

  return cal;
}

function display_information(name, income, total_ex, calculate) {
  let saving = calculate[2];
  console.log("User Name: " + name + "<br>");
  console.log("Salary: " + income + "<br>");
  console.log("Total Cost: " + total_ex + "<br>");
  console.log("Tax: " + calculate[0] + "<br>");
  console.log("Remaining Balance: " + calculate[1] + "<br>");
  console.log("Savings: " + calculate[2] + "<br>");

  if (total_ex > income) console.log("Over Expending!");
  else {
    if (saving >= 1000) console.log("Excellent");
    else if (saving >= 500 && saving <= 999) console.log("Good");
    else if (saving >= 100 && saving <= 499) console.log("Need Improvement");
    else console.log("Critical");
  }
}

function Execute_Expense_Tracker_App() {
  let name = get_user_input("Enter your name");

  if (validate_txt(name)) {
    let income = get_user_input("Enter your income");

    if (validate_num(income)) {
      let expense_num = get_user_input("Enter number of expense");

      if (validate_num(expense_num)) {
        let expenses_amount = get_expenses(Number(expense_num));
        let total_expense_calculation = total_expenses(expenses_amount);
        let calculate = calculation(income, total_expense_calculation);

        display_information(name, income, total_expense_calculation, calculate);
      }
    }
  }
}

Execute_Expense_Tracker_App();
 */

// Phase 9

function get_user_input(prompt_Message) {
  return prompt(prompt_Message);
}

function validate_txt(input) {
  if (input === null || input.trim() === "" || !isNaN(input)) {
    console.log(`"${input}" is not a valid name! Please use letters.`);
    return false;
  }
  return true;
}

function validate_num(input) {
  if (isNaN(input) || input <= 0) {
    console.log(`${input} is not correct! Please check again.`);
    return false;
  }

  return true;
}

function get_expenses(expense_number) {
  let expences = [];
  for (let i = 0; i < expense_number; i++) {
    let new_expense = get_user_input(`Enter Your Expense ${i + 1}: `);
    if (validate_num(new_expense)) {
      expences.push(Number(new_expense));
    } else {
      i--;
    }
  }

  return expences;
}

function total_expenses(expences_arr) {
  let total = 0;
  for (let i = 0; i < expences_arr.length; i++) {
    total = total + expences_arr[i];
  }
  return total;
}
function calculate_tax(income) {
  return income * 0.1;
}
function calculate_reamaing_balance(income, total_expense, tax) {
  return income - (total_expense + tax);
}

function calculate_savings(remaining) {
  savings = (20 * remaining) / 100;
  return savings;
}

function financial_status(income, expense, saving) {
  if (expense > income) {
    return (User_Budget.fiancial_status =
      "Over Expending. Please less your expense");
  }

  switch (saving) {
    case saving >= 1000:
      return "Excellant Savings";
    case saving >= 500 && saving <= 999:
      return "Good Savings";
    case saving >= 100 && saving <= 499:
      return "Need Improvement";
    default:
      return "Critical";
  }
}

function display_information(user_data) {
  console.log(`User Name:  ${user_data.name}`);
  console.log(`Income:  ${user_data.income} `);
  console.log(`Total Expense:   ${user_data.total_expense} `);
  console.log(`Tax:   ${user_data.tax} `);
  console.log(`Remaining Balance:   ${user_data.remaining_balance}`);
  console.log(`Savings:   ${user_data.savings} `);
  console.log(`Fianacial Status:   ${user_data.fiancial_status}`);
}

function Execute_Expense_Tracker_App() {
  let User_Budget = {
    name: "",
    income: 0,
    expense_count: 0,
    total_expense: 0,
    expense_list: [],
    tax: 0,
    remaining_balance: 0,
    savings: 0,
    fiancial_status: "",
  };

  User_Budget.name = get_user_input("Enter your name");

  if (validate_txt(User_Budget.name)) {
    User_Budget.income = get_user_input("Enter your income");

    if (validate_num(User_Budget.income)) {
      User_Budget.expense_count = Number(
        get_user_input("Enter number of expense"),
      );

      if (validate_num(User_Budget.expense_count)) {
        User_Budget.expense_list = get_expenses(User_Budget.expense_count);
        User_Budget.total_expense = total_expenses(User_Budget.expense_list);
        User_Budget.tax = calculate_tax(User_Budget.income);
        User_Budget.remaining_balance = calculate_reamaing_balance(
          User_Budget.income,
          User_Budget.total_expense,
          User_Budget.tax,
        );
        User_Budget.savings = calculate_savings(User_Budget.remaining_balance);
        User_Budget.fiancial_status = financial_status(
          User_Budget.income,
          User_Budget.total_expense,
          User_Budget.savings,
        );

        display_information(User_Budget);
      }
    }
  }
}

Execute_Expense_Tracker_App();
