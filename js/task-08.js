const form = document.querySelector(".login-form");

form.addEventListener("submit", getData);
function getData(event) {
  event.preventDefault();
  const login = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  if (login.value && password.value) {
    const user = {};
    user[login.name] = login.value;
    user[password.name] = password.value;
    console.log(user);
  } else {
    alert("Всі поля повинні бути заповнені!");
  }
  form.reset();
}
