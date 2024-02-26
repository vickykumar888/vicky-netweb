// function to reverse a string 

function reverseStr(str){
    let reverse = str.split("").reverse().join("");
    return reverse
}
console.log( reverseStr("Hello World"));
console.log( reverseStr("Madam"));