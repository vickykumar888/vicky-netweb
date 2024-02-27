let fruits = ['apple', 'banana', 'orange'];
console.log(fruits);
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let cars = ["alto", "volvo", "BMW",]
console.log(cars)
for (let value of cars) {
  console.log(value)
}

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matrix[1])
console.log(matrix[2])

const words = ['hello', 'world', 'javascript'];

const lengths = words.map(function (word) {
  return word.length;
});

console.log(words[0].length)
console.log(words[2].length)

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(function(number) {
  return number * number;
});
  console.log(squaredNumbers)
