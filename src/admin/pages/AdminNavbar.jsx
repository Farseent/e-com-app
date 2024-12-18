import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaBox, FaUsers, FaShoppingCart, FaChartBar, FaSignOutAlt } from 'react-icons/fa';

const AdminNavbar = () => {
    return (
        <div className="bg-gray-900 text-white w-64 h-screen fixed">
            {/* Header */}
            <div className="p-6 border-b border-gray-700">
                <h1 className="text-2xl font-bold">Admin Panel</h1>
            </div>

            {/* Navigation Links */}
            <ul className="mt-6 space-y-2 px-4">
                <li>
                    <Link
                        to="/admin"
                        className="flex items-center px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-700 transition-all duration-300"
                    >
                        <FaTachometerAlt className="mr-3" />
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link
                        to="/admin/manageproduct"
                        className="flex items-center px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-700 transition-all duration-300"
                    >
                        <FaBox className="mr-3" />
                        Manage Products
                    </Link>
                </li>
                <li>
                    <Link
                        to="/admin/manageusers"
                        className="flex items-center px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-700 transition-all duration-300"
                    >
                        <FaUsers className="mr-3" />
                        Manage Users
                    </Link>
                </li>
                <li>
                    <Link
                        to="/admin/manageorders"
                        className="flex items-center px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-700 transition-all duration-300"
                    >
                        <FaShoppingCart className="mr-3" />
                        Manage Orders
                    </Link>
                </li>
                <li>
                    <Link
                        to="/admin/reports"
                        className="flex items-center px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-700 transition-all duration-300"
                    >
                        <FaChartBar className="mr-3" />
                        Reports
                    </Link>
                </li>
            </ul>

            {/* Footer (e.g., Logout Button) */}
            <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
                <button
                    className="flex items-center w-full px-4 py-2 text-sm font-medium rounded-lg hover:bg-red-700 transition-all duration-300"
                >
                    <FaSignOutAlt className="mr-3" />
                    Logout
                </button>
            </div>
        </div>
    );
};


export default AdminNavbar;
