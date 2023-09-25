let counterValue = 0;

const minusBtn = document.querySelector('button[data-action="decrement"]');

const plusBtn = document.querySelector('button[data-action="increment"]');

let value = document.querySelector("#value");
const minusValue = () => {
  counterValue--;
  value.textContent = counterValue;
};
const plusValue = () => {
  counterValue++;
  value.textContent = counterValue;
};
minusBtn.addEventListener("click", minusValue);
plusBtn.addEventListener("click", plusValue);
