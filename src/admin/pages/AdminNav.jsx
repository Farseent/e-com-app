import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBox,
  FaUsers,
  FaShoppingCart,
  FaChartBar,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import { useUser } from "../../context/UserContext";

const AdminNav = () => {
  const { handleLogout } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        !event.target.closest("#mobile-menu") &&
        !event.target.closest("#hamburger-icon")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <div className="sticky z-50 top-0 bg-gray-900 text-white w-full p-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo or Title */}
        <h1 className="text-2xl font-bold">Admin Panel</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10">
          <Link
            to="/admin"
            className="flex items-center text-sm font-medium hover:text-gray-400 transition-all"
          >
            <FaTachometerAlt className="mr-2" />
            Dashboard
          </Link>
          <Link
            to="/admin/manageproduct"
            className="flex items-center text-sm font-medium hover:text-gray-400 transition-all"
          >
            <FaBox className="mr-2" />
            Manage Products
          </Link>
          <Link
            to="/admin/manageusers"
            className="flex items-center text-sm font-medium hover:text-gray-400 transition-all"
          >
            <FaUsers className="mr-2" />
            Manage Users
          </Link>
          <Link
            to="/admin/manageorders"
            className="flex items-center text-sm font-medium hover:text-gray-400 transition-all"
          >
            <FaShoppingCart className="mr-2" />
            View Orders
          </Link>
          <Link
            to="/admin/reports"
            className="flex items-center text-sm font-medium hover:text-gray-400 transition-all"
          >
            <FaChartBar className="mr-2" />
            Reports
          </Link>
        </nav>

        {/* Logout Button */}
        <button
          className="hidden md:flex items-center text-sm font-medium hover:text-red-500 transition-all"
          onClick={handleLogout}
        >
          <FaSignOutAlt className="mr-2" />
          Logout
        </button>

        {/* Hamburger Icon */}
        <button
          id="hamburger-icon"
          className="md:hidden text-gray-500"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <FaBars size={20} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-14 left-0 bg-gray-800 w-full rounded-lg p-4 space-y-4 z-50"
        >
          <Link
            to="/admin"
            className="w-full flex items-center text-sm font-medium hover:text-gray-400 transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaTachometerAlt className="mr-2" />
            Dashboard
          </Link>
          <Link
            to="/admin/manageproduct"
            className="w-full flex items-center text-sm font-medium hover:text-gray-400 transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaBox className="mr-2" />
            Manage Products
          </Link>
          <Link
            to="/admin/manageusers"
            className="w-full flex items-center text-sm font-medium hover:text-gray-400 transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaUsers className="mr-2" />
            Manage Users
          </Link>
          <Link
            to="/admin/manageorders"
            className="w-full flex items-center text-sm font-medium hover:text-gray-400 transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaShoppingCart className="mr-2" />
            View Orders
          </Link>
          <Link
            to="/admin/reports"
            className="w-full flex items-center text-sm font-medium hover:text-gray-400 transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaChartBar className="mr-2" />
            Reports
          </Link>
          <button
            className="w-full flex items-center text-sm font-medium hover:text-red-500 transition-all"
            onClick={() => {
              setIsMobileMenuOpen(false);
              handleLogout();
            }}
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminNav;
