const categories = [...document.querySelectorAll("h2")];

console.log("Number of categories: " + categories.length);

categories.forEach((category) => {
  console.log(
    `Category: ${category.textContent} \nElements: ${category.nextElementSibling.childElementCount}`
  );
});