import React, { useState, useEffect } from "react";
import axios from "axios";
import img1 from "../image/edit.png";
import img2 from "../image/delete.png";
import img4 from "../image/cart.png";

function ReadProducts() {
  const [products, setProducts] = useState([]);
  const [x, setX] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateProduct, setUpdateProduct] = useState({
    ProductID: null,
    productName: "",
    price: "",
    image: "",
  });

  const [cartItems, setCartItems] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);

  useEffect(() => {
    fetchData(); // Fetch initial data
  }, [x]); // Use x as a dependency to trigger re-fetch when x changes

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      // Make axios.delete request to delete the product
      await axios.delete(`http://localhost:8080/api/products/delete/${productId}`);
      setX((prevX) => !prevX); // Toggle x to trigger re-fetch in useEffect
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleUpdateClick = (product) => {
    setUpdateProduct(product);
    setShowUpdateModal(true);
  };

  const handleUpdate = async () => {
    try {
      // Make axios.put request to update the product
      await axios.put(`http://localhost:8080/api/products/update/${updateProduct.ProductID}`, {
        productName: updateProduct.productName,
        price: updateProduct.price,
        image: updateProduct.image,
      });

      setX((prevX) => !prevX); // Trigger re-fetch in useEffect
      setShowUpdateModal(false);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleCancelUpdate = () => {
    setShowUpdateModal(false);
  };

  const handleAddToCart = (product) => {
    // Check if the item is already in the cart
    const existingCartItem = cartItems.find((item) => item.ProductID === product.ProductID);

    if (existingCartItem) {
      // If item exists, update quantity
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.ProductID === product.ProductID
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If item does not exist, add to cart with quantity 1
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const handleDoubleClick = (product) => {
    handleAddToCart(product);
    setShowCartModal(true);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.ProductID !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="container"><button className="rare" onClick={() => setShowCartModal(true)}>

    <img src={img4} alt="Cart" className="cart-icon" />
  </button>
    <div className="products-container">
      {/* <h2 className="textt1"></h2> */}
      
      {products.map((product, index) => (
        <div
          className="product-card"
          key={index}
          onDoubleClick={() => handleDoubleClick(product)}
        >
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <h3>{product.productName}</h3>
            <p>Price: {product.price} $</p>
          </div>
          <div className="product-actions">
            <img
              src={img1}
              alt="Edit"
              className="action-icon"
              onClick={() => handleUpdateClick(product)}
            />
            <img
              src={img2}
              alt="Delete"
              className="action-icon"
              onClick={() => handleDelete(product.ProductID)}
            />
          </div>
        </div>
      ))}

      {showUpdateModal && (
        <div className="modal">
          <div className="modal-content">
            <label>Product Name:</label>
            <input
              type="text"
              value={updateProduct.productName}
              onChange={(e) =>
                setUpdateProduct((prevProduct) => ({
                  ...prevProduct,
                  productName: e.target.value,
                }))
              }
            />

            <label>Price:</label>
            <input
              type="text"
              value={updateProduct.price}
              onChange={(e) =>
                setUpdateProduct((prevProduct) => ({
                  ...prevProduct,
                  price: e.target.value,
                }))
              }
            />

            <label>Image URL:</label>
            <input
              type="text"
              value={updateProduct.image}
              onChange={(e) =>
                setUpdateProduct((prevProduct) => ({
                  ...prevProduct,
                  image: e.target.value,
                }))
              }
            />

            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleCancelUpdate}>Cancel</button>
          </div>
        </div>
      )}

      {showCartModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Shopping Cart</h3>
            {cartItems.map((item) => (
              <div key={item.ProductID}>
                <p>{item.productName}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => handleRemoveFromCart(item.ProductID)}>Remove</button>
              </div>
            ))}
            <button onClick={handleClearCart}>Clear Cart</button>
            <button onClick={() => setShowCartModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default ReadProducts;
