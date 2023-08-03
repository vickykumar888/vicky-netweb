const productListElement = document.getElementById('productList');
const paginationElement = document.getElementById('pagination');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const popup = document.getElementById('productPopup');
const popupContent = document.getElementById('popupContent');
const closeBtn = document.getElementById('closeBtn');

const apiEndpoint = 'https://dummyjson.com/products';
const productsPerPage = 10;
let currentPage = 1;

async function fetchProductData(query = '') {
    try {
        const response = await fetch(`${apiEndpoint}?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error', error);
        return null;
    }
}

function createProductCard(product) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const productTitle = document.createElement('h3');
  productTitle.textContent = product.title;
  productCard.appendChild(productTitle);

  const productImage = document.createElement('img');
  productImage.src = product.images[0];
  productImage.alt = product.title;
  productCard.appendChild(productImage);

  const productPrice = document.createElement('p');
  productPrice.textContent = `Price: $${product.price}`;
  productCard.appendChild(productPrice);

  const productBrand = document.createElement('p');
  productBrand.textContent = `Brand: ${product.brand}`;
  productCard.appendChild(productBrand);

  const productRating = document.createElement('p');
  productRating.textContent = `Rating: ${product.rating}`;
  productCard.appendChild(productRating);

  const buyButton = document.createElement('button');
  buyButton.textContent = 'Buy Now';
  buyButton.classList.add('buy-btn');
  productCard.appendChild(buyButton);

  productCard.addEventListener('click', () => showPopup(product));
  return productCard;
}


// function showPopup(product) {
//   popupContent.innerHTML = `
//       <h3>${product.title}</h3>
//       <div class="product-images">
//           ${product.images.map(imageUrl => `<img src="${imageUrl}" alt="${product.title}">`).join('')}
//       </div>
//       <p>Price: $${product.price}</p>
//       <p>Brand: ${product.brand}</p>
//       <p>Rating: ${product.rating}</p>
//       <p>Description: ${product.description}</p>
//   `;
//   popup.style.display = 'flex';
// }
// function hidePopup() {
//   popup.style.display = 'none';
// }
// closeBtn.addEventListener('click', hidePopup);

// window.addEventListener('click', (event) => {
//     if (event.target === popup) {
//         hidePopup();
//     }
// });

async function displayProducts(products) {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);
    let productHTML = '';
    currentProducts.forEach(product => {
        const productCard = createProductCard(product);
        productHTML += productCard.outerHTML;
    });
    productListElement.innerHTML = productHTML;
    showPagination(products.length);
}

function showPagination(totalProducts) {
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    let paginationHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `<button class="page-btn ${currentPage === i ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    paginationElement.innerHTML = paginationHTML;
    const pageButtons = document.querySelectorAll('.page-btn');
    pageButtons.forEach(button => {
        button.addEventListener('click', async () => {
            currentPage = parseInt(button.dataset.page);
            const searchQuery = searchInput.value.trim();
            const response = await fetchProductData(searchQuery);
            if (response && Array.isArray(response.products)) {
                displayProducts(response.products);
            } else {
                console.error('Search results are invalid:', response);
            }
        });
    });
}

searchButton.addEventListener('click', async () => {
    currentPage = 1; 
    const searchQuery = searchInput.value.trim();
    const response = await fetchProductData(searchQuery);
    if (response && Array.isArray(response.products)) {
        displayProducts(response.products);
    } else {
        console.error('Search results are invalid:', response);
    }
});

window.addEventListener('load', async () => {
    const response = await fetchProductData();
    if (response && Array.isArray(response.products)) {
        displayProducts(response.products);
    } else {
        console.error('Error fetching product data:', response);
    }
});
