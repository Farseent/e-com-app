import React, { createContext, useContext, useState } from "react";

// Create context
const UserContext = createContext();

// Provider
export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState(() => localStorage.getItem("email") || "");
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]); // State to store placed orders

  const addToCart = (product) => {
    const productExists = cart.find((item) => item.id === product.id);

    if (productExists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateQuantity = (productId, change) => {
    setCart(
      cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + change) } 
          : item
      )
    );
  };

  const placeOrder = (orderDetails) => {
    setOrders((prevOrders) => [...prevOrders, orderDetails]);
    setCart([]); // Clear cart after placing order
  };

  const handleLogin = (userEmail) => {
    localStorage.setItem("email", userEmail);
    setEmail(userEmail);
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    setEmail("");
  };

  return (
    <UserContext.Provider
      value={{
        email,
        handleLogin,
        setEmail,
        handleLogout,
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
    </UserContext.Provider>
  );
};

// Custom hook to use UserContext
export const useUser = () => {
  return useContext(UserContext);
};
