async function putData(){
    try{
      const response= await fetch('https://dummyjson.com/products/3',{
        method:'PUT'
      })
       const data=await response.json()
       console.log(data)
    }catch(error){
      console.log(error)
    }
  }
  putData()