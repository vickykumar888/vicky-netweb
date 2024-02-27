// call
let Dog = {
    name : "moti",
    age:4,
    color:"black",
    method:function(message){
        console.log(this.name   + message)
    }
}
// without call
Dog.method(" good morning ");


let carObj = {
    name:"SUV",
    brand :"toyota",
    price:"5lakhs",
    tyre:"mrf"
}
Dog.method.call(carObj , " byee");

let fullname = function () {
return this.firstName + ' ' + this.lastName; 
}
let person1 = {
firstName: "pooja",
lastName: "chuhan",
};

let person2 = {
firstName: "aarya",
lastName: "rawat",
};
console.log(fullname.call(person1)); 

