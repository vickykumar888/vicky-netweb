const url = "https://api.github.com/users";

// const userData = () =>{
//     fetch(url).then(res => res.json())
//     .then(items =>{
//         console.log(items)
//     })
//     .catch(error =>{
//         console.log("there is some error: "+ error );
//     })
// }

// console.log(userData);



const userData1 = async() =>{
    try {
    let res =  await fetch(url);
        if (res.ok){
            let data = await res.json();
            console.log(data)
        }
        else {
            throw new Error ("Network error")
        }
        
    } catch (error) {
        console.log("the Errorr is of type: " + error );
    }
}

userData1();