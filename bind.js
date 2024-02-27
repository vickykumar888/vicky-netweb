// bind method;

// GetInformation(); instead of calling it directly we can call it by binding with a variable
// 1example
function greetPerson() {
    return this.name;
  }
  
  let obj = {
    name: "rani"
  };
  
  let resultFunction = greetPerson.bind(obj); 
  let result = resultFunction();
  console.log(result); 




// 2nd example
let output = {
    title: "BIND METHOD",
    printFunc: function () {
        console.log(this.title);
    }
}
let printFunc2 = output.printFunc.bind(output);
printFunc2()


