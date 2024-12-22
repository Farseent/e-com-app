import { Outlet, Navigate } from "react-router-dom";

const UserProtectedRoutes = () => {
  const isAuthenticated = localStorage.getItem("user");
  if(!isAuthenticated) alert("Please login first")
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default UserProtectedRoutes;
