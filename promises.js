let prom = new Promise((resolve,reject)=>{
    let output = true;
    if(output){
      resolve("SUCCESSFUL")
    }
    else{
    reject("FAILED")
    }
  })
  prom
  .then((data)=>{
    console.log(data);
  })
  .catch((err)=>{
    console.log("error" +err)
  });


  // fetch using promises;
  fetch('https://jsonplaceholder.org/users')
  .then(response => response.json())
  .then(data => console.log(data))
  
  .catch((err)=>{
    console.log("error in completing tasks" +err);
  })