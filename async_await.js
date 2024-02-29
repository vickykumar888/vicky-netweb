

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        reject(new Error("The error"))
//       // resolve("yess")
//     },3000);
// })

// let a = async() =>{
//     try {
//         let q = await p1;
//         console.log(q);
//     } catch (error) {
//         console.log("this error has been handled");
//     }
// }

// a();




// let p2 = new Promise((resolve, reject) => {

//     setTimeout(() => {
//     const succes = Math.random() > 0.8;
//     if(succes){
//         resolve ("data sucessfully done")
//     }  else{
//         reject("there is some error")
//     }  
//     }, 1000);
// })

// let b = async() =>{
//     try {
//         let a = await p2;
//         console.log(a);
//     } catch (error) {
//         console.log("the error is not geeting" + error)
        
//     }
// }

// b();