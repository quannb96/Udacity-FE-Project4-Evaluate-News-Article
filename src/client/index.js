// js files
import { handleSubmit } from "./js/formHandler";
// sass files
import("./styles/base.scss");
import("./styles/header.scss");
import("./styles/form.scss");
import("./styles/footer.scss");

window.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", handleSubmit);
});

export { handleSubmit };
