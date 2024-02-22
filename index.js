console.log("my first cosnole in js");

// Filter method 

let arr = [1, 5, 6, 78, 54, 36, 95, 3]
const arr1 = ["rahul", "rajan", "sam", "bahadur"];
let a = arr.filter((item) => {
    return item > 40;

})
console.log(a);
console.log(arr); // original array doesnot change 


const b = arr1.filter((item) => {
    if (item === "sam")
        return item;
});
console.log(b);
console.log(arr1) // original array does not change 

// map method 

let c = arr.map((item, index) => {
    return item * index

})
console.log(c);


let arr2 = [{ name: "rahul" },
{ name: "raj" }]
let d = arr2.map((item) => {
    item.age = 15
    return (item)
})
console.log(d);
console.log(arr2) // original array changes 

// some method

const e = arr.some((item)=>{
    return item >40 

})
console.log (e) // doesnot chanhe the array array remains the same 

// every method 

const f = arr.every((item ) =>{
   item ===1
})
console.log(f) // false 

let arr4 = [1,1,1,1]
 let g = arr4.every((item)=>{
    return item ===1  
})
console.log(g); // true 

// find index 
let h = arr.findIndex((item) =>{
    return item === 78
})
console.log(h)
console.log(arr)// doesnot effect or change the original array

// spread function 

let combine = [...arr , ...arr4]
console.log(combine);
console.log(arr , arr4) // does not effect the original arrays 

// reduce 

let sum = arr.reduce((acc, item)=>{
    return acc + item
})
console.log(sum ); // 278
console.log(arr ); // doesnot effect original array

//Higher order function 

function ab(ff){
return ff
}
function call (){
    console.log("function is called ")
} 
ab(call()); // function called inside another function 

let result = ab(call)
console.log(result());//function is called 
console.log(result); //[Function: call]


 