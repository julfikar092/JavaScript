/* document.querySelector(
  "nav",
).firstElementChild.firstElementChild.firstElementChild.style.color = "red";

document.getElementsByTagName(
  "nav",
)[0].firstElementChild.firstElementChild.firstElementChild.style.color =
  "green";

document.getElementsByTagName(
  "nav",
)[0].firstElementChild.lastElementChild.firstElementChild.style.color = "green"; */

/* Array.from(document.getElementsByTagName("li")).forEach((element) => {
  element.style.backgroundColor = "red";
}); */

document.querySelectorAll("li").forEach((element) => {
  element.style.backgroundColor = "yellow";
});
