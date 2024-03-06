//it cannot be redeclare and it cannot be reupdated.
const accountId = 144553
console.log(accountId);

// let is block scope it cannot be redeclare but it can be reupdated.

let accountEmail = "manish@gmail.com";
accountEmail = "hc@hc.com";
console.log(accountEmail);


// var is global scoped it can be redeclare and it can be reupdated.

var accountPassword = "12345";
var accountPassword = "4567";
console.log(accountPassword)



//  OPERATORS/////////////////////////



//----------------------------------------ALU  
// Addition
var a = 4;
var b = 3; 
var x = a + b; 


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


//-----------------------------------------COMPARISON OPERATOR


let a="12";
let b="13";
console.log(a>b);



// -----------------------------------------LOGICAL OPRATION

const a = 3;
const b = -2;

console.log(a > 0 && b > 0);


//------------------------------------------BITWISE OPERATOR

const a = 5; // 101
const b = 1; // 001

console.log(a & b);//1

//-----------------------------------------IF ELSE

let age=12;
if (age < 18) {
   
    console.log("Child");
  } else {
    console.log("Adult");
  }


//-----------------------------------------SWITCH CASE


let a = 1;

switch (a) {
    case "1":
        a = 1;
        break;
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
console.log(`The value is ${a}`);