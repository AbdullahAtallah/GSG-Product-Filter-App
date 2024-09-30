import React from 'react';

function ProductList({ products, activeCategory, onFilterChange }) {
  const categories = ['All', 'Electronics', 'Clothing', 'Home'];

  return (
    <div>
      { }
      <div className="filter-section">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => onFilterChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      { }
      <div className="product-display">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-name">{product.name}</div>
            <div className="product-category">{product.category}</div>
            <div className="product-price">${product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
