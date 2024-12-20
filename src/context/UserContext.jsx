import React, { createContext, useContext, useState } from "react";

// Create UserContext
const UserContext = createContext();

// UserProvider
export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState(() => localStorage.getItem("email") || "");
  const [name, setName] = useState(() => localStorage.getItem("name") || "");

  // Handle Login
  const handleLogin = (userEmail, userName) => {
    localStorage.setItem("email", userEmail);
    localStorage.setItem("name", userName);
    setEmail(userEmail);
    setName(userName);
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("name"); 
    setEmail("");
    setName("");
  };

  return (
    <UserContext.Provider
      value={{
        email,
        name,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for ease of use
export const useUser  = () => useContext(UserContext);
