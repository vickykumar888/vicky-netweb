let x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
//no value found here  because x is 0 and it not used anywhere//

  //for of loop//
  let fruits = ['Apple', 'Banana', 'Orange', 'Mango']
  for (let item of fruits) {
    console.log(item)
  }
  //for in loop//
let cars=['bmw', 'nexa', 'alto', 'volvo']
  for(let item in fruits){
    console.log(fruits[item])
  }
  //for loop//
  for (let i=0;i<length;i++){
     console.log(i)
  }

  let a =10;
  let b= 10;
  let c= a+b 
  console.log(c)  //20// 

let ab = 3;
let xy = (100 + 50) * a; //A typical arithmetic operation takes two numbers (or expressions) and produces a new number.
450

let text1 = "5";
let text2 = "20";
let result = text1 < text2;
console.log('is text1 less than text2',result)//true//

let q = 5 + 5; //10//
let y = "5" + 5; //55//
let z = "Hello" + 5;//Hello5 Adding a number and a string, returns a string.//