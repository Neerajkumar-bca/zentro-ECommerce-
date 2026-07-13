const products = [
  {id: 1, name: "Wireless Headphones", price: 1499, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"},
  {id: 2, name: "Smart Watch", price: 2999, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"},
  {id: 3, name: "Casual T-Shirt", price: 499, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"},
  {id: 4, name: "Running Shoes", price: 1999, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"}
];

let cart = [];

function loadProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.forEach(p => {
    productList.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
  alert(`${product.name} added to cart!`);
}

function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;
}

function checkout() { 
  if(cart.length === 0) alert("Cart is empty!");
  else alert("Order Placed! Total items: " + cart.length);
}

loadProducts();