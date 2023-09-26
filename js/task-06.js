const input = document.querySelector("#validation-input");
const length = input.getAttribute("data-length");
input.addEventListener("blur", isProperValue);

function isProperValue(event) {
  if (event.currentTarget.value.length === Number(length)) {
    replaceClass("valid", "invalid");
  } else {
    replaceClass("invalid", "valid");
  }
  console.log()
}

function replaceClass(add, remove) {
  event.currentTarget.classList.add(add);
  event.currentTarget.classList.remove(remove);
}