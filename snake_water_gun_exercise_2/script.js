const random_selectoin = (arr) => {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

let array = ["s", "w", "g"];
let choice = true;

while (choice == true) {
  let your_pick = prompt("Enter your choice from s, w, & g: ");
  your_pick = your_pick.toLocaleLowerCase();

  if (!array.includes(your_pick)) {
    confirm("Invalid input! Please enter s, w, or g.");
    continue;
  }
  let get_random = random_selectoin(array);

  let roundResult = "";

  if (your_pick === get_random) {
    roundResult = "It's a tie!";
  } else if (
    (your_pick === "s" && get_random === "w") ||
    (your_pick === "w" && get_random === "g") ||
    (your_pick === "g" && get_random === "s")
  ) {
    roundResult = "You Win!";
  } else {
    roundResult = "You Loss (Computer Wins)!";
  }
  alert(roundResult);
  choice = confirm("Do you want to continue");
}
