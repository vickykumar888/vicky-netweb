const person =  "dinesh"

let info = localStorage.setItem("person", person);
console.log(info);

let info2 = localStorage.getItem("person")
console.log(info2);

let info3 = localStorage.removeItem("person");

let info4 = localStorage.clear()