let allProducts = [];
let cart = [];

const loading = document.getElementById('loading');
const errorDiv = document.getElementById('error');
const productsDiv = document.getElementById('products');
// Fetch Products from API
fetch('https://fakestoreapi.com/products')
  .then(res => {
    if (!res.ok) throw new Error('API failed');
    return res.json();
  })
  .then(products => {
    loading.style.display = 'none';
    allProducts = products;
    displayProducts(products);
  })
  .catch(err => {
    loading.style.display = 'none';
    errorDiv.style.display = 'block';
  });

// Display Products
function displayProducts(products) {
  productsDiv.innerHTML = '';
  products.forEach(product => {
    let title = product.title.slice(0, 20);
    let desc = product.description.slice(0, 50);

    productsDiv.innerHTML += `
      <div class="card">
        <img src="${product.image}">
        <h4>${title}...</h4>
        <p>$${product.price}</p>
        <p style="font-size:12px; color:gray;">${desc}...</p>
        <button onclick='addToCart(${JSON.stringify(product)})'>Add To Cart</button>
      </div>
    `;
  });
}

// Search Feature
document.getElementById('search').addEventListener('input', (e) => {
  let searchTerm = e.target.value.toLowerCase();
  let filtered = allProducts.filter(p => p.title.toLowerCase().includes(searchTerm));
  displayProducts(filtered);
});

// Category Filter
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');

    let cat = e.target.dataset.cat;
    if (cat === 'all') {
      displayProducts(allProducts);
    } else {
      let filtered = allProducts.filter(p => p.category === cat);
      displayProducts(filtered);
    }
  });
});

// Add To Cart
function addToCart(product) {
  cart.push(product);
  updateCart();
}

// Remove From Cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Update Cart Display
function updateCart() {
  document.getElementById('cartCount').innerText = cart.length;

  let total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById('total').innerText = total.toFixed(2);

  let cartHTML = '<h3>Cart Items</h3>';
  cart.forEach((item, i) => {
    cartHTML += `<div class="cart-item">
      ${item.title.slice(0, 20)} - $${item.price}
      <button onclick="removeFromCart(${i})">Remove</button>
    </div>`;
  });

  const existingCart = document.getElementById('cart');
  if (existingCart) existingCart.remove();
  productsDiv.insertAdjacentHTML('afterend', `<div id="cart">${cartHTML}</div>`);
}
