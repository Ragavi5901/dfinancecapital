import React from "react";
import { FaUser, FaLock } from "react-icons/fa";

import { IoIosArrowForward  } from "react-icons/io"; 
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-900">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('Hero.webp')" }} // replace with your bg
      ></div>

      {/* Overlay (blue gradient) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/90"></div>

      {/* Login Card */}
      <div className="relative z-10 bg-white rounded-lg shadow-lg p-10 w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <img src="logo.png" alt="Logo" className="h-12" />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login</h2>

        {/* Phone number input */}
        <div className="flex items-center border-b border-gray-300 mb-6">
          <FaUser className="text-gray-500 mr-3" />
          <input
            type="text"
            placeholder="Please input your phone number"
            className="w-full py-2 focus:outline-none"
          />
        </div>

        {/* Password input */}
        <div className="flex items-center border-b border-gray-300 mb-6">
          <FaLock className="text-gray-500 mr-3" />
          <input
            type="password"
            placeholder="Please input a password"
            className="w-full py-2 focus:outline-none"
          />
        </div>

        {/* Remember Me */}
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center text-gray-600 text-sm">
            <input type="checkbox" className="mr-2" />
            Remember Me
          </label>
        </div>

        {/* Login Button */}
        <button className="w-full flex items-center justify-center bg-white border-2 border-black text-black font-medium py-2 rounded-full hover:bg-black hover:text-white transition">
          Login <span className="ml-2">→</span>
        </button>

        {/* Sign up link */}
        <div className="text-end text-gray-500 mt-6 text-sm">
         
          <Link
          to="/signup"
         className="flex items-end  font-bold hover:text-yellow-400 transition"
      
        >  Sign up <IoIosArrowForward className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
