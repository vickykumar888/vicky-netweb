let errormsg = document.querySelectorAll(".error");
  const name_error=document.getElementById("errorField1")
  const address_error=document.getElementById("errorField2")
  const email_error=document.getElementById("errorField3")
  const number_error=document.getElementById("errorField4")
  const password_error=document.getElementById("errorField5")
  const confirm_error=document.getElementById("errorField6")

  const nameInput = document.getElementById("name")
  const addressInput = document.getElementById("address")
  const emailInput = document.getElementById("email")
  const passwordInput = document.getElementById("password")
  const confirmInput = document.getElementById("confirm")
  const numberInput = document.getElementById("number")



  nameInput.addEventListener("input",()=>{
    name_error.remove()
  })
  addressInput.addEventListener("input",()=>{
    address_error.remove()
  })
  emailInput.addEventListener("input",()=>{
    email_error.remove()
  })
  numberInput.addEventListener("input",()=>{
    number_error.remove()
  })
  passwordInput.addEventListener("input",()=>{
    password_error.remove()
  })
  confirmInput.addEventListener("input",()=>{
    confirm_error.remove()
  })
function validateForm() {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const number = document.getElementById("number").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  errormsg.forEach((errorMsg) => {
      
    errorMsg.textContent = "";
  });
  
  // Check each input field
  if (name.trim() === "" ) {
    document.getElementById("errorField1").innerHTML = "Name is required";
  }

  if (address.trim() === "") {
    document.getElementById("errorField2").innerHTML = "Address is required";
  }

  if (number.trim() === "" ) {
    document.getElementById("errorField3").innerHTML = "Email is required";
  }if(!emailRegex){
    document.getElementById("errorField3").innerHTML = "Email is required";
  
  }

  if (email.trim() === "") {
    document.getElementById("errorField4").innerHTML = "Number is required";
  }

  if (password.trim() === "") {
    document.getElementById("errorField5").innerHTML = "Password is required";
  }

  if (confirm.trim() === "") {
    document.getElementById("errorField6").innerHTML = "Confirm is required";
  }

  // Clear error messages if input values are filled
  if (
    name.trim() !== "" &&
    address.trim() !== "" &&
    email.trim() !== "" &&
    number.trim() !== "" &&
    password.trim() !== "" &&
    confirm.trim() !== ""
  ) {
    if (name && address && email && number && password === confirm) {
      const formData = [
        {
          name,
          address,
          number,
          email,
          password,
          confirm,
        },
      ];
      
      console.log("Form Data:", formData);
      nameInput.value=""
      emailInput.value=""
      passwordInput.value=""
      addressInput.value=""
      confirmInput.value=""
      numberInput.value=""
    }
  }
  if (password !== confirm) {
    document.getElementById("errorField7").innerHTML =
      "password does not match";
  }
}
