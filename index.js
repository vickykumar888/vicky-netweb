function validateForm(event) {
  // Prevent the form from submitting by default
  event.preventDefault();
  // Get form elements
  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const retypePassword = document.getElementById('retype_password').value;
  const address = document.getElementById('address').value;
  // Clear previous errors
  clearErrors();

  let isValid = true;
  if (name == "") {
    showError("nameError", "Please enter your name.");
    isValid = false;
  }
  if (lastName == "") {
    showError("lastNameError", "Please enter your last name.");
    isValid = false;
  }
  if (email == "") {
    showError("emailError", "please enter your email address")
    isValid = false;
  } else if (email.indexOf("@") == -1) {
    showError("emailError", "Please enter your valid email address.");
    isValid = false;
  }
  if (password == "") {
    showError("passwordError", "Please enter a password.");
    isValid = false;
  } else if (password.length < 6) {
    showError('passwordError', "Atleast 6 character")
    isValid = false
  }
  if (retypePassword == "") {
    showError("retypePasswordError", "Please re-enter your password.");
    isValid = false;
  }
  if (password != retypePassword) {
    showError("retypePasswordError", "Passwords do not match.");
    isValid = false;
  }
  if (address == "") {
    showError("addressError", "please enter your address")
    isValid = false;
  }
  if (isValid) {
    const form = document.createElement("div")
    form.innerHTML = `Name:${name}<br>
     Last Name:${lastName}<br>
     Email:${email}<br>
     Password:${password}<br>
     Re-type password:${retypePassword}<br>
     Address:${address}`
    document.body.appendChild(form)

    console.log("Name:", name, "Last Name:", lastName, "Email:", email, "Password:", password, "Retype Password:", retypePassword,
      "address", address)
  }
}
// Function to display error message for a field
function showError(id, message) {
  const errorElement = document.getElementById(id);
  console.log(errorElement)
  errorElement.textContent = message;
  errorElement.style.display = "block";

}
function clearOneError(id) {
  const errorElement = document.getElementById(id);
  errorElement.textContent = "";
  errorElement.style.display = "none";
}
document.getElementById("name").addEventListener("input", function () {
  clearOneError("nameError");
});
document.getElementById("lastName").addEventListener("input", function () {
  clearOneError("lastNameError");
});
document.getElementById("email").addEventListener("input", function () {
  clearOneError("emailError");
});
document.getElementById("password").addEventListener("input", function () {
  clearOneError("passwordError");
});
document.getElementById("retype_password").addEventListener("input", function () {
  clearOneError("retypePasswordError");
});
document.getElementById("address").addEventListener("input", function () {
  clearOneError("addressError");
});
// Function to clear all error messages
function clearErrors() {
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach(errorElement => {
    errorElement.textContent = "";
    errorElement.style.display = "none";
  });
}
// Add submit event listener to the form
document.getElementById("signupForm").addEventListener("submit", validateForm);
