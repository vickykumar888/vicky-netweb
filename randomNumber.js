// write function to generate random num between 1 to 10
function generateRandom(min, max) {
    const random = Math.random();
    const resultRandom = Math.floor(random * (max - min + 1)) + min;
    return resultRandom;
}

console.log(generateRandom(1, 10)); 


