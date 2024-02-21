console.log("my first cosnole in js");

//operators 
let a = 4;
let b = 5;
let c = 8;

console.log(a + b); //addition 
console.log(a - b); //subtraction
console.log(a * b);// multiplication
console.log(a ** 2); // exponentation
console.log(c / a); // division
console.log(c % b); // modulud (division remainder)
console.log(a == a);//true
console.log(a === a);// true
let d = "4";
console.log(a === d);// false
a++;
console.log(a)//increment operator
a--;
console.log(a) // decrement operator 

// logical operator and if else statements 

if (a > 1 && a < 5) {
    console.log(a) //when a satisfy both the condition
} else {
    console.log(b) // when a is not satisfy any condition 
}
if (a > 1 || a < 5) {
    console.log(a) //when a satisfy any contion from the given two  condition
} else {
    console.log(b) // when a is not satisfy any condition 
}

if (!(a > 0 || c > 0)) {
    console.log(true) // both the conditions were true then also we got flase output because of logical not 
}
else {
    console.log(false);
}

a = 4 ? console.log("hello") : console.log("not 4")// ternary operator

// switch 
let age = 19;
switch (age) {
    case 12:
        console.log("Your age is 12 years");
        break;
    case 24:
        console.log("your age is 24 years");
        break;
    case 19:
        console.log("Your age is 19 Years")


}
loops 

//for loop

for(let i = 0; i < 5; i++){
console.log(i)
};

// let cars = ["maruti", "bmw", "toyota", "tata","mahindra"];
// for (let i = 0; i< cars.length ;i++){
//     console.log(cars[i]);

// }

// while loop 

let i = 0;
while (i<5){
    console.log(i);
    i++
}
// let cars = ["maruti", "bmw", "toyota", "tata","mahindra"];
//  let i = 0;
// while(i< cars.length){
//     console.log(cars[i]);
//     i++
// }

// do while loop 
// let i = 1
// do {
//  console.log(i);
//  i++
// }
// while(i<5) // output will be like counting 0 to 4 but if value of i will be 6 which breaks condition even then also loop runs and only 6 is printed

// for in loop and for of loop 

let marks = {
    person1: 41,
    person2: 74,
    person3: 54,
    person4: 69,
}
for (let p in marks){
    console.log( p + " " +  marks[p]) // for in loop
}

let v = "speed"
for (let z of v){
    console.log(z); // for in loop 
}

let car = ["swift", "van" ,"truck"]
for (let n in car){
    console.log(n); //for of loop 
}