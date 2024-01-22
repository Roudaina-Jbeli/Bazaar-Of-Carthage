import React, { useState } from "react";
import axios from "axios";
import img3 from "../image/add.png";

function CreateProduct() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleAddProduct = async () => {
    try {
      // Make axios.post request to add the product
      const response = await axios.post("http://localhost:8080/api/products/post", {
        productName,
        price,
        image,
      });


      // Close the modal
      setShowModal(false);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="rare">
      <img
        src={img3}
        alt="Add"
        className="add-icon"
        onClick={() => setShowModal(true)}
      />

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <label>Product Name:</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />

            <label>Price:</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <label>Image URL:</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />

            <button onClick={handleAddProduct}>Add Product</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateProduct;
