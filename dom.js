let headingOne = document.getElementById('head1');
// headingOne.innerHTML = "Heading is always High"

let changeColor = document.getElementById("color");
let size = document.getElementById("size");
let text = document.getElementById("text");

changeColor.addEventListener("click" , ()=>{
    console.log("color")
    headingOne.style.color = "red"
})
size.addEventListener("click" , ()=>{
    console.log("size");
    headingOne.style.fontSize = "100px"
})
text.addEventListener("click" , ()=>{
    console.log("text")
    headingOne.innerHTML = "The Heading has been changed"
})

// when we are using a classname always remembers class represnt array and result is obtained using index 

let divHead = document.getElementsByClassName("heading-div")[0];
divHead.addEventListener("click", ()=>{
    console.log("I am inside a div")
    
    let subHead = document.createElement('h6')
    subHead.innerHTML = prompt("Enter the text");

    divHead.appendChild(subHead);
})

let divison = document.querySelector("#division")
let button = document.querySelector("#btn")
let paragraph = document.getElementById("para1")
console.log(button);
button.addEventListener("click", ()=>{
    let heading1 = document.createElement('h2');
    heading1.innerHTML = prompt("ENter the sub-Heading ")
    divison.appendChild(heading1);
   
})

let selectHeading = document.querySelectorAll(".c-head")
console.log(selectHeading);
console.log(selectHeading[0]);
console.log(selectHeading[2]);
console.log(selectHeading[1]);
console.log(selectHeading[3]);