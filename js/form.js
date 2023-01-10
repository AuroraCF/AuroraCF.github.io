const formSelector = document.getElementById("form-default");
const formSuccessSelector = document.getElementById("form-success");

const subscribeURL =
  "https://assets.mailerlite.com/jsonp/285229/forms/76918907714143988/subscribe";
const fields = ["name", "email", "phone", "message"].map((x) => `fields[${x}]`);

window.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData();

  fields.forEach((field) => {
    formData.append(field, document.querySelector(`[name="${field}"]`).value);
  });

  fetch(subscribeURL, {
    method: "POST",
    body: formData,
  }).then(() => {
    formSelector.style.display = "none";
    formSuccessSelector.style.display = "block";
  });
});
