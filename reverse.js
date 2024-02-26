function reverseString(str) {
    let reversedStr = str.split('');
    let string= reversedStr.reverse();
    let joinArray=string.join('');
    return joinArray
}
console.log(reverseString("HELLO WORLD"))
