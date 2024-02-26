let obj = { name: "rohan", class: "BCA"};
console.log(obj);
console.log(obj.name);
console.log(obj.class);
console.log(Object.entries(obj));
console.log(Object.keys(obj));
console.log(Object.values(obj));
let obj1 = Object.entries(obj).map((item) => {
    console.log(item)
});
let obj2 = {
    name: "ravi",
    "last name": "kumar",
    "class": "BCA"
}

console.log(obj2.name);
console.log(obj2.class);
// console.log(obj.last name); // this will give you error
console.log(obj2["last name"]);
console.log(obj2["name"]);