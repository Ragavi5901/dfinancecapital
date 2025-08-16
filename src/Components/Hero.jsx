import React from "react";
import { IoIosArrowForward  } from "react-icons/io"; 
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-gray-900 text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('Hero.webp')" }} 
      ></div>

      {/* Overlay for darker shade */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center px-8 py-6">
        {/* Logo + Title */}
        <div className="flex items-center space-x-2">
          
          <img
            src="logo.png"
            alt="Logo"
            className="w-50 h-30 object-contain "
          />
         
        </div>

        {/* Login Button */}
     <Link
          to="/login"
          className="flex items-center text-white font-bold hover:text-yellow-400 transition"
        >
          LOGIN <IoIosArrowForward className="ml-2" />
        </Link>

      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          Enhancing Financial Market Efficiency
        </h2>
      </div>
      <section className="font-sans relative w-full  mt-40 z-2">
      <div className="container mx-auto grid md:grid-cols-2  items-stretch py-16 px-6 md:px-12">
        
        {/* Left Side (Blue Box) */}
        <div className="bg-[#113061]  text-white p-10 relative">
          {/* Overlay pattern (diamonds) */}
          <div className="absolute inset-0 opacity-10 bg-[url('pattern.jpg')] bg-cover bg-center"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-3xl font-semibold leading-relaxed p-4">
              D Finance Capital unveils "Cap-Intro" service to offer investors
              access to premier alternative investments
            </h2>
          </div>
        </div>

        {/* Right Side (White with text links) */}
        <div className="bg-white flex flex-col justify-center items-start p-10 relative">
          {/* Overlay pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('/image/pattern.png')] bg-contain bg-repeat"></div>

          <div className="relative z-10 flex flex-col space-y-8">
            <a
              href="#"
              className="text-blue-900 uppercase font-semibold tracking-wide hover:underline"
            >
              Find out more &gt;
            </a>
            <a
              href="#"
              className="text-blue-900 uppercase font-semibold tracking-wide hover:underline"
            >
              Request a callback &gt;
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Hero;
