// array method
// map method
const array = [{ name: 'sunny', age: 23 }]
array.map((item, index) => {
  return (
    <p key={index}>{item}</p>
  )
})
// filter method
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);
function checkAdult(age) {
  return age >= 18;
}
console.log(result)//32,33,40

//  reduce method
const number = [1, 2, 3, 4, 5, 6]
const sum = number.reduce((acc, item) => {
  return (
    acc + item
  )
})
console.log(sum)//21

// every method
const age = [32, 33, 16, 40];

ages.every(checkAge)

function checkAge(age) {
  return age > 18;
}  // false because every() returns true if all elements in an array pass a test provided as a function.

// spread operator

function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];

console.log(sum(...numbers));
// Expected output: 6

console.log(sum.apply(null, numbers));
// Expected output: 6

// push method

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi", "Lemon");

// Banana,Orange, Apple, Mango,Kiwi,Lemon

// pop method
const cars = ["Banana", "Orange", "Apple", "Mango"];
cars.pop(); 
//  pop() returns the element it removed:
Mango

// find method
const adultAge = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}

// find() returns the value of the first element in an array that passes a test (provided by a function):

20