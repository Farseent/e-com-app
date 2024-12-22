import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaBox, FaUsers, FaShoppingCart, FaChartBar, FaSignOutAlt } from 'react-icons/fa';
import { useUser } from '../../context/UserContext';

const AdminNav = () => {
    const { handleLogout } = useUser();

    return (
        <div className="sticky z-50 top-0 bg-gray-900 text-white w-full p-4 shadow-md">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Admin Panel Title */}
                <h1 className="text-2xl font-bold">Admin Panel</h1>

                {/* Navigation Links */}
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
                    className="flex items-center text-sm font-medium hover:text-red-500 transition-all"
                    onClick={handleLogout}
                >
                    <FaSignOutAlt className="mr-2" />
                    Logout
                </button>
            </div>

            {/* Responsive Mobile Menu */}
            <div className="md:hidden mt-4 flex flex-wrap space-y-2">
                <Link
                    to="/admin"
                    className="w-full flex items-center text-sm font-medium hover:text-gray-400 transition-all"
                >
                    <FaTachometerAlt className="mr-2" />
                    Dashboard
                </Link>
                <Link
                    to="/admin/manageproduct"
                    className="w-full flex items-center text-sm font-medium hover:text-gray-400 transition-all"
                >
                    <FaBox className="mr-2" />
                    Manage Products
                </Link>
                <Link
                    to="/admin/manageusers"
                    className="w-full flex items-center text-sm font-medium hover:text-gray-400 transition-all"
                >
                    <FaUsers className="mr-2" />
                    Manage Users
                </Link>
                <Link
                    to="/admin/manageorders"
                    className="w-full flex items-center text-sm font-medium hover:text-gray-400 transition-all"
                >
                    <FaShoppingCart className="mr-2" />
                    View Orders
                </Link>
                <Link
                    to="/admin/reports"
                    className="w-full flex items-center text-sm font-medium hover:text-gray-400 transition-all"
                >
                    <FaChartBar className="mr-2" />
                    Reports
                </Link>
            </div>
        </div>
    );
};

export default AdminNav;
