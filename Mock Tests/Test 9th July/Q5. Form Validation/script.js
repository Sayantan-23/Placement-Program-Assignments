const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phoneNo = document.getElementById("phone");
const age = document.getElementById("age");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhoneNumber = (phoneNumber) => {
  if (phoneNumber.toString().length !== 10) {
    return false;
  }
  return true;
};

const isValidAge = (age) => {
  if (age < 18 || age > 120) {
    return false;
  }
  return true;
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phoneNo.value.trim();
  const ageValue = age.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (phoneValue === "") {
    setError(phoneNo, "Phone number is required");
  } else if (!isValidPhoneNumber(phoneValue)) {
    setError(phoneNo, "Phone number must have exactly 10 digits");
  } else {
    setSuccess(phoneNo);
  }

  if (ageValue === "") {
    setError(age, "Age is required");
  } else if (!isValidAge(ageValue)) {
    setError(age, "Age must be more than 18 or less than 120");
  } else {
    setSuccess(age);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
  } else {
    setSuccess(password2);
  }
};
