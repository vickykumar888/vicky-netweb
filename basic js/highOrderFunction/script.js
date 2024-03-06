/*...........high order function..........*/

//map example

let nums=[67,34,23,25];
let newArr=nums.map((val)=>{
    return val;
})
console.log(newArr);

// filter example
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result);

// reduce  example

const arr = [32, 33, 16, 40];
const total=arr.reduce((val,curr)=>{
 return val+curr;
},10)
console.log(total);

// find  example
 var aa=[{id:1, empName:'vicky'},
 {id:2, empName:'mansih'},{id:3, empName:'ritik'}];

 function idMatching(e){
    return e.id==2;
 }
 let a = aa.find(idMatching);
 console.log(a);

 // findIndex  example
 var brr=[{id:1, empName:'vicky'},
 {id:2, empName:'mansih'},{id:3, empName:'ritik'}];

 function idMatching(e){
    return e.id==2;
 }
 let aaa = brr.findIndex(idMatching);
 console.log(aaa);

 
 // some  example
 var brrr=[{id:1, empName:'vicky'},
 {id:2, empName:'mansih'},{id:3, empName:'ritik'}];

 function idMatching(e){
    return e.id==2;
 }
 let aaaa = brrr.some(idMatching);
 console.log(aaaa);

  
 // every  example
 var brrrr=[{id:2, empName:'vicky'},
 {id:2, empName:'mansih'},{id:2, empName:'ritik'}];

 function idMatching(e){
    return e.id==2;
 }
 let aaaaa = brrrr.every(idMatching);
 console.log(aaaaa);