// //  for loop
 
// //  let marks = {
// //     annu : 67,
// //     tulan : 87,
// //     sonu : 45
// //  }
// // for(let i = 0;i< Object.keys(marks).length;i++){
// //     console.log("The marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]]);
// // }

// //  for in loop
// //  for(let key in marks){
// //     console.log("The marks of " + key + " is " + marks[key]);
// //  }

// // Enter a correct number

// let cn = 5;
// let i;
// while(i != cn){
//     i = prompt("Enter a number : ");
// }
// console.log("You are enter a correct number");


// const mean = (a ,b, c, d) => {
//     return (a+b+c+d)/4;
// }
// console.log(mean(3,4,5,6));
let sum = 0;
// let n = prompt("Enter a natural number: ");
let n = 4;
for(let i=1;i<=n;i++){
    sum += i;
 
}
console.log(sum);
