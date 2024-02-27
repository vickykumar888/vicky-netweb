/** example of bind */
{/** Example 1 */}
// let person = {
//     name: "Mohit",
//     greet: function (message) {
//       console.log(`Hello ${message}`);
//     },
//   };
  
//   let greetFromObject = person.greet.bind(); /** in this we need to person object as reference */
//   greetFromObject("How are you ?.");

{/** Example 2 */}
// let person = {
//   name: "Mohit",
//   greet: function (message) {
//     console.log(`Hello ${this.name} ${message}`);
//   },
// };

// let greetFromObject = person.greet.bind(person); /** in this we need to person object as reference */
// greetFromObject("How are you ?.");

{/*** example 3 */}

let person = {
  name: "Mohit",
  greet: function (message) {
    console.log(`Hello,  ${message} ${this.name}`);
  },
};

let anotherPerson = { name: "Jhon" };

let greetFromObject =
  person.greet.bind(
    anotherPerson
  ); /** in this we need to person object as reference */
greetFromObject("How are you ?.");