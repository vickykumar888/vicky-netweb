async function FetchUsingAsync(){
    let url = 'https://jsonplaceholder.org/users';
    let response = await fetch(url);
    let data = await response.json(); 
        console.log(data);
}

FetchUsingAsync();

// We use async/await to handle asynchronous operations
function logOutput(){
    setTimeout(() => {
     console.log("We r doing our tasks");   
    }, 2000);
}

function logOutputNo2(){
    setTimeout(() => {
     console.log("We r doing our tasks no 2");   
    }, 4000);
}


function logOutputNo3(){
    console.log("we r doing tasks no 3");
}

logOutput();
logOutputNo2();
logOutputNo3();
// output
// we r doing tasks no 3 
// We r doing our tasks 
// We r doing our tasks no 2
