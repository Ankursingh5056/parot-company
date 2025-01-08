import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left Section */}
          <div>
            <p className="text-sm">© 2025 Your Company Name. All rights reserved.</p>
          </div>
          
          {/* Right Section (Optional links or social icons) */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
