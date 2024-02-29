const myPromise = new Promise((resolve,reject)=>{
    if(2+2===5){
        return resolve("true")
    } else{
        return reject("false");
    }
})

myPromise.then((res)=>{
    console.log(res, 'res')
}).catch((error)=>{
    console.log(error, "errpor")
})