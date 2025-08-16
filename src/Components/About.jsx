import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const About = () => {
  return (
    <>
    <section className="relative h-150 w-full py-60 px-6 md:px-12 bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50 bg-[url('pattern.jpg')] bg-cover bg-center"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto justify-center text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#113061] mb-6">
          Bridging the Gap from the DIFC
        </h2>
        <p className="text-gray-700 leading-relaxed mb-10">
          Strategically located in the Dubai International Financial Centre
          (DIFC), D Finance Capital’s mission is to drive financial market
          efficiency and deliver exceptional value by leveraging our expertise
          and innovation to optimize client portfolios and facilitate strategic
          transactions.
        </p>

        {/* CTA Link */}
        <a
          href="#"
          className="inline-flex items-center text-[#113061] uppercase font-semibold tracking-wider hover:underline"
        >
          Our Platform <IoIosArrowForward className="ml-2" />
        </a>
      </div>
    </section>
    <section className="relative bg-gray-100 py-10 px-6 md:px-16">

        <div className="absolute inset-0 z-0 opacity-50 bg-[url('pattern.jpg')] bg-cover bg-center"></div>


      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            About Us
          </p>
         <div className="relative z-10 max-w-4xl mx-auto p-4">
  <h2 className="text-2xl md:text-3xl font-bold text-[#113061] mb-6">
            D Finance Capital operates across two major business segments:
            investment banking advisory and fund management services. Each
            segment is designed to provide our clients with best-in-class
            financial services while adhering to our core values and commitment
            to market efficiency.
          </h2>
          </div>
          <a
            href="/about"
            className="text-blue-600 font-semibold hover:underline"
          >
            About Us
          </a>
        </div>

        {/* Right Content (diamond images) */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-64 h-64">
            {/* Big diamond */}
            <div className="absolute inset-0 transform rotate-45 overflow-hidden shadow-lg">
              <img
                src="glass_buildings.jpg"
                alt="Building 1"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Small bottom diamond */}
            <div className="absolute top-55  left-0 transform -translate-x-1/2 rotate-45 w-32 h-32 overflow-hidden shadow-md">
              <img
                src="buildings.jpg"
                alt="Building 2"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Small right diamond */}
            <div className="absolute top-75 right-[-50px] transform -translate-y-1/2 rotate-45 w-32 h-32 overflow-hidden shadow-md">
              <img
                src="office.jpg"
                alt="Building 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
