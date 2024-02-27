// function to reverse a string 

// function reverseStr(str){
//     let reverse = str.split("").reverse().join("");
//     return reverse
// }
// console.log( reverseStr("Hello World"));
// console.log( reverseStr("Madam"));

// or

function revstr(str){
    var newString = " ";
    for (var i = str.length -1; i >= 0; i--){
        //console.log(i)
        newString += str[i];
    }
  return newString;
}
console.log(revstr('hello'));
console.log(revstr('Madam'));
console.log(revstr('Honey'));
