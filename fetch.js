
let url = "https://jsonplaceholder.typicode.com/posts";

// to get the data from the Api 

let getData = async () => {
    try {
        let res = await fetch(url);
        if (res.ok) {
            let data = await res.json();
            console.log(data);
        }
        else {
            throw new Error("network error")
        }
    } catch (error) {
        console.log(error);
    }
}

getData();

// const getData = () => {
//   let res = fetch(url).then((res) => res.json())
//   .then((data) =>{
//     console.log(data);
//   })
//   .catch((error)=>{
//     console.log(error)
//   });
// }

// getData();




// to post or add data in the server


const putData = () =>{
    let res = fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            title: "web development",
            body: "have to complted these task",
            userId: 0
        }),
        headers: {
            "Content-type": "application/json;charset = UTF-8"
        }
    }).then(res =>res.json())
    .then(data => {
        console.log(data)
    })
}

putData();

// const putData = async() =>{
//     try {
//            let res = await fetch(url, {
//             method: 'POST',
//             body: JSON.stringify({
//                 title: "web development",
//                 body: "have to complted these task",
//                 userId: 0
//             }),
//             headers: {
//                 "Content-type": "application/json;charset = UTF-8"
//             }
//         })
//      if(res.ok){
//        let data = await res.json();
//        console.log(data);
//         }
//         else{
//             throw new Error("nettwork error")
//         }
//     } catch (error) {
//         console.log("this error should be handle" + error)
// }
// }

// putData();


// // update the data: 

// const updateData = () =>{
//     let res = fetch(url, {
//         method: 'PUT',
//         body: JSON.stringify({
//             title: "web development1",
//             body: "have to complted these task2 and task3",
//             userId: 0
//         }),
//         headers: {
//             "Content-type": "application/json;charset = UTF-8" 
//         }
//     }).then(res =>res.json())
//     .then(data => {
//         console.log(data)
//     })
// }

// updateData();


// const updateData = async()=>{
//     try {
//         let res = await fetch(url, {
//             method:'PUT',
//             body:JSON.stringify({
//                title: "app development2" ,
//                body: "these tasks were assigned",
//                userId: 0
//             }),
//             headers: {
//                 "Content-type": "application/json;charset = UTF-8"
//             }
           
//         })
//         if(res.ok){
//             let data = await res.json();
//             console.log(data);
//         }
//         else{
//             throw new Error("Error")
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }
// updateData();


// Delete data 


const deleteData =() =>{
  let res = fetch("https://jsonplaceholder.typicode.com/posts/0",{
    method:'DELETE'
  }).then(res => res.json())
  .then(data=> {
  
    console.log(data)
  })
  console.log(res);
}

deleteData();