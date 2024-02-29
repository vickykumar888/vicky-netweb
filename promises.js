// let p = new Promise((resolve, reject) =>{
//     let x = 10;
//     if(x==10){resolve("value")}

//     else{
//         reject("errro")
//     }
// })

// p.then(function(result){
//     console.log(`yes resolve with ${result}`);
// });
// p.catch(function(error){
//     console.log("error hand with " + error + " you sholud fix this ")
// })


//
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(" yes I am a  error")
//     }, 3000);
// })

// p1.then(value => {
//   console.log( value);
// })
// p1.catch(error =>{
//     console.log("the error is " + error);
// })


// let p2 = new Promise((resolve, reject) => {

//     setTimeout(() => {
//     const succes = Math.random() > 0.8;
//     if(succes){
//         resolve ("data sucessfully done")
//     }  else{
//         reject("there is some error")
//     }  
//     }, 3000);
// })

// p2.then(value =>{
//     console.log("sucess" + value)
// })

// p2.catch(error =>{
//     console.log("rejected with " + error)
// })