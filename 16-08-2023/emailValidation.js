function isEmailValid(email) {
    const emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailValidation.test(email);
}
const email = 'annu@gmail.com';
const isValid = isEmailValid(email);
console.log(isValid);