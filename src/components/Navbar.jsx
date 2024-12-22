import React, { useState } from "react";
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { user , handleLogout } = useUser();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount] = useState(2);
  const useName = localStorage.getItem("userName");

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div>
      {/* Main navbar container */}
      <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Brand */}
          <NavLink to="/" className="text-3xl font-extrabold text-white">
            E-Cart
          </NavLink>

          {/* Search Bar */}
          <div className="relative flex items-center bg-white rounded-full px-2 py-1 md:w-1/2 w-2/3 max-w-sm focus-within:ring-2 focus-within:ring-blue-300">
            <FiSearch className="text-gray-500 text-lg" />
            <input
              type="text"
              className="ml-2 focus:outline-none text-sm w-full"
              placeholder="Search products..."
            />
          </div>

          {/* Desktop Menu Links */}
          <ul className="hidden md:flex space-x-8 text-white text-lg items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-300"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-300"
              }
            >
              Orders
            </NavLink>
          </ul>

          {/* Right Actions */}
          <div className="hidden md:flex justify-end items-center space-x-4 px-2">
            <NavLink to="/cart" className="relative">
              <FiShoppingCart className="text-2xl text-white hover:text-yellow-300" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-sm font-bold w-5 h-5 rounded-full flex justify-center items-center">
                  {cartCount}
                </span>
              )}
            </NavLink>

            {/* User Dropdown */}
            {useName ? (
              <div className="relative">
                {/* User Dropdown Trigger */}
                <button
                  onClick={toggleDropdown}
                  className="flex items-center bg-blue-600 px-4 py-2 rounded-full text-white hover:bg-blue-700 focus:outline-none"
                >
                  <FiUser className="mr-2" />
                  {useName}
                </button>
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 text-gray-700 z-50">
                    <NavLink
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Profile
                    </NavLink>
                    <button
                      onClick={() => {
                        handleLogout();
                        setDropdownOpen(false);
                      }}
                      className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <NavLink to="/login">
                <button className="bg-red-400 h-9 px-3 rounded text-white hover:bg-red-500">
                  Log In
                </button>
              </NavLink>
            )}
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-14 right-5 w-44 h-auto bg-gray-900 z-50 shadow-lg rounded-lg p-5">
          <div className="flex flex-col space-y-4 text-lg font-semibold text-white">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
              onClick={toggleMobileMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
              onClick={toggleMobileMenu}
            >
              Cart
            </NavLink>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
              onClick={toggleMobileMenu}
            >
              Orders
            </NavLink>
            {useName ? (
              <button
                onClick={() => {
                  handleLogout();
                  toggleMobileMenu();
                }}
                className="text-red-600 hover:text-red-800"
              >
                Log Out
              </button>
            ) : (
              <NavLink
                to="/login"
                className="text-blue-600 hover:text-blue-800"
              >
                Log In
              </NavLink>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
