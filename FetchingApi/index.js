// let img = "https://picsum.photos/200/300";
// const electronicSalesData = [
//   {
//     "id": 1,
//     "name": "Laptop",
//     "image": img,
//     "price": 800
//   },
//   {
//     "id": 2,
//     "name": "Smartphone",
//     "image": img,
//     "price": 500
//   },
//   {
//     "id": 3,
//     "name": "Headphones",
//     "image": img,
//     "price": 100
//   },
  
   
//       {
//         "id": 1,
//         "name": "Bottle",
//         "image": img,
//         "price": 800
//       },
//       {
//         "id": 2,
//         "name": "Cup",
//         "image": img,
//         "price": 500
//       },
//       {
//         "id": 3,
//         "name": "Mobile",
//         "image": img,
//         "price": 100
//       },
//       {
//         "id": 4,
//         "name": "Tablet",
//         "image": img,
//         "price": 300
//       },
//       {
//         "id": 5,
//         "name": "Smartwatch",
//         "image": img,
//         "price": 200
//       },
//       {
//         "id": 6,
//         "name": "Camera",
//         "image": img,
//         "price": 600
//       },
//       {
//         "id": 7,
//         "name": "TV",
//         "image": img,
//         "price": 1000
//       },
//       {
//         "id": 8,
//         "name": "Gaming Console",
//         "image": img,
//         "price": 400
//       },
//       {
//         "id": 9,
//         "name": "Wireless Earbuds",
//         "image": img,
//         "price": 150
//       },
//       {
//         "id": 10,
//         "name": "Power Bank",
//         "image": img,
//         "price": 50
//       },
    
//           {
//             "id": 1,
//             "name": "Laptop",
//             "image": img,
//             "price": 800
//           },
//           {
//             "id": 2,
//             "name": "Smartphone",
//             "image": img,
//             "price": 500
//           },
//           {
//             "id": 3,
//             "name": "Headphones",
//             "image": img,
//             "price": 100
//           },
//           {
//             "id": 4,
//             "name": "Tablet",
//             "image": img,
//             "price": 300
//           },
//           {
//             "id": 5,
//             "name": "Smartwatch",
//             "image": img,
//             "price": 200
//           },
//           {
//             "id": 6,
//             "name": "Camera",
//             "image": img,
//             "price": 600
//           },
//           {
//             "id": 7,
//             "name": "TV",
//             "image": img,
//             "price": 1000
//           },
//           {
//             "id": 8,
//             "name": "Gaming Console",
//             "image": img,
//             "price": 400
//           },
//           {
//             "id": 9,
//             "name": "Wireless Earbuds",
//             "image": img,
//             "price": 150
//           },
//           {
//             "id": 10,
//             "name": "Power Bank",
//             "image": img,
//             "price": 50
//           }
//             ];
        
const apiURL = "https://jsonplaceholder.typicode.com/photos";
const productsPerPage = 8;
let currentPage = 1;

const productContainer = document.getElementById('productContainer');
const searchInput = document.getElementById('searchInput');
const pagination = document.getElementById('pagination');
const popup = document.getElementById('popup');
const popupContent = document.getElementById('popupContent');
const closeBtn = document.getElementById('closeBtn');

let productsData = [];

async function fetchProducts() {
  try {
    let data = await fetch(apiURL);
      productsData = await data.json();
      productsData = productsData.slice(0, 32);

   
    renderProducts(currentPage);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

function renderProducts(page) {
  productContainer.innerHTML = '';

  const filteredProducts = productsData.filter(product =>
    product.title.toLowerCase().includes(searchInput.value.toLowerCase())
  );
 


  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToRender = filteredProducts.slice(startIndex, endIndex);

  productsToRender.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <img src="${product.url}" alt="${product.name}">
      <p>Price: $${product.id}</p>
      <p>Title: ${product.title.slice(0,6)}</p>
    `;
    productCard.addEventListener('click', () => showProductDetails(product));
    productContainer.appendChild(productCard);
  });

  renderPagination(filteredProducts.length);
}

function renderPagination(totalProducts) {
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  pagination.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement('a');
    pageLink.textContent = i;
    pageLink.href = '#';
    pageLink.addEventListener('click', () => {
      currentPage = i;
      renderProducts(currentPage);
    });
    pagination.appendChild(pageLink);
  }
}

function showProductDetails(product) {
  popupContent.innerHTML = `
    <h2>${product.title}</h2>
    <img src="${product.url}" alt="${product.name}">
    <p>Price: $${product.id}</p>
  `;
  popup.style.display = 'block';
}
closeBtn.addEventListener('click', closePopup);

function closePopup() {
  popup.style.display = 'none';
}

searchInput.addEventListener('input', () => {
  currentPage = 1;
  renderProducts(currentPage);


  let debounceTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      currentPage = 1;
      renderProducts(currentPage);
    }, 500);
  });
});


fetchProducts();
