const form = document.querySelector(".myForm");
const nameInput = document.querySelector(".userName");
const emailInput = document.querySelector(".userEmail");
const numberInput = document.querySelector(".userNum");
const addressInput = document.querySelector(".UserAddress");
const passwordInput = document.querySelector(".userPassword");
const conPasswordInput = document.querySelector(".confirmPassword");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validate()) {
        form.submit();
    } else {
        return false;
    }
});

const validate = () => {
    let isValid = true;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const number = numberInput.value.trim();
    const address = addressInput.value.trim();
    const password = passwordInput.value.trim();
    const conPassword = conPasswordInput.value.trim();

    if (name === "") {
        document.querySelector(".nameError").innerHTML = "Please enter your name.";
        isValid = false;
    } else {
        document.querySelector(".nameError").innerHTML = "";
    }

    if (email === "") {
        document.querySelector(".emailError").innerHTML = "Please enter your email.";
        isValid = false;
    } else {
        document.querySelector(".emailError").innerHTML = "";
    }

    if (number === "") {
        document.querySelector(".PhError").innerHTML = "Please enter your phone number.";
        isValid = false;
    } else {
        document.querySelector(".PhError").innerHTML = "";
    }

    if (address === "") {
        document.querySelector(".adressError").innerHTML = "Please enter your address.";
        isValid = false;
    } else {
        document.querySelector(".adressError").innerHTML = "";
    }

    if (password === "") {
        document.querySelector(".passError").innerHTML = "Please enter your password.";
        isValid = false;
    } else if (password.length < 8) {
        document.querySelector(".passError").innerHTML = "Password must be at least 8 characters long.";
        isValid = false;
    } else {
        document.querySelector(".passError").innerHTML = "";
    }

    if (conPassword === "") {
        document.querySelector(".conPassError").innerHTML = "Please confirm your password.";
        isValid = false;
    } else if (conPassword !== password) {
        document.querySelector(".conPassError").innerHTML = "Passwords do not match.";
        isValid = false;
    } else {
        document.querySelector(".conPassError").innerHTML = "";
    }

    return isValid;
};
