import React from "react";

export const Header = () => {
  return (
    <div className="flex items-center justify-between top-0 px-40 p-4 bg-background">
      <div className="flex items-center">
        <a href="/" className="text-xl font-bold text-gray-800">
        <img src="/logo.png" alt="logo" className="w-25 h-10"/>
        </a>
        <ul className="flex ml-8 space-x-6">
          <li>
            <a href="/" className="text-gray-800 font-bold hover:text-gray-600">
              Home
            </a>
          </li>
          <li>
            <a href="/find-doctors" className="text-green font-bold hover:text-gray-600">
              Find Doctors
            </a>
          </li>
          <li>
            <a href="/about-us" className="text-gray-800 font-bold hover:text-gray-600">
              About Us
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <button className="px-4 py-2 text-black bg-background border border-green rounded-md mr-4">
          Login
        </button>
        <button className="px-4 py-2 text-white bg-green rounded-md">
          Register
        </button>
      </div>
    </div>
  );
};
