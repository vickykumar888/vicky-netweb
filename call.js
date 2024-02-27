/** exaple of call */

{/** function is called without the call object  */}
// const person = {
//   name: "Mohit",
//   greet: function (message) {
//     console.log(`Hello ${this.name} , ${message}`);
//   },
// };

// person.greet("How are you");

{/** now if we want to execute the same greet function for another object then we can use the call method */}

let person1 = {
  name: "Mohit",
  greet: function (message) {
    console.log(`Hello ${this.name} , ${message}`);
  },
};

let anotherPerson ={
    name:"Jhon", 
    message :"How about going on lunch ?. "
}

{/** to execute the greet function for the anotherPerson we can use the call method */}

person1.greet.call(anotherPerson, anotherPerson.message);