// write function for sum of arguments
function calculateSum(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

console.log(calculateSum(1, 2, 3, 4, 5)); 