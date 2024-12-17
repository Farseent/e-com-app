import React, { createContext, useContext, useState } from "react";

// Create a context
const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("user");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};
