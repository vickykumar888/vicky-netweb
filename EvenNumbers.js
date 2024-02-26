// function for array of even numbers between 1 & 100
function evenNum() {
    let arr = [];
    for (let i = 1; i < 100; i++) {
        if (i % 2 === 0) {
            arr.push(i)
        }
    }
    console.log(arr)
}
evenNum(); 
