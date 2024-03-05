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

    const row = document.createElement('tr');

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
    update.innerHTML = "Update"
    update.setAttribute("data-bs-toggle", "modal");
    update.setAttribute("data-bs-target", "#exampleModal");
    update.addEventListener('click', ()=>{
        console.log("modal click")
       populateModal(item.id , item.title, item.price);
       saveChanges()
     });
      
     function populateModal(id, title, price){
        document.getElementById("postId").value = id;
        document.getElementById("title").value = title;
        document.getElementById("price").value = price;
     }
     //  let save = document.getElementById('btn1')
     //  save.addEventListener('click',saveChanges);
       async function saveChanges() {
        const postId = document.getElementById("postId").value;
        const newTitle = document.getElementById("title").value;
        const newPrice = document.getElementById("price").value;

        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: newTitle,
                body: newPrice
            })
        };
        try {
            const response = await fetch(url, requestOptions)
            if(response.ok){
                const updatedData = await response.json()
                const title = document.querySelector(`tr[data-id="${postId}"] td:nth-child(1)`);
                const price = document.querySelector(`tr[data-id="${postId}"] td:nth-child(4)`);
            
            
            title.textContent = updatedData.title;
            price.textContent = updatedData.price;
            $('#exampleModal').modal('hide');
            }
            else {
                throw new Error ('Failed to update post')
            } 
            
        } catch (error) {
            console.log(error);
        }
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