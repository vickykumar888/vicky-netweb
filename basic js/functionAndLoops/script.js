/*...............function.........*/

//normal function example
let a=5,b=10;
function sum(a,b){
 return a+b;
}
console.log(sum(a,b));

//arrow function example

// using arrow functions
let add=(a,b)=>a+b;
console.log(add(50,10));

/*......................loops.........*/

//for loop example
for(let i=1;i<=10;++i){
    console.log(2*i);
}

// while loop example
let i=0;
while(i<10){
    console.log(i);
    ++i;
}

//for in loop example
let obj={
    name:"vicky",
    age:24,
    city:"Amritsar",
}

for(let i in obj){
    console.log(obj[i]);
}

////for of loop example
const arr=[4,12,14,10];
for(let i of arr){
    console.log(i);
}

////for each  loop example
let arr2=[4,12,14,10];

arr2.forEach((val)=>{
console.log(val);
})
