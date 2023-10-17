function valideForm() {
  const emailInput = document.getElementById("email");
  const email = emailInput.value;

  const validEmail = email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  if (!validEmail) {
    const errorSection = document.querySelector(".error");
    errorSection.textContent = "Valid Email Required";
    errorSection.style.display = "block";
    return;
  }

  const container = document.querySelector(".container");
  const success = document.querySelector(".success");

  const confirmEmail = document.querySelector("#confirmEmail");
  confirmEmail.textContent = email;
  container.style.display = "none";
  success.style.display = "block";
}

function dismissForm() {
  location.reload();
}
