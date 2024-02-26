let arr = ["ravi","rahul","sam"];
let arr1 = [1,2,3,4,5,6,7];

console.log(arr, arr1);
console.log(arr[1] , arr1[5]);

let arr2 = [{name:"rahul"}, {name:"rohan"}]

console.log(arr2[0]);
console.log(arr2);
console.log(arr1.map((item,index) => {
    return item * index
})) // mutliply each element of array with its index







