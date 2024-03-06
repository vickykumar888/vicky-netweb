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
    const formData = getFormData(); 
    console.log(formData); 
    form.submit();
    form.reset();
  } else {
    return false;
  }
});

const validate = () => {
  let isValid = true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const phoneNumberPattern = /^\d*$/;

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const number = numberInput.value.trim();
  const address = addressInput.value.trim();
  const password = passwordInput.value.trim();
  const conPassword = conPasswordInput.value.trim();
  
  nameInput.addEventListener("input", function() {
    document.querySelector(".nameError").innerHTML = ""; 
  });

  emailInput.addEventListener("input",function(){
    document.querySelector(".emailError").innerHTML ="";
  });

  numberInput.addEventListener("input",function(){
    document.querySelector(".PhError").innerHTML="";
  });

  addressInput.addEventListener("input",function(){
    document.querySelector(".adressError").innerHTML="";
  });

  passwordInput.addEventListener("input",function(){
    document.querySelector(".passError").innerHTML="";
  });

  conPasswordInput.addEventListener("input",function(){
    document.querySelector(".conPassError").innerHTML="";
  });

  if (name === "") {
    document.querySelector(".nameError").innerHTML = "Please enter your name.";
    isValid = false;
  }
  if (email === "") {
    document.querySelector(".emailError").innerHTML = "Please enter your email.";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document.querySelector(".emailError").innerHTML = "Invalid email";
    isValid = false; 
  }

  if (number === "") {
    document.querySelector(".PhError").innerHTML = "Please enter your phone number.";
    isValid = false;


  } 
else if(!phoneNumberPattern(number)){
  document.querySelector(".PhError").innerHTML = "you can only pass numbers";
    isValid = false;
}

  if (address === "") {
    document.querySelector(".adressError").innerHTML = "Please enter your address.";
    isValid = false;
  }

  if (password === "") {if (email === "") {
    document.querySelector(".emailError").innerHTML = "Please enter your email.";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document.querySelector(".emailError").innerHTML = "Invalid email";
    isValid = false; 
  }
    document.querySelector(".passError").innerHTML = "Please enter your password.";
    isValid = false;
  } else if (password.length < 8) {
    document.querySelector(".passError").innerHTML = "Password must be at least 8 characters long.";
    isValid = false;
  }

  if (conPassword === "") {
    document.querySelector(".conPassError").innerHTML = "Please confirm your password.";
    isValid = false;
  } else if (conPassword !== password) {
    document.querySelector(".conPassError").innerHTML = "Passwords do not match.";
    isValid = false;
  }

  return isValid;
};

const getFormData = () => {
  return {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    number: numberInput.value.trim(),
    address: addressInput.value.trim(),
    password: passwordInput.value.trim(),
    conPassword: conPasswordInput.value.trim()
  };
};
