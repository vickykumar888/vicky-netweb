let headings = document.getElementById("h1Tag") // by id
let headings2 = document.querySelector(".heading-tag") // by query selector class name
let headings3 = document.querySelector("#h1Tag") // by query selector id 
let headings4 = document.getElementsByClassName("heading-tag") // by id
// class , by id , querSelector

// query selectore All
const AllH1Tags = document.querySelectorAll(".heading-tag")[1];
console.log(AllH1Tags, "query secltor All tags")

console.log(headings, "headings")
console.log(headings2, "headings2")

// on click of button trigger the alert function 
// hello HELLO

let btn = document.getElementsByClassName("btn")[0];
console.log(btn , "btn")
btn.addEventListener("click",convertLowerToUpper);
function convertLowerToUpper(){
    headings.innerHTML = headings.innerHTML.toUpperCase();
    headings.style.color="red"
    headings.style.fontSize="25px"
}
