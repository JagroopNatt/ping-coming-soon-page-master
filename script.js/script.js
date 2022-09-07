const button = document.querySelector(".submit-btn");

const email = document.querySelector(".email");

const errorMsg = document.querySelector(".error-msg");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

button.addEventListener("click", function (e) {
  e.preventDefault();

  if (email.value === "") {
    errorMsg.classList.add("active");
    email.classList.add("error");
  } else if (!email.value.match(emailRegex)) {
    errorMsg.classList.add("active");
    email.classList.add("error");
  } else {
    email.classList.add("success");
  }
});
