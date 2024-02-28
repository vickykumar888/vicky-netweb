// call , apply ,bind method
let person1 = {
  firstName: "john",
  lastName: 'kuperman',
  fullName: function (home, country) {
    return this.firstName + " " + this.lastName + " " + home + " " + country
  }
}
let person2 = {
  firstName: 'kelly',
  lastName: 'bist'

}
console.log(person1.fullName.call(person2, "gujrat", "india"))
console.log(person1.fullName.apply(person2, ["gujrat", "india"]))
let result = person1.fullName.bind(person2, "gujrat", "india")
console.log(result)
console.log(result())

let obj = {
  name: "herry",
  greet: function (lastName) {
    return this.name + " " + lastName
  }
}
let obj2 = {
  name: "Rishi"
}
console.log(obj.greet.call(obj2, "Sharma"))
console.log(obj.greet.apply(obj, ["Sharma"]))

// bind method

let country1 = {
  name: "india",
  greet: function () {
    return this.name
  }
}
let country2 = {
  name: "china",
}
let countryName = country1.greet.bind(country2)
// console.log(countryName)
console.log(countryName())

// apply method
const person = {
  name: 'mohan',
  lastName: 'roy',
}
function greet(greeting, message) {
  return ` ${greeting} ${this.name} ${message} `

}
let res = greet.apply(person, ['hello', 'How are you'])
console.log(res)

 let student={
  name:"sahil",
  section :"1"
 }
 function detail(sec){
    return `${this.name} ${sec}  ${this.section}`
 }
 let newObj=detail.call(student,"your section is")
 console.log(newObj)