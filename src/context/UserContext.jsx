import React, { createContext, useContext, useState } from "react";
import { addUser, emailCheck, userCheck } from "../api/userApi";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState(() => localStorage.getItem("email") || "");
  const [name, setName] = useState(() => localStorage.getItem("name") || "");
  const [role, setRole] = useState(() => localStorage.getItem("role") || "");

  const [user,setUser] = useState();
  const navigate = useNavigate();


  const handleSignup = async(userData) => {
      const isEmail = await emailCheck(userData.email)
      if(!isEmail){ 
        const user = await addUser(userData);
        setUser(user);
        localStorage.setItem("user",user.email);
        localStorage.setItem("userId",user.id);
        navigate('/');
        return "";
      }
      else return "User already exist!"
  };

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
        handleSignup
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for ease of use
export const useUser  = () => useContext(UserContext);
