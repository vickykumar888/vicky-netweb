let currentPage = 1;
let productsPerPage = 5;
let productData = []; 

// product list
async function initProductList() {
    productData = await fetchProductData(); 
    loadProductList(); 
    updateButtons();
}


// display product list

function loadProductList() {
    const productList = document.getElementById('productList');
    
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    productList.innerHTML = ''; 

    productData.slice(startIndex, endIndex).forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product');
        productItem.innerHTML = `
            <h3>${product.title}</h3>
            <img src="${product.thumbnail}" alt="${product.title}" width="300px">
            <p>Price: $${product.price}</p>
            <button onclick="navigateToProductDetail(${product.id})">Buy Now</button>
        `;
        productList.appendChild(productItem);
    });
}


//product data from the API
async function fetchProductData() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error('Error fetching product data:', error);
        return [];
    }
}

//product detail page
function navigateToProductDetail(productId) {
    window.location.href = `product-detail.html?id=${productId}`;
}

function changePerPage() {
    productsPerPage = parseInt(document.getElementById('perPage').value);
    currentPage = 1;
    loadProductList();
}

function navigatePage(direction) {
    currentPage += direction;
    loadProductList();
    updateButtons();
}

//pagination buttons
function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage * productsPerPage >= productsPerPage * Math.ceil(productData.length / productsPerPage);
}

let debounceTimeout;

// Debounce function
function debounce(func, delay) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(func, delay);
}

// handle search
function debouncedSearch() {
    debounce(searchProducts, 300);
}


function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const searchText = searchInput.value.toLowerCase();
    
    const filteredProducts = productData.filter(product => 
        product.title.toLowerCase().includes(searchText)
    );

    currentPage = 1;
    loadProductList(filteredProducts);
    updateButtons();

    console.log(filteredProducts);
}

window.onload = initProductList;
