// Home.jsx

import axios from "axios";
import React, { useState, useEffect } from "react";
import CreateProduct from "./CreateProduct.jsx";
import ReadProducts from "./ReadProducts.jsx";


function Home() {
  const [tunisian, setTun] = useState([]);
  const[x,setx]=useState(false)
  useEffect(() => {
    fetchData(); // Fetch initial data
  },x); // Adding an empty dependency array to ensure the effect runs only once

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
  return (
    <div className="home">
      <ReadProducts products={tunisian} z={setx}/>
      <CreateProduct onCreate={handleCreate}/>
 
    </div>
  );

}



export default Home;
