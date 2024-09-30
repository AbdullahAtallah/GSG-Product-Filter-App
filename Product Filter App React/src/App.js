import React, { useState } from 'react';
import ProductList from './ProductList';
import './index.css';

const productsData = [
  { name: 'Laptop', category: 'Electronics', price: 1000 },
  { name: 'Smartphone', category: 'Electronics', price: 800 },
  { name: 'T-Shirt', category: 'Clothing', price: 20 },
  { name: 'Jeans', category: 'Clothing', price: 50 },
  { name: 'Sofa', category: 'Home', price: 500 },
  { name: 'Coffee Table', category: 'Home', price: 150 }
];

function App() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filterProducts = () => {
    if (activeCategory === 'All') {
      return productsData;
    } else {
      return productsData.filter(product => product.category === activeCategory);
    }
  };

  const handleFilterChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <h1>Modern Filterable Product List</h1>
      { }
      <ProductList
        products={filterProducts()}
        activeCategory={activeCategory}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
}

export default App;
