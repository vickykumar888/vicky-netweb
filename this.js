/** Expample to understand the this */

let person = {
    name :"Mohit",
    greet : function (){console.log(this.name)} 
}
person.greet();
