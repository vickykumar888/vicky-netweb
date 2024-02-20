console.log("my first cosnole in js");
// var, let, const 

// reinitialize
let x = 10;
 console.log(x);
  x = 11;
console.log(x);
// let can be reassigned but not reinitialize 

// while using const 
// const a = 4;
// console.log(a);
// a = 8;

// console.log(a)
// this will throw an error because const can't be reassigned and reinitialize

var aa = 7;
var aa = 44;
console.log(aa)
aa = 98;
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

//output 15 no error because of hosting 
// but there should be error if we use arrow functions with const or let 
// summ(2,5);
// const summ = (e,f) =>{
//     console.log(e+f)
// }
 // output will be refrence error 

// Scope of let and const is block whereas for var it is gobal 
{
    var e = 10;
}
console.log(e);
// output 10 

// {
//     let ee = 14;

// }
// console.log(ee);
// Refrence error will be there 

// {
//     const eee = 55;
// }
// console.log(eee);
// output will be refrence error 