import React, { createContext, useContext, useEffect, useState } from "react";
import { addUser, emailCheck, userCheck } from "../api/userApi";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider   = ({ children }) => {
  const [user,setUser] = useState();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const storedEmail = localStorage.getItem("user");
  //   const storedUserId = localStorage.getItem("userId");
  //   if (storedEmail) {
  //     setUser({ email: storedEmail, id: storedUserId });
  //   }
  // }, []);

  const handleSignup = async(userData) => {
    try {
      const isEmail = await emailCheck(userData.email)
      if(!isEmail){ 
        const newUser = await addUser(userData);
        setUser(newUser);
        localStorage.setItem("user",newUser.email);
        localStorage.setItem("userId",newUser.id);
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
            localStorage.setItem("userName",userValidation.name);
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

export const useUser  = () => useContext(UserContext);
