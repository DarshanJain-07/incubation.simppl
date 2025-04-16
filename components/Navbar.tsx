import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 border-b border-gray-200">
      {/* Logo */}
      <div className="font-bold text-xl text-gray-800">SimPPL</div>

      {/* Right side group: Links + Button */}
      <div className="flex items-center space-x-8">
        {/* Nav Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Research</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Careers</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Team</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Newsletters</a>
        </div>

        {/* Get in Touch Button */}
        <button className="bg-white text-gray-700 border border-gray-300 rounded-full py-2 px-5 text-sm font-medium hover:bg-gray-50">
          Get in Touch
        </button>
      </div>

      {/* TODO: Add mobile menu button and functionality if needed */}
    </nav>
  );
};

export default Navbar;
