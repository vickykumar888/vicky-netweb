const nums = [4,5,8,3,9,3];
let max = Math.max.apply("" , nums);
console.log(max);
let min = Math.min.apply("", nums);
console.log(min); 



// const obj = {
//     animal: "dog",
//     type : "Domestic", 
//     info: function(sound){
//         return (`${this.animal} is a ${this.type} aniaml who ${sound}` )
//     }
// }
// console.log(obj.info("bark"));

//  let obj2 = {
//     animal: "cat",
//     type: "Domestic",
// }

// console.log(obj.info.apply(obj2 , ["meow"] ))


function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    return total;
  }
  const numbers = [1, 2, 3, 4, 5];
  const result = sum.apply(null, numbers);
  const result1 = sum.call(null ,  numbers);
  console.log(result1); // Output: 01,2,3,4,5
  console.log(result); // Output: 15

// other way of function 
// function sum() {
//     let arguments = [1, 2, 3, 4, 5];
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//      total += arguments[i];
//     }
//     return total;
   
// }
//  console.log(sum())
