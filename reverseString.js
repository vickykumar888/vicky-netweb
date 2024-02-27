// Write a function that reverse a given string. reverse(“Hello World”) ➞ dlroW olleH

let str = "hello world";
let revrse = reverseString(str);
console.log(revrse);

function reverseString(str) {
    let revrse = "";
    for (let c of str) {
        revrse = c + revrse;
    }
    return revrse;
}