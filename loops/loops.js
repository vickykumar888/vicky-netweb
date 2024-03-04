//for loop:- print even number between 1 to 100

for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}

//While loop
let i = 1;
while (i <= 10) {
  console.log(`2*${i}=${2 * i}`);
  i++;
}

//forEach loop

let arr = ["samsung", "apple", "vivo", "hp"];

arr.forEach((value) => {
  console.log(value);
});

//if-else statement in javascript

let age = 18;
if (age >= 18) {
  console.log("You are ready to learn driving");
} else {
  console.log("You are small to learn driving");
}

//switch statement

let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednessday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Staurday";
    break;
  default:
    day = "Not found";
}
console.log(`Today is ${day}`)