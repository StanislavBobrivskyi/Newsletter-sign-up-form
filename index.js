const singUp = document.querySelector(".modal-container");
const submitBtn = document.querySelector(".submit-btn");
const succesMassage = document.querySelector(
  ".success-message-modal-container"
);
const successBtn = document.querySelector(".succes-message-btn");

submitBtn.addEventListener("click", onClick);

function onClick() {
  singUp.classList.add("is-hiden");
  succesMassage.classList.remove("is-hiden");
  return;
}

succesMassage.addEventListener("click", outClick);

function outClick() {
  succesMassage.classList.add("is-hiden");
  singUp.classList.remove("is-hiden");
  return;
}
