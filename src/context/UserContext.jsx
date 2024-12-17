import React, { createContext, useContext, useState } from "react";

// Create UserContext
const UserContext = createContext();

// UserProvider
export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState(() => localStorage.getItem("email") || "");

  // Handle Login
  const handleLogin = (userEmail) => {
    localStorage.setItem("email", userEmail);
    setEmail(userEmail);
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("email");
    setEmail("");
  };

  return (
    <UserContext.Provider
      value={{
        email,
        handleLogin, // Use this for login functionality
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for ease of use
export const useUser = () => useContext(UserContext);
