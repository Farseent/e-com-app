import React, { useEffect, useState } from "react";
import {FiSearch,FiShoppingCart,FiUser,FiMenu,FiX,FiHome,FiClipboard,FiLogOut,FiLogIn,} from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useCart } from "../context/CartContext";
import { getAllProduct } from "../api/productApi";
import { FaBars } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";

const Navbar = () => {
  const { handleLogout } = useUser();
  const { cart } = useCart();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const userName = localStorage.getItem("userName");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      if (searchTerm.trim() === "") {
        setProducts([]);
        setShowModal(false);
        return;
      }
      try {
        const res = await getAllProduct();
        const searchProducts = res.data.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(searchProducts);
        setShowModal(true);
      } catch (error) {
        console.error("Error while searching Products", error);
      }
    };

      const delaySearch = setTimeout(() => {
        fetchProducts();
      }, 300);

      return () => clearTimeout(delaySearch);
    }, [searchTerm]);

    const handleProductClick = (productId) => {
      setShowModal(false);
      setSearchTerm("");
      navigate(`/product-details/${productId}`);
    };

    const toggleDropdown = () => {
      setDropdownOpen((prev) => !prev);
    };

    const toggleMobileMenu = () => {
      setMobileMenuOpen((prev) => !prev);
    };

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuOpen &&
        !event.target.closest("#mobile-menu") &&
        !event.target.closest("#hamburger-icon")
      ) {
        setMobileMenuOpen(false);
      }
      if (
        showModal &&
        !event.target.closest("#search-modal") &&
        !event.target.closest("#search-input")
      ) {
        setShowModal(false);
      }
      if (
        isDropdownOpen &&
        !event.target.closest("#user-dropdown") &&
        !event.target.closest("#user-button") &&
        !event.target.closest(".dropdown-options")
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen, showModal, isDropdownOpen]);

  return (
    <div className="sticky top-0 z-40">
      {/* Main navbar container */}
      <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Brand */}
          <NavLink to="/" className="text-3xl font-extrabold text-white">
            E-Cart
          </NavLink>

          {/* Search Bar */}
          <div className="relative flex items-center bg-white rounded-full px-2 py-1 md:w-1/2 w-2/3 max-w-sm focus-within:ring-2 focus-within:ring-blue-300">
          <FiSearch className="text-gray-500 text-lg mr-2 " />
          <input
            id="search-input"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            type="search"
            placeholder="Search..."
            className="bg-transparent w-[100%] focus:outline-none"
          />
          {showModal && (
            <div
              id="search-modal"
              className="absolute top-6 left-0 mt-3 z-50 w-full max-h-60 bg-white border shadow-lg rounded-lg overflow-hidden"
            >
              <div className="flex justify-between items-center px-4 py-2 bg-gray-100 border-b">
                <h3 className="text-sm font-medium text-gray-700">Search Results</h3>
              </div>
              {products.length > 0 ? (
                <ul className="divide-y divide-gray-300 overflow-y-auto">
                  {products.map((product) => (
                    <li
                      key={product.id}
                      onClick={() => handleProductClick(product.id)}
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none text-gray-700"
                    >
                      {product.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-4 text-gray-500 text-center">
                  <p>No products found. Please try a different search.</p>
                </div>
              )}
            </div>
          )}
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
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-sm font-bold w-5 h-5 rounded-full flex justify-center items-center">
                  {cart.length}
                </span>
              )}
            </NavLink>

            {/* User Dropdown */}
            {userName ? (
              <div className="relative">
                <button
                  id="user-button"
                  onClick={toggleDropdown}
                  className="flex items-center bg-blue-600 px-4 py-2 rounded-full text-white hover:bg-blue-700 focus:outline-none"
                >
                  <FiUser className="mr-2" />
                  {userName}
                </button>
                {isDropdownOpen && (
                  <div id="user-dropdown" className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 text-gray-700 z-50">
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
            id="hamburger-icon"
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <FaBars size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-14 left-0 bg-gray-900 w-full rounded-lg p-4 space-y-4 z-50 shadow-lg"
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `w-full flex items-center text-sm font-medium ${
                isActive ? "text-blue-600" : "hover:text-blue-400"
              }`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            <FiHome className="mr-2" />
            Home
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `w-full flex items-center text-sm font-medium ${
                isActive ? "text-blue-600" : "hover:text-blue-400"
              }`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            <MdOutlineAccountCircle className="mr-2" />
            Profile
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `w-full flex items-center text-sm font-medium ${
                isActive ? "text-blue-600" : "hover:text-blue-400"
              }`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            <FiShoppingCart className="mr-2" />
            Cart
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `w-full flex items-center text-sm font-medium ${
                isActive ? "text-blue-600" : "hover:text-blue-400"
              }`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            <FiClipboard className="mr-2" />
            Orders
          </NavLink>
          {userName ? (
            <button
              className="w-full flex items-center text-sm font-medium text-red-500 hover:text-red-700 transition-all"
              onClick={() => {
                handleLogout();
                setMobileMenuOpen(false);
              }}
            >
              <FiLogOut className="mr-2" />
              Log Out
            </button>
          ) : (
            <NavLink
              to="/login"
              className="w-full flex items-center text-sm font-medium text-blue-500 hover:text-blue-700 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FiLogIn className="mr-2" />
              Log In
            </NavLink>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;