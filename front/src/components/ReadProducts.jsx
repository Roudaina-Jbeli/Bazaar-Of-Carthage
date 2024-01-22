// ReadProducts.jsx

import React from "react";
// import "./ReadProducts.css"; // Import the new CSS file

// ReadProducts.jsx

// ... (importations et autres composants) ...

function ReadProducts({ products, onDelete, onUpdate }) {
  return (
    <div className="products-container">
      <h2 className="textt1">Read Products</h2>
      {products.map((product, index) => (
        <div key={index} className="product-item">
          <h3>{product.productName}</h3>
          <img src={product.image} alt={product.productName} className="product-image" />
          <div className="product-buttons">
            <button onClick={() => onUpdate(product)} className="update-btn">
              Update
            </button>
            <button onClick={() => onDelete(product.id)} className="delete-btn">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReadProducts;
