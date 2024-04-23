import React, { useState } from "react";
import { Hamburger } from "../icons";
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
            <a href="/" className="text-xl font-bold text-gray-800">
              <img src="/logo.png" alt="logo" className="w-25 h-10" />
            </a>
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
              <a
                href="/"
                className="text-gray-800 font-bold hover:text-gray-600"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/find-doctors"
                className="text-green font-bold hover:text-gray-600"
              >
                Find Doctors
              </a>
            </li>
            <li>
              <a
                href="/about-us"
                className="text-gray-800 font-bold hover:text-gray-600"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* small screens */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-0 right-0 bg-white w-38 mt-12 rounded-md shadow-md flex flex-col items-center gap-2">
            <ul className="py-2 px-4">
              <li>
                <a
                  href="/"
                  className="block text-gray-800 font-bold hover:text-gray-600"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/find-doctors"
                  className="block text-green font-bold hover:text-gray-600"
                >
                  Find Doctors
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="block text-gray-800 font-bold hover:text-gray-600"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="block text-gray-800 font-extrabold underline hover:text-gray-600"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/register"
                  className="block text-gray-800 font-extrabold underline hover:text-gray-600"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
        )}

        <div className="hidden lg:flex items-center">
          <button className="px-4 py-2 text-black bg-background border border-green rounded-md mr-4">
            Login
          </button>
          <button className="px-4 py-2 text-white bg-green rounded-md">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
