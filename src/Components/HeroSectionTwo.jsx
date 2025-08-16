import React from "react";

const HeroSectionTwo = () => {
  return (
    <section className="font-sans relative w-full bg-gray-100 -mt-24">
      <div className="container mx-auto grid md:grid-cols-2  items-stretch py-16 px-6 md:px-12">
        
        {/* Left Side (Blue Box) */}
        <div className="bg-[#113061] text-white p-10 relative">
          {/* Overlay pattern (diamonds) */}
          <div className="absolute inset-0 opacity-10 bg-[url('/image/pattern.png')] bg-cover bg-center"></div>

          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed">
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
  );
};

export default HeroSectionTwo;
