const form = document.querySelector(".form");
const email = document.querySelector(".email");
const re = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
const sign = document.querySelector(".sign");

function setError(element, message) {
  const inputControl = element.parentElement;
  const error = inputControl.querySelector(".error-msg");
  inputControl.classList.add("error");
  sign.style.visibility = "visible";

  error.innerText = message;
}

function setSuccess(element) {
  const inputControl = element.parentElement;
  const error = inputControl.querySelector(".error-msg");
  inputControl.classList.remove("error");
  sign.style.visibility = "hidden";

  error.innerText = "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setError(email, "Please enter an email");
  } else if (re.test(emailValue) === false) {
    setError(email, "Please provide a valid email");
  } else {
    setSuccess(email);
  }
});
