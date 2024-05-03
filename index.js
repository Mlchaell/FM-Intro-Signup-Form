var signUpForm = document.getElementsByClassName("signup-form")

var submitBtn = signUpForm[0][4];

var firstNameEmpty = document.querySelector(".error__firstname-empty");
var lastNameEmpty = document.querySelector(".error__lastname-empty");
var emailEmpty = document.querySelector(".error__email-empty");
var passwordEmpty = document.querySelector(".error__password-empty");

submitBtn.addEventListener("click", e => {
  var firstNameField = signUpForm[0][0];
  var lastNameField = signUpForm[0][1];
  var emailField = signUpForm[0][2];
  var passwordField = signUpForm[0][3];

  if (firstNameField.value.trim().length === 0) {
    firstNameEmpty.classList.toggle("hidden");
  } 
  
  if (lastNameField.value.trim().length === 0) {
    lastNameEmpty.classList.toggle("hidden");
  }

  if (emailField.value.trim().length === 0) {
    emailEmpty.classList.toggle("hidden");
  }

  if (passwordField.value.trim().length === 0) {
    console.log("test");
    passwordEmpty.classList.toggle("hidden");
  }
})

var firstNameField = signUpForm[0][0];
var lastNameField = signUpForm[0][1];
var emailField = signUpForm[0][2];
var passwordField = signUpForm[0][3];

firstNameField.addEventListener("focus", e => {
  if (firstNameEmpty.classList.contains("hidden") !== true) {
    firstNameEmpty.classList.toggle("hidden");
  }
})