let names = ["pooja", 23 , "Amritsar" , "Delhi"];
//to access whole array
console.log(names);
// to access index of array
console.log(names[2]);
console.log(names[0]);


// array of obj;
let obj = [
    {
        age:20,
        city:"Delhi",
    }   
]
console.log(obj[0].age);
console.log(obj[0].city);

// we can loop through our array and print the array;
let superHeroes = ["shaktiman" , "ironman" , "hulk" ,"spiderman"];
let newSuperHeroes = superHeroes.forEach((item)=>{
    console.log(item)
})
// using map fun on  obj of an array;

let Data = [
    {name :"Anika" , age:24 ,phone:"iphone"},
    {name :"niya" , age:22 ,phone:"samsung"},
    {name :"Aarya" , age:24 ,phone:"blackberry"},

]
let newData = Data.map((elem)=>{
    return elem.name.toUpperCase();
})
console.log(newData);
