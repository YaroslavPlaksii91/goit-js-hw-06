const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const objWithData = {
    Email: email.value,
    Password: password.value,
  };

  console.log(objWithData);
  event.currentTarget.reset();
}
