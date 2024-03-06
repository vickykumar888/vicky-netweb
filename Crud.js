// fetch function 

const getData = async () => {
    try {
        let response = await fetch('https://dummyjson.com/products')
        if (response.ok) {
            let items = await response.json();
            console.log(items, "data")

            display(items);
        } else {
            throw new Error("Not getting");
        }
    } catch (error) {
        console.log(error, "error")
    }
}
getData();

const root = document.getElementById("root")

function createTable(item) {
    const table = document.getElementById("table")

    const row = document.createElement('tr')
    row.setAttribute("data-id", item.id);



    const image = document.createElement('img')
    image.id ="image"
    image.src = item.images[0];
    
    const title = document.createElement('td')
    title.className = "table-data"
    title.innerHTML = item.title

    const brand = document.createElement('td')
    brand.className = "table-data"
    brand.innerHTML = item.brand

    const desc = document.createElement('td')
    desc.className = "table-data"
    desc.innerHTML = item.description

    const price = document.createElement('td')
    price.className = "table-data"
    price.innerHTML = item.price
 
    let button = document.createElement('button')
    button.id= "btn"
    button.innerHTML = "Delete"
    button.addEventListener('click', function(){
        //console.log(item.id)
        fetch(`https://dummyjson.com/products/${item.id}`, {
              method: 'DELETE',
            })
            .then(res => row.remove())
            .catch(error =>{
                console.log(error)
            });
          })

    let update = document.createElement('button')
    update.id ="btnUpdate"
    update.innerHTML = "Update";
    update.setAttribute("data-bs-toggle", "modal");
    update.setAttribute("data-bs-target", "#exampleModal");
    update.addEventListener('click', function(){
        console.log("modal click")
       populateModal(item.id , item.title, item.price  );
    
     });
      
     function populateModal(id){
        const row = document.querySelector(`tr[data-id="${id}"]`);
        const title = row.querySelector('td:nth-child(3)').textContent;
        const price = row.querySelector('td:nth-child(5)').textContent;
    
        document.getElementById("postId").value = id;
        document.getElementById("title").value = title;
        document.getElementById("price").value = price;
        console.log(id , title, price);
     }
  
    
    table.appendChild(row)

    row.appendChild(image)
    row.appendChild(brand)
    row.appendChild(title)
    row.appendChild(desc)
    row.appendChild(price)
    row.appendChild(button)
    row.appendChild(update)
}

function display(items) {
    items.products.map(item => {
        createTable(item);
    });
}

async function saveChanges() {

    const postId = document.getElementById("postId").value;
    const newTitle = document.getElementById("title").value;
    const newPrice = document.getElementById("price").value;
      console.log(postId,newTitle,newPrice);
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: newTitle,
            price: newPrice
        })
    };
    try {
        const response = await fetch(url, requestOptions)
        if(response.ok){
            console.log(response)
            const updatedData = await response.json(); 
            console.log(updatedData);
            const eleTitle = document.querySelector(`tr[data-id="${postId}"] td:nth-child(3)`);
            const elePrice = document.querySelector(`tr[data-id="${postId}"] td:nth-child(5)`);
            console.log(eleTitle);
            console.log(elePrice);
        
        
            eleTitle.textContent = updatedData.title;
            elePrice.textContent = updatedData.price;
            `$('#exampleModal').modal('hide')`;
        }
        else {
            throw new Error ('Failed to update post')
        } 
        
    } catch (error) {
        console.log(error);
    }}

       // let newTitle = prompt("enter Title")
       // let newPrice = prompt("enter Price")
// fetch(`https://dummyjson.com/products/${item.id}`,{
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body:JSON.stringify({
//         title: newTitle,
//         price: newPrice,
//     })

//  }).then(response =>{
//     if(response.ok){
       
//         title.innerHTML = newTitle
//         price.innerHTML = newPrice
//     }
//     else{
//         throw new Error ("unable to do so ")
//     }
// }).catch(error => {
//     console.log(error)
// })
// })