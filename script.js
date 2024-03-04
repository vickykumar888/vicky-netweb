let btn = document.querySelector(".btn")
btn.addEventListener("click",function(){
    document.body.style.color = "red";
    document.body.style.fontSize = "25px";
});
// to access inner html
let heading = document.querySelector(".heading");
console.log(heading.innerHTML);


let manipulateAll = document.querySelectorAll(".list-item")
console.log(manipulateAll);
for(let item of manipulateAll){
    item.style.color="red";
    item.fontSize="30px"
}

const addfriend = document.querySelector(".add-friend");
addfriend.addEventListener("click",function(){
    addfriend.style.fontSize="40px"
    addfriend.innerHTML="ADDED &#10003;"
    
})

let images = document.querySelectorAll(".images");
console.log(images);
for(let newItem of images){
    newItem.style.border = "2px solid red"; 
    newItem.style.display = "flex";
    newItem.style.gap = "40px";
    newItem.style.padding = "20px";
    
}
let btnactive = document.querySelector(".btn-active");
btnactive.addEventListener("click",function(){
    btnactive.style.fontSize="40px"
    btnactive.remove();
})

let heartimage = document.querySelector(".heart-img");
heartimage.addEventListener("dblclick", function() {
    heartimage.style.width="450px"
    heartimage.style.opacity = "0.5";
});


let toggleImg = document.querySelector(".toggle-img");
toggleImg.addEventListener("click", function() {
    toggleImg.classList.toggle("new_class");
});

let alertbtn = document.querySelector(".clickAlert");
alertbtn.addEventListener("click",function(){
    alert("hello button clicked");
    alertbtn.innerHTML = alertbtn.innerHTML.toUpperCase();
    alertbtn.style.fontSize="40px"
})


// to create new element using DOM;
let container = document.querySelector(".container")
let newElem = document.createElement("h2");
newElem.innerHTML = "<h1>We created it using Dom</h1>"
container.appendChild(newElem)

let color = prompt("Enter a background color");
document.body.style.backgroundColor =color;



let nameInput = document.querySelector("#name");
let ageInput = document.querySelector("#age");
let newName = document.createElement('p');
newName.textContent = `${nameInput.value} - ${ageInput.value}`;
document.getElementById("input-info").appendChild(newName);

// changing src on click
let AddedImg = document.querySelector(".Image-add");
AddedImg.addEventListener("click",function(){
    AddedImg.src = "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg" 
})

// by classname
let boxes = document.getElementsByClassName("box");
for (let box of boxes) {
    box.style.backgroundColor = "pink";
    box.style.padding = "40px";
    box.style.margin = "20px";
}



