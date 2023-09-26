function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  for (let i = 1; i <= input.value; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${20 + 10 * i}px`;
    box.style.height = `${20 + 10 * i}px`;
    box.style.background = getRandomHexColor();
    box.style.margin = "10px";
    boxes.append(box);
  }
}

function destroyBoxes() {
  while (boxes.children.length > 0) {
    document.querySelector(".box").remove();
  }
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
