function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector(".change-color");
const nameOfColor = document.querySelector(".color");
const backGround = document.querySelector("body");

button.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  nameOfColor.textContent = getRandomHexColor();
  backGround.style.background = nameOfColor.textContent;
}