const products = [
    { name: "Laptop", category: "Electronics", price: 1000 },
    { name: "Smartphone", category: "Electronics", price: 800 },
    { name: "T-Shirt", category: "Clothing", price: 20 },
    { name: "Jeans", category: "Clothing", price: 50 },
    { name: "Sofa", category: "Furnitures", price: 500 },
    { name: "Coffee Table", category: "Furnitures", price: 150 }
];

function displayProducts(filteredProducts) {
    const productDisplay = document.querySelector('.product-display');
    productDisplay.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
        <div class="product-name">${product.name}</div>
        <div class="product-category">${product.category}</div>
        <div class="product-price">$${product.price}</div>
      `;

        productDisplay.appendChild(productCard);
    });
}

function filterProducts(category) {
    if (category === 'All') {
        displayProducts(products);
    } else {
        const filtered = products.filter(product => product.category === category);
        displayProducts(filtered);
    }
}

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        filterProducts(category);

        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

filterProducts('All');
