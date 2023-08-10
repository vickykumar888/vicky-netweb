
document.addEventListener("DOMContentLoaded", fetchProducts);

function fetchProducts() {
  const productList = document.getElementById("productList");

 
  const apiUrl = "https://dummyjson.com/products";

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      data?.products?.map(product => {
        console.log(product);
        const productItem = createProductItem(product);
        productList.appendChild(productItem);
      });
    })
    .catch(error => {
      console.error("Error fetching products:", error);
    });
}

function createProductItem(product) {
  const productItem = document.createElement("div");
  productItem.classList.add("title");

  const productImage = document.createElement("img");
  productImage.src = product.images[0]; 
  productImage.alt = product.title; 

  const productTitle = document.createElement("h3");
  productTitle.textContent = product.title;

  const productPrice = document.createElement("p");
  productPrice.textContent = "Price: $" + product.price;

  productItem.appendChild(productImage);
  productItem.appendChild(productTitle);
  productItem.appendChild(productPrice);

  return productItem;
}

