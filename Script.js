const products = [
    {id: 1, name: "Wireless Headphones", price: 1499, img: "https://via.placeholder.com/250/ff9900/fff?text=Headphones"},
    {id: 2, name: "Smart Watch", price: 2999, img: "https://via.placeholder.com/250/232f3e/fff?text=Watch"},
    {id: 3, name: "Casual T-Shirt", price: 499, img: "https://via.placeholder.com/250/28a745/fff?text=T-Shirt"},
    {id: 4, name: "Running Shoes", price: 1999, img: "https://via.placeholder.com/250/ff6600/fff?text=Shoes"},
    {id: 5, name: "Laptop Bag", price: 899, img: "https://via.placeholder.com/250/6c757d/fff?text=Bag"},
    {id: 6, name: "Bluetooth Speaker", price: 1299, img: "https://via.placeholder.com/250/007bff/fff?text=Speaker"}
];

let cart = [];

function loadProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(p => {
        productList.innerHTML += `
            <div class="product">
                <img src="${p.img}">
                <h3>${p.name}</h3>
                <p><b>₹${p.price}</b></p>
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
    document.getElementById('cart-count').innerText = cart.length;
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(p => {
        cartItems.innerHTML += `<p>${p.name} - ₹${p.price}</p>`;
        total += p.price;
    });
    document.getElementById('total').innerText = total;
}

function checkout() {
    if(cart.length === 0) {
        alert('Cart is empty!');
        return;
    }
    alert('Order Placed Successfully! Total: ₹' + document.getElementById('total').innerText);
    cart = [];
    updateCart();
}

loadProducts();
