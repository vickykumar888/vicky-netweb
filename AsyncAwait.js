// const hello=()=>{
//     console.log("hello")
// }

// const stetime =()=>{
//     setTimeout(()=>{console.log("second")},3000)
// }

const bye =()=>{
    console.log("bye")
}

// hello();
// stetime();


const getDataFromApi = async ()=>{
    /// api call 
   let url ="https://icanhazdadjoke.com/slack"
    const response = await fetch(url, {method:"delete"});
    const data =  await response.json();
    console.log(data, "data");
}

// getDataFromApi();
// bye();

// get , put , delete , post 




