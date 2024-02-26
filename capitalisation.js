let str = "this is an example of lowercase string";
function capital(){
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
   

console.log(capital());

// let firstLetter = str.charAt(0);
// let upper = firstLetter.toUpperCase() + str.slice(1);
// return upper;
