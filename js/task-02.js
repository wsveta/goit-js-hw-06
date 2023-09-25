const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const ingredientsList = [];
for (let i = 0; i < ingredients.length; i++) {
  ingredientsList.push(document.createElement("li"));
  ingredientsList[i].textContent = ingredients[i];
  ingredientsList[i].classList.add("item");
}

list.append(...ingredientsList);
