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

