import React from "react";
import { User, Lock } from "lucide-react";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#d9d9d9] to-[#113061]">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg flex">
        {/* Left side background */}
        <div
          className="hidden md:block w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Hero.jpg')", 
          }}
        ></div>

        {/* Right side form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center relative">
          {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <img src="logo.png" alt="Logo" className="h-12" />
        </div>

          {/* Phone Number */}
          <div className="mb-6">
            <div className="flex items-center border-b border-gray-400">
              <User className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Please input your phone number"
                className="w-full py-2 bg-transparent outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <div className="flex items-center border-b border-gray-400">
              <Lock className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="password"
                placeholder="Please input a password"
                className="w-full py-2 bg-transparent outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Button */}
          <button className="w-full py-3 bg-white border border-gray-400 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition">
            Sign up <span className="ml-1">→</span>
          </button>

          {/* Footer text */}
          <p className="mt-6 text-center text-gray-500">
            I have an account{" "}
            <a href="/login" className="text-blue-600 font-medium">
              To login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
