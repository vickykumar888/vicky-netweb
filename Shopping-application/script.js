document.addEventListener('DOMContentLoaded', () => {
const apiURL = "https://dummyjson.com/products";
let limit = 8;
let currentPage = 1;
const productContainer = document.getElementById('productContainer');
const searchInput = document.getElementById('searchInput');
const pagination = document.getElementById('pagination');
// const popup = document.getElementById('popup');
// const popupContent = document.getElementById('popupContent');
// const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const productsPerPageDropdown = document.getElementById('productsPerPage');


let productsData = [];
let filteredProducts = [];
async function fetchProducts() {
  try {
    let data = await fetch(apiURL);
    productsData = await data.json();
    productsData = productsData.products.slice(0, 200);
    filteredProducts = productsData;
    toProducts(currentPage);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
function toProducts(page) {
  productContainer.innerHTML = '';
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const productsToRender = filteredProducts.slice(startIndex, endIndex);
  productsToRender.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <img src="${product.images[0]}" alt="${product.name}">
      <h2>${product.id}</h2>
      <p>Title: ${product.title.slice(0, 40)}</p>
        <p>Price: $${product.price}</p>
        <p>Rating: ${product.rating}</p>
        <p>Brand: ${product.brand}</p>
        <p>Category: ${product.category}</p>
        
      
    `;
    productCard.addEventListener('click', () => showProductDetails(product));
    productContainer.appendChild(productCard);
    
  });
  toPagination(filteredProducts.length);
}
function toPagination(totalProducts) {
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  pagination.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement('a');
    pageLink.textContent = i;
    pageLink.href = '#';
    pageLink.addEventListener('click', () => {
      currentPage = i;
      toProducts(currentPage);
    });
    pagination.appendChild(pageLink);
  }
}

// function showProductDetails(product) {
  // popupContent.innerHTML = `
  //   <h2>${product.title}</h2>
  //   <img src="${product.images[0]}" alt="${product.name}">
  //     <p>Title: ${product.title.slice(0, 6)}</p>
  //       <p>Price: $${product.price}</p>
  //       <p>Rating: ${product.rating}</p>
  //       <p>Brand: ${product.brand}</p>
  //       <p>Category: ${product.category}</p>
  //       <p>Description: ${product.description}</p>
  //     `;
  // popup.style.display = 'block';
  
// }

function showProductDetails(product) {
  const productURL = `product_details.html?id=${product.id}&title=${encodeURIComponent(
    product.title
  )}&url=${encodeURIComponent(product.images[0])}&price=${encodeURIComponent(product.price)}&brand=${encodeURIComponent(product.brand)}`;
  
  console.log(productURL); 
  
  window.open(productURL, "_blank");
}

// closeBtn.addEventListener('click', closePopup);
// function closePopup() {
//   popup.style.display = 'none';
// }

let Timer;
searchInput.addEventListener('input', () => {
  clearTimeout(Timer);
  Timer = setTimeout(() => {
    currentPage = 1;
    const searchText = searchInput.value.toLowerCase();
    filteredProducts = productsData.filter(product =>
      product.title.toLowerCase().includes(searchText)
    );
    toProducts(currentPage);
  }, 1000);
});

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    toProducts(currentPage);
  }
});
nextBtn.addEventListener('click', () => {
  const totalPages = Math.ceil(filteredProducts.length / limit);
  if (currentPage < totalPages) {
    currentPage++;
    toProducts(currentPage);
  }
});
productsPerPageDropdown.addEventListener('change', () => {
  limit = parseInt(productsPerPageDropdown.value);
  currentPage = 1;
  toProducts(currentPage);
});
fetchProducts();
});































































































































































































































































































































































































































































// const cardContainer = document.getElementById('cardContainer');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');
// const searchInput = document.getElementById('searchItem')
// // const searchResult = document.getElementById('search-results')
// const pagination = document.getElementById('paginationNumber')
// const productsPerPages = document.getElementById('products')
// const popup = document.getElementById('popup');
// const popupContent = document.getElementById('popupContent');
// const closeBtn = document.getElementById('closeBtn');

// let currentPage = 1;
// const limit = 8;
// const apiUrl = 'https://dummyjson.com/products';

// let productsData = [];
// let filteredProducts = [];
// async function Products() {
//   try {
//     let data = await renderProducts(apiUrl);
//     productsData = await data.json();
//     productsData = productsData.slice(0, 200);
//     filteredProducts = productsData;
//     fetchProducts(currentPage);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//   }
// }
// function fetchProducts(page) {
//  cardContainer.innerHTML='';
//   const skip = (page - 1) * limit;
//   const url = `${apiUrl}?limit=${limit}&skip=${skip}`;

//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       displayProducts(data.products);
//       updatePagination();
//     })
//     .catch((error) => console.error(error));
// }

// function displayProducts(products) {
//   cardContainer.innerHTML = '';

//   products.forEach((product) => {
//     const card = document.createElement('div');
//     card.classList.add('card');
//     card.innerHTML = `
//       <img src="${product.thumbnail}" alt="${product.title}">
//       <div class="card-content">
//         <h2>${product.title}</h2>
//         <p>Price: $${product.price}</p>
//         <p>Rating: ${product.rating}</p>
//         <p>Brand: ${product.brand}</p>
//         <p>Category: ${product.category}</p>
//         <p>Description: ${product.description}</p>
//       </div>
//     `;
//     card.addEventListener('click', () => showProductDetails(product));

//     cardContainer.appendChild(card);
//     // renderPagination(filteredProducts.length)
//   });
  
// }


// function updatePagination() {
//   prevBtn.disabled = currentPage === 1;
//   nextBtn.disabled = cardContainer.children.length < limit;
// }

// prevBtn.addEventListener('click', () => {
//   if (currentPage > 1) {
//     currentPage -= 1;
//     fetchProducts(currentPage);
//   }
// });

// nextBtn.addEventListener('click', () => {
//   currentPage += 1;
//   fetchProducts(currentPage);
// });



// fetchProducts(currentPage);



