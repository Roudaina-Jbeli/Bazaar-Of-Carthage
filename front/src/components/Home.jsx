// Home.jsx

import axios from "axios";
import React, { useState, useEffect } from "react";
import CreateProduct from "./CreateProduct.jsx";
import ReadProducts from "./ReadProducts.jsx";
import UpdateProduct from "./UpdateProduct.jsx";
import DeleteProduct from "./DeleteProduct.jsx";

function Home() {
  const [tunisian, setTun] = useState([]);

  useEffect(() => {
    fetchData(); // Fetch initial data
  }, []); // Adding an empty dependency array to ensure the effect runs only once

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/products");
      setTun(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCreate = async (newProduct) => {
    try {
      const response = await axios.post("http://localhost:8080/api/products/post", newProduct);
      setTun([...tunisian, response.data]);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const handleUpdate = async (updatedProduct) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/products/update/${updatedProduct.id}`, updatedProduct);
      setTun((prevProducts) =>
        prevProducts.map((product) =>
          product.id === updatedProduct.id ? response.data : product
        )
      );
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:8080/api/products/delete/${productId}`);
      setTun((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="home">
      <CreateProduct onCreate={handleCreate} />
      <ReadProducts products={tunisian} onDelete={handleDelete} onUpdate={handleUpdate} />
      <UpdateProduct onUpdate={handleUpdate} />
      <DeleteProduct onDelete={handleDelete} />
    </div>
  );
}

export default Home;
