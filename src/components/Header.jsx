import React, { useState } from "react";
import { Hamburger } from "../icons";
import { NavLink } from "react-router-dom";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="px-4 sm:w-full py-3 bg-background lg:px-40 lg:py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="text-xl font-bold text-gray-800">
              <img src="/logo.png" alt="logo" className="w-25 h-10" />
            </NavLink>
            <button
              onClick={toggleMenu}
              className="block float-right lg:hidden ml-4 text-gray-800 focus:outline-none"
            >
              <Hamburger />
            </button>
          </div>

          {/* large screen  */}
          <ul className="hidden lg:flex lg:ml-8 lg:space-x-6">
            <li>
              <NavLink
                to="/"
                className="text-gray-800 font-bold hover:text-gray-600"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/find-doctors"
                className="text-green font-bold hover:text-gray-600"
              >
                Find Doctors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className="text-gray-800 font-bold hover:text-gray-600"
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* small screens */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-0 right-0 bg-white w-38 mt-12 rounded-md shadow-md flex flex-col items-center gap-2">
            <ul className="py-2 px-4">
              <li>
                <NavLink
                  to="/"
                  className="block text-gray-800 font-bold hover:text-gray-600"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/find-doctors"
                  className="block text-green font-bold hover:text-gray-600"
                >
                  Find Doctors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className="block text-gray-800 font-bold hover:text-gray-600"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className="block text-gray-800 font-extrabold underline hover:text-gray-600"
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className="block text-gray-800 font-extrabold underline hover:text-gray-600"
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        )}

        <div className="hidden lg:flex items-center">
          <NavLink to="/login" className="px-4 py-2 text-black bg-background border border-green rounded-md mr-4">
            Login
          </NavLink>
          <NavLink to="/register" className="px-4 py-2 text-white bg-green rounded-md">
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};
