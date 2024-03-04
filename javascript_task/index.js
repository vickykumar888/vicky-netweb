//print Even Number between 1 to 100

function getEvenNumbers() {
  const evenNumbers = [];

  for (let i = 2; i <= 100; i += 2) {
    evenNumbers.push(i);
  }

  return evenNumbers;
}

const EvenNumber = getEvenNumbers();
console.log(EvenNumber);

//minutes into second

function minutesToSeconds(minutes) {
  return minutes * 60;
}

// Example usage:
const minutes = 5;
const seconds = minutesToSeconds(minutes);
console.log(`${minutes} minutes is equal to ${seconds} seconds.`);

//Age to Days

function Age(value) {
  const Days_inYear = 365;
  const convert = Days_inYear * value;
  return convert;
}

console.log(Age(19));

//reverse a String

function String_value(text) {
  const a = text.split("");
  const b = a.reverse();
  return b.join("");
}

console.log(String_value("Hello World"));

//captalize firt letter of string

function capitalizeWords(sentence) {
  let words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
}

console.log(capitalizeWords("this is an example of lowercase string"));

//Calculate Sum

function Calculate_Sum(a, b, c, d, e) {
  let sum = a + b + c + d + e;
  return sum;
}

console.log(Calculate_Sum(1, 2, 3, 4, 5));
