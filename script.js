// let headings = document.getElementById("h1Tag") // by id
// let headings2 = document.querySelector(".heading-tag") // by query selector class name
// let headings3 = document.querySelector("#h1Tag") // by query selector id 
// let headings4 = document.getElementsByClassName("heading-tag") // by id
// // class , by id , querSelector

// // query selectore All
// const AllH1Tags = document.querySelectorAll(".heading-tag")[1];
// console.log(AllH1Tags, "query secltor All tags")

// console.log(headings, "headings")
// console.log(headings2, "headings2")

// // on click of button trigger the alert function 
// // hello HELLO

// let btn = document.getElementsByClassName("btn")[0];
// console.log(btn , "btn")
// btn.addEventListener("click",convertLowerToUpper);
// function convertLowerToUpper(){
//     headings.innerHTML = headings.innerHTML.toUpperCase();
//     headings.style.color="red"
//     headings.style.fontSize="25px"
// }


{/** clicking on a Add a tag button a new html tag , before that change the button Name to create a html element */}
let body = document.getElementsByTagName("body")[0]
let addBtnTag = document.getElementById('addAtag');
console.log(body, "body")
addBtnTag.innerText ="Create a html element"

addBtnTag.addEventListener("click", createAElement);

function createAElement(){
    let p = document.createElement("p");
    p.innerText ="I am a para graph tag";
    p.style.color="red";
    p.style.textTransform="capitalize";
    body.appendChild(p)
}

{/** from an given array of object create a list of btn */}

const btnArr=[{name:"Green"}, {name:"Yellow"}, {name:"Red"}];

for(let i=0; i < btnArr.length; i++){
    let btn = document.createElement("button");
    btn.innerText= btnArr[i].name.toUpperCase();
    btn.addEventListener("click", ()=>chanegBackGroundColor(btnArr[i].name.toLowerCase()));
    body.appendChild(btn)
}
function chanegBackGroundColor(bgColor){
    body.style.backgroundColor=bgColor;
}

{/** create a select tag */}
const selectTag = document.createElement("select")

btnArr.map((item)=>{
   const options = document.createElement("option");
   options.value= item.name;
   options.id=item.name;
   options.innerText = item.name;
   selectTag.appendChild(options)
});
selectTag.addEventListener("change", (e)=>{
    let value = e.target.value;
    console.log(value, "value")
    body.style.backgroundColor=value.toLowerCase()
})
body.appendChild(selectTag);
