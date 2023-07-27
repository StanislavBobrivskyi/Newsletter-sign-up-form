const singUp = document.querySelector(".modal-container");
const submitBtn = document.querySelector(".submit-btn");
const succesMassage = document.querySelector(
  ".success-message-modal-container"
);
const successBtn = document.querySelector(".succes-message-btn");

const emailInput = document.querySelector('input[name="email"]');
const emailText = document.querySelector(".user-email");
const errorStyle = document.querySelector(".input-group_input");
const errorText = document.querySelector(".input-group_lable");
const STORAGE_KEY = "user-email";

const saveFormState = () => {
  const formData = {
    email: emailInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const loadFormState = () => {
  const savedState = localStorage.getItem(STORAGE_KEY);
  if (savedState) {
    const formData = JSON.parse(savedState);
    emailInput.value = formData.email;
  }
};

const clearFormState = () => {
  localStorage.removeItem(STORAGE_KEY);
};

emailInput.addEventListener("input", errorStyleClass);

function errorStyleClass() {
  if (!emailPatern()) {
    errorStyle.classList.remove("error-style");
    errorText.classList.remove("error-text");
    errorText.textContent = "approved 🚀";
  } else {
    errorStyle.classList.add("error-style");
    errorText.classList.add("error-text");
    errorText.textContent = "Valid email required";
  }
}

function emailPatern() {
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !emailPattern.test(emailValue);
}

submitBtn.addEventListener("click", sendForm);

function sendForm(event) {
  event.preventDefault();

  if (emailPatern()) {
    errorStyleClass();
    console.log("error");
    return;
  }
  const emailValue = emailInput.value.trim();
  singUp.classList.add("is-hiden");
  succesMassage.classList.remove("is-hiden");
  emailText.textContent = emailValue;
  clearFormState();
  console.log({
    email: emailValue,
  });
  errorStyle.classList.remove("error-style");
  return;
}

loadFormState();

succesMassage.addEventListener("click", outClick);

function outClick() {
  succesMassage.classList.add("is-hiden");
  singUp.classList.remove("is-hiden");

  emailInput.value = "";
  location.reload();
  return;
}
