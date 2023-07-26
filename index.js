const singUp = document.querySelector(".modal-container");
const submitBtn = document.querySelector(".submit-btn");
const succesMassage = document.querySelector(
  ".success-message-modal-container"
);

submitBtn.addEventListener("click", onClick);

function onClick() {
  singUp.classList.add("");
}
