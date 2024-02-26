console.log("my first cosnole in js");
// var, let, const 

// reinitialize
let a = 10;
 console.log(a);
  x = 15;
console.log(a);
// let can be reassigned but not reinitialize 

// while using const 
// const b = 7;
// console.log(b);
// b = 6;

// console.log(a)
// this will throw an error because const can't be reassigned and reinitialize

var c = 9;
var c = 31;
console.log(c)
c = 50;
// this will not throw any error

//hoisting 

// var and function show hosting but let and const due to not having global contex eg
console.log(zz);
var zz = 10;
// output undefined ; 

// console.log(zzz)
// let zzz = 11;
// output refrence error 

// console.log(w);
// const w = 87
// output refrence error

sum(7,8);
function sum (a,b){
    console.log( a+b)
}

// //output 15 no error because of hosting 
// let a = 100;
// for (let i = 0; i < a; i++) {
//     if (i % 2 == 0) {
//         console.log("All even numbers 1 to 100", i)
//     }
// }

// function convert(mintues) {
//     let seconds = mintues * 60
//     return seconds
// }
// console.log(convert(5))