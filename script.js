const emailInput = document.getElementById("email-input");
const submitBtn = document.getElementById("submit-btn");
const iconError = document.getElementById("icon-error");
const errorMsg = document.getElementById("error-msg");

emailInput.addEventListener("input", () => {
  emailInput.setCustomValidity("");
  iconError.classList.add("hidden");
  errorMsg.classList.add("hidden");

  emailInput.classList.remove("error-clr");
});

emailInput.addEventListener("invalid", () => {
  emailInput.setCustomValidity(" ");

  iconError.classList.remove("hidden");
  errorMsg.classList.remove("hidden");

  emailInput.classList.add("error-clr");
});
