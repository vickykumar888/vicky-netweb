const form  = document.getElementById('form1')
const pattern =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//const mob = /^ [0-9]{9}*$/

form.addEventListener('submit' ,(e)=>{
  e.preventDefault()
    let isValid = true

    const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const address = document.getElementById('add')
const phone = document.getElementById('phone')
const confirmPassword = document.getElementById('confirm')



const firstNameSpan  = document.getElementById('first-name-span')
const lastNameSpan  = document.getElementById('last-name-span')
const emailSpan = document.getElementById("email-span")
const passwordSpan = document.getElementById("password-sapn")
const addressSpan = document.getElementById("add-span")
const phoneSpan = document.getElementById("phone-span")
const confirmPasswordSpan = document.getElementById("confirm-span")

       
    if(firstName.value ==='' || firstName.value === null ){
        isValid = false
        firstNameSpan.innerHTML = "First Name is required";
       
    }
    if(lastName.value ==='' || lastName.value === null ){
        isValid = false
        lastNameSpan.innerHTML = "Last Name is required";
    }
    if(email.value ==='' || email.value === null ){
        isValid = false
        emailSpan.innerHTML = "Email is required";
    }
     
    else if (!email.value.match(pattern)){
        isValid = false
        emailSpan.innerHTML = "enter a valid email"
    }

    if(password.value ==='' || password.value === null ){
        isValid = false
        passwordSpan.innerHTML = "Password is required";
    }
     else if(password.value.length < 6 || password.value.length > 15 ){
        isValid = false
        passwordSpan.innerHTML = "Min 6 and max 15 digits require";
    }
    if(address.value ==='' || address.value === null ){
        isValid = false
        addressSpan.innerHTML = "Address is required";
    }
    if(phone.value ==='' || phone.value === null ){
        isValid = false
        phoneSpan.innerHTML = "phone number is required";

    }
    else if(phone.value.length != 10){
        isValid = false
        phoneSpan.innerHTML = "number length shuld be 10 digits "
    
    }
   
    if(confirmPassword.value ==='' || confirmPassword.value === null ){
        isValid = false
        confirmPasswordSpan.innerHTML = "Confirm Password is required";
    }
    else if(confirmPassword.value !== password.value){
        isValid = false
        confirmPasswordSpan.innerHTML = "Password Sould be same"
    }

    if (isValid) {
        const formData = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value,
            address: address.value,
            phone: phone.value,
            confirmPassword: confirmPassword.value
        };
        console.log(formData);
        form.reset();
    }

 firstName.addEventListener('input', ()=>{
        firstNameSpan.innerHTML = ""
    })
 lastName.addEventListener('input', ()=>{
        lastNameSpan.innerHTML = ""
    })
    email.addEventListener('input', ()=>{
        emailSpan.innerHTML = ""
    })
    password.addEventListener('input', ()=>{
        passwordSpan.innerHTML = ""
    })
    address.addEventListener('input', ()=>{
        addressSpan.innerHTML = ""
    })
    phone.addEventListener('input', ()=>{
        phoneSpan.innerHTML = ""
    })
    confirmPassword.addEventListener('input', ()=>{
        confirmPasswordSpan.innerHTML = ""
    })

    // console.log(formData);
})