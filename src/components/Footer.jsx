import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-sm">
                    &copy; 2024 E-Cart. All rights reserved.
                </p>
                <div className="mt-4 space-x-6">
                    <a href="/about" className="text-gray-400 hover:text-gray-300">About Us</a>
                    <a href="/privacy" className="text-gray-400 hover:text-gray-300">Privacy Policy</a>
                    <a href="/terms" className="text-gray-400 hover:text-gray-300">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;