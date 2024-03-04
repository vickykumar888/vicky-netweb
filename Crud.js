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



    const image = document.createElement('img')
    image.id ="image"
    image.src = item.images[0]
    

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
    button.id= "btn"
    button.innerHTML = "Delete"

    table.appendChild(row)
    row.appendChild(image)
    row.appendChild(brand)
    row.appendChild(title)
    row.appendChild(desc)
    row.appendChild(price)
    row.appendChild(button)
}

function display(items) {
    items.products.map(item => {
        createTable(item);
    });
}

