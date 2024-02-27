const obj = {
    animal: "dog",
    type : "Domestic",
    info: function(){
        return (`${this.animal} is a ${this.type} aniaml`)
    }
}

//console.log(obj); //{ animal: 'dog', type: 'Domestic', info: [Function: info] }

//console.log(obj.info());

const obj1 = {
    animal: "Lion",
    type: "wild"
}

//console.log(obj.info.call(obj1 )) //  Lion is a wild aniaml
//console.log(obj.info.apply(obj1)) //  Lion is a wild aniaml

function  greet(){
  console.log(`${this.animal} is a ${this.type} animal`)
}

// greet(); // undefined is a undefined animal
// // but if i call 

// greet.call(obj1) // Lion is a wild animal

const nums = [4,5,8,3,9,3];
// let max = Math.max.apply("" , nums);
// console.log(max);
// let min = Math.min.apply("", nums);
// console.log(min); 



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

