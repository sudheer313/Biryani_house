import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-indigo-600 w-64 min-h-screen flex flex-col justify-between py-8 px-4 fixed left-0 top-0">
      <div>
        <div className="mb-10">
          <h1 className="text-3xl text-white font-bold">Restaurant Name</h1>
        </div>
        <ul>
          <li className="mb-6">
            <Link to="/" className="text-white text-xl hover:text-indigo-300">
              Home
            </Link>
          </li>
          <li className="mb-6">
            <Link to="/menu" className="text-white text-xl hover:text-indigo-300">
              Menu
            </Link>
          </li>
          <li className="mb-6">
            <Link to="/about" className="text-white text-xl hover:text-indigo-300">
              About
            </Link>
          </li>
          <li className="mb-6">
            <Link to="/contact" className="text-white text-xl hover:text-indigo-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-white text-sm">&copy; 2023 Restaurant Name</p>
      </div>
    </nav>
  );
};

export default Navbar;
