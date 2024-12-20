import React, { createContext, useContext, useState } from "react";
import { emailCheck, userCheck } from "../api/userApi";
import { Navigate, useNavigate } from "react-router-dom";

// Create UserContext
const UserContext = createContext();

// UserProvider
export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState(() => localStorage.getItem("email") || "");
  const [name, setName] = useState(() => localStorage.getItem("name") || "");
  const [role, setRole] = useState(() => localStorage.getItem("role") || "");

  const [user,setUser] = useState();
  const navigate = useNavigate();

  // Handle Login
  const handleLogin = async(email,password) => {

    try {
      const [userValidation] = await userCheck(email,password);
      if (userValidation.role === "admin"){
        setUser(userValidation)
        localStorage.setItem("admin",userValidation.email)
        navigate('/admin');
        return "";
      }
      else{
        setUser(userValidation)
        localStorage.setItem("user",userValidation.email);
        localStorage.setItem("userId",userValidation.id);
        navigate('/');
        return "";
      }
    } catch (error) {
      console.error('login error:',error);
    }
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    setEmail("");
    setName("");
    setRole("");
  };

  return (
    <UserContext.Provider
      value={{
        email,
        role,
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
