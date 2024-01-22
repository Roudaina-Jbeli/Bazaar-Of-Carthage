import React, { useState } from "react";

function DeleteProduct({ onDelete }) {
  const [productId, setProductId] = useState("");

  const handleInputChange = (e) => {
    setProductId(e.target.value);
  };

  const handleDelete = () => {
    // Assuming onDelete is a prop function passed from the parent component
    onDelete(productId);
    // Reset form fields after deleting the product
    setProductId("");
  };

  return (
    <div>
      <h2>Delete Product</h2>
      <label>Product ID:</label>
      <input
        type="text"
        value={productId}
        onChange={handleInputChange}
      />
      <button onClick={handleDelete}>Delete Product</button>
    </div>
  );
}

export default DeleteProduct;
