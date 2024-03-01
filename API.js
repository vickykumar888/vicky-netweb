// const getAllProducts = async()=>{
//     try {
//       const response = await fetch("https://dummyjson.com/products", {method :"get"});
//       const data = await response.json()
//       console.log(data)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// getAllProducts()


// const getAllProducts = async(id)=>{
//         try {
//           const response = await fetch(`https://dummyjson.com/products/${id}`, {method :"get"});
//           const data = await response.json()
//           console.log(data)
//         }
//         catch(error){
//             console.log(error)
//         }
//     }
    
//     getAllProducts(10)


// add api 

// const addApi = async () => {
//   try {
//     const response = await fetch('https://dummyjson.com/products/add', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           title: 'BMW Pencil',
//           /* other product data */
//         })
//       }).then((res)=>{
//         let data = res.json();
//         return data
//       })
//       console.log(response, "resss");
//   } catch (error) {
//     console.log(error);
//   }
 
// };
// addApi()
    

// update api 

const updateApi =async(id) =>{
 try {
   const response = await fetch(`https://dummyjson.com/products/${id}`, {
     method: "PUT",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({
       title: "IPHONE 15 pro",
       price:1, 
       images:"ssssss"
     }),
   })
     .then((res) => {
       return res.json();
     })
     .catch((err) => {
       console.log(err);
     });
   console.log(response, "response");
 } catch (error) {
   console.log(error);
 }  
}
updateApi(10)
