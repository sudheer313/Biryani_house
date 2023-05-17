import React from "react";
import { Link } from "react-router-dom";
import "../styles/tailwind.css";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-teal-500 p-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white font-semibold text-xl tracking-tight ">
          Biryani House
        </Link>
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
          <Link to="/contact" className="text-white hover:text-teal-200">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
