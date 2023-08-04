const apiURL = "https://jsonplaceholder.typicode.com/photos";
let productsPerPage = 10;
let currentPage = 1;

const productContainer = document.getElementById('productContainer');
const searchInput = document.getElementById('searchInput');
const pagination = document.getElementById('pagination');
const popup = document.getElementById('popup');
const popupContent = document.getElementById('popupContent');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const productsPerPageDropdown = document.getElementById('productsPerPage');

let productsData = [];
let filteredProducts = [];

async function fetchProducts() {
  try {
    let data = await fetch(apiURL);
    productsData = await data.json();
    productsData = productsData.slice(0, 200); 

    filteredProducts = productsData;
   
    renderProducts(currentPage);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

function renderProducts(page) {
  productContainer.innerHTML = '';

  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToRender = filteredProducts.slice(startIndex, endIndex);

  productsToRender.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <img src="${product.url}" alt="${product.name}">
      <p>Price: $${product.id}</p>
      <p>Title: ${product.title.slice(0, 6)}</p>
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

// Debounce for search input
let Timer;
searchInput.addEventListener('input', () => {
  clearTimeout(Timer);
  Timer = setTimeout(() => {
    currentPage = 1;
    const searchText = searchInput.value.toLowerCase();
    filteredProducts = productsData.filter(product =>
      product.title.toLowerCase().includes(searchText)
    );
    renderProducts(currentPage);
  }, 2000);
});

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderProducts(currentPage);
  }
});

nextBtn.addEventListener('click', () => {
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderProducts(currentPage);
  }
});

productsPerPageDropdown.addEventListener('change', () => {
  productsPerPage = parseInt(productsPerPageDropdown.value);
  currentPage = 1;
  renderProducts(currentPage);
});

fetchProducts();