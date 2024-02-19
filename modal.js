function openModal() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("backdrop").classList.add("active");
  document.body.classList.add("modal-open");
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("backdrop").classList.remove("active");
  document.body.classList.remove("modal-open");
  clearForm();
}

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^\d{12}$/;
  return re.test(phone);
}

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  let isValid = true;

  if (name === "") {
    alert("Please enter your name");
    isValid = false;
  }

  if (email === "") {
    alert("Please enter your email");
    isValid = false;
  } else if (!validateEmail(email)) {
    alert("Please enter a valid email address");
    isValid = false;
  }

  if (phone === "") {
    alert("Please enter your phone number");
    isValid = false;
  } else if (!validatePhone(phone)) {
    alert("Please enter a valid phone number (12 digits)");
    isValid = false;
  }

  if (message === "") {
    alert("Please enter your message");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted!");
    closeModal();
    clearForm();
  }

  return isValid;
}

function clearForm() {
  document.getElementById("form").reset();
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});

document.getElementById("form").addEventListener("click", function (event) {
  event.stopPropagation();
});
