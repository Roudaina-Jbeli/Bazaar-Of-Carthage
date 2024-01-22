import React, { useState } from "react";
import { useAuth } from "./AuthProvider"; // Adjust the import path as needed

function CreateProduct({ onCreate }) {
  const auth = useAuth(); // Use the whole context object

  const [product, setProduct] = useState({
    productName: "",
    price: 0,
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleCreate = () => {
    // Check if the user is authenticated before creating the product
    if (auth.user) {
      // Assuming onCreate is a prop function passed from the parent component
      onCreate(product);
      // Reset form fields after creating the product
      setProduct({ productName: "", price: 0, image: "" });
    } else {
      // Handle unauthorized access, redirect to login page, or show a message
      console.log("User not authenticated. Redirecting to login page...");
    }
  };

  return (
    <div>
      <h2>Create Product</h2>
      <label>Product Name:</label>
      <input
        type="text"
        name="productName"
        value={product.productName}
        onChange={handleInputChange}
      />
      <label>Price:</label>
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleInputChange}
      />
      <label>Image URL:</label>
      <input
        type="text"
        name="image"
        value={product.image}
        onChange={handleInputChange}
      />
      <button onClick={handleCreate}>Create Product</button>
    </div>
  );
}

export default CreateProduct;
