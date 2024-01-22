import React, { useState } from "react";

function UpdateProduct({ onUpdate }) {
  const [updatedProduct, setUpdatedProduct] = useState({
    id: "", // Assuming you have product id for updating
    productName: "",
    price: 0,
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    // Assuming onUpdate is a prop function passed from the parent component
    onUpdate(updatedProduct);
    // Reset form fields after updating the product
    setUpdatedProduct({ id: "", productName: "", price: 0, image: "" });
  };

  return (
    <div>
      <h2>Update Product</h2>
      <label>Product ID:</label>
      <input
        type="text"
        name="id"
        value={updatedProduct.id}
        onChange={handleInputChange}
      />
      <label>Product Name:</label>
      <input
        type="text"
        name="productName"
        value={updatedProduct.productName}
        onChange={handleInputChange}
      />
      <label>Price:</label>
      <input
        type="number"
        name="price"
        value={updatedProduct.price}
        onChange={handleInputChange}
      />
      <label>Image URL:</label>
      <input
        type="text"
        name="image"
        value={updatedProduct.image}
        onChange={handleInputChange}
      />
      <button onClick={handleUpdate}>Update Product</button>
    </div>
  );
}

export default UpdateProduct;

