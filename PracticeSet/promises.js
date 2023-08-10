// let promise = new Promise(function(resolve,reject){
//     alert("Hello");
//     resolve(56)
// })
// console.log(promise)
// console.log("Hello Annu here!")
// setTimeout(function(){
//     console.log("Hii!")
// },1000)

let p = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        console.log("I am promise")
        resolve(true)
        // reject(new Error("I am an error"))
    },3000)
})
p.then((value)=>{
    console.log(value)
})

let p1 = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        console.log("I am promise")
        // resolve(true)
        reject(new Error("I am an error"))
    },3000)
})
p1.catch((value)=>{
    console.log("Some error occured ")
})