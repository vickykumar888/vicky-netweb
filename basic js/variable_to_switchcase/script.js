// var is global scope variable it can be redeclared and can be updated 
/*
Prefer not to use var
because of issue in block scope and functional scope
 */
var name="vicky";
var name="vicky kumar";
console.log(name);


//let is block level scope and it cannot be redeclared but can be updated .
{
let name="vicky";
// let name=" mainsh kumar";
// error is occur here because of redeclaration of let variable. 
name="manish";
console.log(name);
// here manish is printed 
}
console.log(name);
// here vicky kumar is printed because var is global scope 


// const is block scope variable it cannot be redeclared and cannot be updated 
const name="aman";
const name="ritik";//error is occur 
console.log(name);
name="ritik";// error is occur 
console.log(name);


/* operators..............................*/

// .............Airthmetic operator....

// Addition
var a = 4;
var b = 3; 
var x = a + b; // adding 2 variables
var x = (100 + 50) * a; // expressions

// Subtraction
var x = 5;
var y = 2;
var z = x - y;

// Multiplication
var x = 5;
var y = 2;
var z = x * y;

// Division
var x = 5;
var y = 2;
var z = x / y;

// Modulo
var x = 5;
var y = 2;
var z = x % y;

// Increment
var x = 5;
x++;
var z = x;

// Decrement
var x = 5;
x--;
var z = x;

//...........comparison operator......

let text1 = "A";
let text2 = "B";
let result = text1 < text2;

let text3 = "What a very ";
text3 += "nice day";

//..........Shift Assignment Operators...

//  Left Shift Assignment Operator 
let x = -100;
x <<= 5;

//............logical operator....

let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'The office is closed.' );
}

//.............bitwise operator......

// bitwise AND operator example

let a = 12; 
let  b = 25; 

result = a & b; 
console.log(result); // 8


/*..........if else example....*/

let a=5;
let b=10;
if(a>b){
    console.log(a);
}
else{
    console.log(b);
}

/*...........switch case..........*/

// program using switch statement
let a = 2;

switch (a) {

    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`);//The value is two