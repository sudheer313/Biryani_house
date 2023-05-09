import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-indigo-600 p-4">
      <div className="container mx-auto">
        <ul className="flex">
          <li className="mr-6">
            <Link
              to="/"
              className="text-white font-semibold hover:text-indigo-300"
            >
              Home
            </Link>
          </li>
          <li className="mr-6">
            <Link
              to="/menu"
              className="text-white font-semibold hover:text-indigo-300"
            >
              Menu
            </Link>
          </li>
          <li className="mr-6">
            <Link
              to="/about"
              className="text-white font-semibold hover:text-indigo-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white font-semibold hover:text-indigo-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
