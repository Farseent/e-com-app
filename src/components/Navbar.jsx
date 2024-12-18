import React from "react";
import { FiSearch } from "react-icons/fi"; 
import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { email, handleLogout, name } = useUser();

  return (
    <div className="flex flex-wrap md:flex-nowrap bg-blue-700 w-full h-auto md:h-[75px] justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <h1 className="font-bold text-2xl md:text-xl lg:text-3xl font-serif text-white">
          E-Cart
        </h1>
      </div>
      <ul className="flex flex-row space-x-5 text-white text-sm md:text-base lg:text-lg">
        <NavLink to={'/'}><li>Home</li></NavLink>
        <NavLink to={'/cart'}><li>Cart</li></NavLink>
        <NavLink to={'/orders'}><li>Order</li></NavLink>
      </ul>
      <div className="mt-2 md:mt-0">
        <div className="relative flex items-center">
          <div className="md:hidden text-white text-2xl mr-2">
            <FiSearch />
          </div>
          <input
            type="search"
            className="hidden md:block h-8 w-3/4 md:w-[300px] lg:w-[400px] px-3 rounded"
            placeholder="Search here..."
          />
        </div>
      </div>
      <div className="flex items-center space-x-4 mt-2 md:mt-0">
        {email ? (
          <>
            <h1 className="font-semibold text-white text-sm md:text-base">{name}</h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 h-9 px-3 rounded text-white hover:bg-red-600"
            >
              Log Out
            </button>
          </>
        ) : (
          <NavLink to="/login">
            <button className="bg-red-400 h-9 px-3 rounded text-white hover:bg-red-500">
              Log In
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
