const emailInput = document.getElementById("email-input");
const submitBtn = document.getElementById("submit-btn");
const iconError = document.getElementById("icon-error");
const errorMsg = document.getElementById("error-msg");

emailInput.addEventListener("input", () => {
  iconError.classList.add("hidden");
  errorMsg.classList.add("hidden");

  emailInput.style.borderColor = "var(--clr-primary-1)";
  emailInput.style.outlineColor = "transparent";
});

emailInput.addEventListener("invalid", () => {
  emailInput.setCustomValidity(" ");

  iconError.classList.remove("hidden");
  errorMsg.classList.remove("hidden");

  emailInput.style.borderColor = "var(--clr-primary-2)";
  emailInput.style.outlineColor = "var(--clr-primary-2)";
});
