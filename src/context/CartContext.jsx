import React, { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "./UserContext";

// Create CartContext
const CartContext = createContext();

// CartProvider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const { email } = useUser();


   // Fetch cart items from the database on component mount or when email changes
   useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/cart?email=${email}`)
        .then((res) => res.json())
        .then((data) => setCart(data || []))
        .catch((err) => console.error("Error fetching cart data:", err));
    } else {
      setCart([]);
    }
  }, [email]);

  const addToCart = (product) => {
    if (!email) {
      console.error("User not logged in");
      return;
    }

    fetch(`http://localhost:5000/cart`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...product, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
      })
      .catch((err) => console.error("Error adding to cart:", err));
  };

  const removeFromCart = (productId) => {
    if (!email) {
      console.error("User not logged in");
      return;
    }

    fetch(`http://localhost:5000/cart/${productId}?email=${email}`, {
      method: "DELETE",
    })
      .then(() => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
      })
      .catch((err) => console.error("Error removing from cart:", err));
  };

  const clearCart = () => {
    if (!email) {
      console.error("User not logged in");
      return;
    }

    fetch(`http://localhost:5000/cart/clear?email=${email}`, {
      method: "DELETE",
    })
      .then(() => setCart([]))
      .catch((err) => console.error("Error clearing cart:", err));
  };

  const updateQuantity = (productId, amount) => {
    if (!email) {
      console.error("User not logged in");
      return;
    }

    fetch(`http://localhost:5000/cart/${productId}?email=${email}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: amount }),
    })
      .then(() => {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + amount }
              : item
          )
        );
      })
      .catch((err) => console.error("Error updating quantity:", err));
  };


  const placeOrder = (orderDetails) => {
    setOrders((prevOrders) => [...prevOrders, orderDetails]);
    setCart([]); // Clear cart after placing order
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        orders,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for ease of use
export const useCart = () => useContext(CartContext);