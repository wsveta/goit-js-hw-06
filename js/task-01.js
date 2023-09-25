const categories = [...document.querySelectorAll("h2")];

console.log("Number of categories: " + categories.length);

categories.forEach((category) => {
  console.log(
    `Category: ${category.textContent} \nElements: ${category.nextElementSibling.childElementCount}`
  );
});
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
