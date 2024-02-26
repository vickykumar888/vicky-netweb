// Write a function that reverse a given string. reverse(“Hello World”) ➞ dlroW olleH

let str = "hello world";
let arr = str.split('');
// first convert string into array using split();
console.log(arr); 
arr.reverse().join("");
console.log("reversed string " + arr.join(''))
