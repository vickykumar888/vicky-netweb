const apiURL = "https://jsonplaceholder.typicode.com/photos";
let productsPerPage = 10;
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
let listCard = document.querySelector('.listCard');
let closeShopping = document.querySelector('.closeShopping');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let openShopping = document.querySelector('.shopping');
let body = document.querySelector('body');

openShopping.addEventListener('click', ()=>{
  body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
  body.classList.remove('active');
})

let productsData = [];
let filteredProducts = [];

let listCards = [];


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
       <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productContainer.appendChild(productCard);
  });

  renderPagination(filteredProducts.length);
}

function addToCart(id){
  if(listCards[id] == null){
    listCards[id] = JSON.parse(JSON.stringify(filteredProducts[id]));
    listCards[id].quantity = 1;
    // listCards[id].id = Number(listCards[id].id); 
    localStorage.setItem('cartData', JSON.stringify(listCards));

}
reloadCard();
} 
function reloadCard(){
  listCard.innerHTML = '';
  let count = 0;
  let totalPrice = 0;
  let hascart=false;
  listCards.forEach((value, id)=>{
    if(value != null){
      totalPrice = totalPrice + value.id;
      count = count + value.quantity;
     hascart=true;
          let newDiv = document.createElement('li');
          newDiv.innerHTML = `
              <div><img src="image/${value.url}"/></div>
              <div>${value.title}</div>
              <div>${value.id.toLocaleString()}</div>
              <div>
                  <button onclick="changeQuantity(${id}, ${value.quantity - 1})">-</button>
                  <div class="count">${value.quantity}</div>
                  <button onclick="changeQuantity(${id}, ${value.quantity + 1})">+</button>
              </div>`;
              listCard.appendChild(newDiv);
      }
  })
  if(hascart){
    let shopButton = document.createElement('button');
    shopButton.textContent = 'Shop';
    shopButton.addEventListener('click', openShopForm);
    listCard.appendChild(shopButton);
  }else {
    let noCartHeading = document.createElement('h1');
        noCartHeading.textContent = 'No-Item';
        noCartHeading.classList.add('heading');
    listCard.appendChild(noCartHeading);
  }


  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(id, quantity){
  if(quantity == 0){
      delete listCards[id];
  }else{
      listCards[id].quantity = quantity;
      listCards[id].id = quantity * parseInt(filteredProducts[id].id);
  }
  reloadCard();
}
function openShopForm() {
  const shopWindow = window.open(`shop.html`, '_blank');
  shopWindow.document.write(shopFormHTML);

}


//pagination functionality

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

// //pop window functionality

// function showProductDetails(product) {
//   popupContent.innerHTML = `
//     <h2>${product.title}</h2>
//     <img src="${product.url}" alt="${product.name}">
//     <p>Price: $${product.id}</p>
//   `;
//   popup.style.display = 'block';
// }
// closeBtn.addEventListener('click', closePopup);
// function closePopup() {
//   popup.style.display = 'none';
// }

// function showProductDetails(product) {
//   const productURL = `product_details.html?id=${product.id}&title=${encodeURIComponent(
//     product.title
//   )}
//   &url=${encodeURIComponent(product.url)}&price=${encodeURIComponent(product.id)}`;
  
//   window.open(productURL, "_blank");
// }


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

//prev & next button functionality

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


// showing selecting quantity of product
productsPerPageDropdown.addEventListener('change', () => {
  productsPerPage = parseInt(productsPerPageDropdown.value);
  currentPage = 1;
  renderProducts(currentPage);
});

fetchProducts();