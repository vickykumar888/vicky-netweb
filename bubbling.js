const parentEl = document.getElementById('container');
const btnEl = document.getElementById('btn');
const formEl = document.getElementById('form1')

parentEl.addEventListener('click' , containerListner);
btnEl.addEventListener('click' , btnListner);
formEl.addEventListener('click' , formListner);

function formListner(){
    console.log("Click form")
}
function containerListner(e){
    e.stopPropagation();
    console.log("Click container")
}

function btnListner(e){
    e.stopPropagation();
    console.log("paragraph clicked");
};