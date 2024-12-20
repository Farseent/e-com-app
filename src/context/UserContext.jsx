import React, { createContext, useContext, useState } from "react";
import { addUser, emailCheck, userCheck } from "../api/userApi";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user,setUser] = useState();
  const navigate = useNavigate();

  const handleSignup = async(userData) => {
    try {
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
    } catch (error) {
      console.error("Signup error:", error);
      return "An error occurred during signup.";
    }
      
  };

  const handleLogin = async(email,password) => {
    try {
      const [userValidation] = await userCheck(email,password);
      if(userValidation){
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
      }else{
        return "Invalid email or password"
      }
    } catch (error) {
      console.error('login error:',error);
      return "An error occurred during login.";
    }
  };

  const handleLogout = () => {
    setUser([]);
    localStorage.clear();
    navigate("/login");
  };

  return (
    <UserContext.Provider
      value={{
        user,
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
