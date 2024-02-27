
function reverse(arr) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        a[i] = arr[arr.length - (i +1)];
        console.log(i+1)
    }
    return a;
};
console.log(reverse(["hello" ,"world"]))