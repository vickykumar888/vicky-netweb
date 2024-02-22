// higher order function :passed as an argument
// map function: return new array
let data = [
  { name: "pooja", age: 21 },
  { name: "Aarya", age: 21 },
  { name: "Rihsab", age: 21 },
  { name: "Nita", age: 21 },
  { name: "Raghaav", age: 21 },
  { name: "Riyaa", age: 21 },
];

let result = data.map((item) => {
  return item.name.toUpperCase();
});
console.log(result);


let num =[1,2,3,4,5,6]
let newNum =num.map((numbers)=>{
    return numbers+2;
})
console.log(newNum);

// reduce :give sum or total or gives single value function
let values = [2, 3, 4, 5, 6, 6, 7, 7, 7];
let concl = values.reduce((acc, val) => {
  return acc + val;
});
console.log(concl);

// filter :pass the test for particular condition;
let newData = [
    {studentname:"aarya",grade:"d"},
    {studentname:"aishaa",grade:"c"},
    {studentname:"rita",grade:"b"},

];
const rel =newData.filter((elem) => {
  return elem.studentname === "aarya";
});
console.log(rel);

// every :passes condition for all return false if even one value is different from condition
let fruits = ["guava","apple","annar","santra"];
let newFruits = fruits.every((fruit)=>{
    return fruit==="guava"
})
console.log(newFruits);

// some function : it is opp of every and return true even of one condition is fulfilled
let heroes = ["shaktiman","hulk","bahubaali","spiderman","ironman"];
let newHeroes = heroes.some((hero)=>{
    return hero==="bahubaali"
})
console.log(newHeroes)


// find: find the element which pass the text and find index return the index of array
let newDATA = [
  { drink:"pepsi", cost:700},
  { drink:"coca cola", cost:500},
  { drink:"maza", cost:400},

]
let resultData = newDATA.find((elements)=>{
    return elements.cost==700;
})
console.log(resultData);



// Truthy values and Falsey Values
// example of truthy :true ,{},[],"string","false"
let onboarding =true;
if(onboarding){
    console.log("done")
}
else{
    console.log("undone")
}
// example of  Falsey Values 0,false , null,undefined ,NaN, "" (empty string)
let value = 0
if (value) {
  console.log("done");
} else {
  console.log("undone");
};


// falsely values
if (null) {
    console.log("null is falsy");
}

if (undefined) {
    console.log("undefined is falsy");
}

if (0) {
    console.log("0 is falsy");
}

if (NaN) {
    console.log("NaN is falsy");
}

if ("") {
    console.log("An empty string is falsy");
}
// spread operator:makes copy of an array;

// it will add amazon to all the companies
let comapnies = ["HCL","TATA","GOOGLE","MICORSOFT"];
let newCom = [...comapnies ,"AMAZON"];
console.log(newCom);

// rest operators in obj;

let obj ={
    pet :"shaanu",
    age:2,
    breed:"pug",
}

let newObj = {
    ...obj,
    owner: "pooja"
};

console.log(newObj);

// array methods;
// join
let languages = ["html" ,"css","js","python"];
let newlang  = languages.join("-")
console.log("original arr :" + languages);
console.log("new arr :" +newlang);

// pop:removes last element;
let fal =["aam","annar","santra","papita"];
let newfal = fal.pop();

console.log(fal);
console.log("popped elem: " + newfal);

// push:adding an element at the end;

let months = ["jan","feb","march","april"];
let newMonths = months.push("may");
console.log(newMonths);
console.log(months)

//unshift:add elem in beginnig
let day = ["monday","tuesday","wednesday"];
let newDay = day.unshift("thursday");
console.log(day);

// length:tells length of array
const films =["pk","dhoom","aarya"];
console.log(films.length)

// slice  :removing element and end is exclusive
let phones = ["redmi","nokia","realme","iphone"];
let newphones = phones.slice(1,3)
console.log(newphones)

// splice : used to add to remove element
let newarray =[1,2,3,4,5,6];
let newArray = newarray.splice(1,2,"10")

console.log(newarray);

// concat : to concat two arrays;
let college = ["khalsa college", "dav", "saroop raanni", "dav women"];
let newCollege = ["oxford", "gndu"];
let mergedColleges = college.concat(newCollege);
console.log(mergedColleges);

// to string :convert the array into string;

let system = ["ios","ipad","zoombla"];
console.log(system.toString());

// includes : return true if element is present and false if element is not present

let city =["delhi","mimbai","rajasthan","amritsar"];
let newCity = city.includes("delhi")
console.log(newCity);