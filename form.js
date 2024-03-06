const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const password = document.getElementById('password')
const email = document.getElementById('email')
const address = document.getElementById('add')
const phone = document.getElementById('phone')
const confirmPassword = document.getElementById('confirm')
const form  = document.getElementById('form1')


const firstNameSpan  = document.getElementById('first-name-span')
const lastNameSpan  = document.getElementById('last-name-span')



form.addEventListener('submit' ,(e)=>{
       
    if(firstName.value ==='' || firstName.value === null ){
        e.preventDefault()
        firstNameSpan.innerHTML = "First Name is required";
    }

    if(lastName.value ==='' || lastName.value === null ){
        e.preventDefault()
        lastNameSpan.innerHTML = "Last Name is required";
    }


})