import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-teal-500 p-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-semibold text-xl tracking-tight">Biryani House</div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-teal-200">
            Home
          </Link>
          <Link to="/menu" className="text-white hover:text-teal-200">
            Menu
          </Link>
          <Link to="/about" className="text-white hover:text-teal-200">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
