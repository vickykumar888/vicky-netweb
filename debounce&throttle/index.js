let counter = 0;
function getData(){
    console.log("fetching data", counter++)
}
function debounce(call,delay){
    let timer;
    return function(...arg){
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            call();
        },delay)
    }
}
const betterFunction = debounce(getData,1000);



//throttle

const mythrottle=(fn,delay)=>{
    return function(...args){
        document.getElementById("myid").disabled=true;
        setTimeout(()=>{
            fn();
        },delay);
    }
}
const newFun=mythrottle(()=>{
    document.getElementById("myid").disabled=false;
    console.log("User Clicked")

},4000)