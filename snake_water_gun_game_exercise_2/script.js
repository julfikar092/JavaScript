const random_generate = (arr) => {
  let ind = Math.floor(Math.random() * arr.length);
  return arr[ind];
};

let options = ["g", "s", "w"];
let confimation = true;

while (confimation) {
  let random = random_generate(options);
  let your_choice = prompt("Enter any letter from 'g', 's', & 'w'");
  your_choice = your_choice.toLocaleLowerCase();

  if (!options.includes(your_choice)) {
    alert("The input is not correct. Please enter letter from 'g', 's', & 'w'");
    continue;
  }

  let roundResult = "";
  if (random === your_choice) {
    roundResult = "Tie";
  } else if (
    (your_choice == "s" && random == "w") ||
    (your_choice == "w" && random == "g") ||
    (your_choice == "g" && random == "s")
  ) {
    roundResult = "You won the game";
  } else {
    alert("You lost, computer won");
  }
  alert(roundResult);

  let confimation = confirm("Do you want to continue?");
}
