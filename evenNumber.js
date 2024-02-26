// Write a function that returns an array of all even numbers between 1 and 100
function getEvenNumbers() {
    const evenNumbers = [];
    for (let i = 2; i <= 100; i += 2) {
        evenNumbers.push(i);
    }
    return evenNumbers;
}

const result = getEvenNumbers();
console.log(result);

