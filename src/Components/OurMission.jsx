import React from "react";

const OurMission = () => {
  return (
   <section className="relative bg-[#113061] text-white py-16 px-6 md:px-20 m-15">
  <div className="absolute inset-0 z-0 bg-[url('pattern.jpg')] bg-cover bg-center opacity-10"></div>
  
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h4 className="text-gray-300 tracking-widest mb-4 flex items-center">
            <span className="w-8 h-[2px] bg-gray-400 mr-2"></span> OUR MISSION
          </h4>
            <div className="relative z-10 max-w-4xl mx-auto ">
  <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            At D Finance Capital, our mission is to drive financial market
            efficiency as the world's leading "bulge boutique" investment
            banking firm and asset manager, combining the capabilities of a
            bulge bracket institution with the personalized approach of a
            boutique financial services firm.
          </h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            We excel in alternative investments, emerging markets, and capital
            solutions, offering best-in-class fund management, investment
            banking, and OCIO services. Our commitment to delivering exceptional
            value extends beyond investment management to raising capital for
            companies and facilitating strategic transactions. By leveraging our
            expertise, innovation, and technology, we empower our clients to
            optimize their portfolios and achieve their financial goals.
          </p>
        </div>

        {/* Right Image */}
          <div className="relative w-94 h-74 left-1/5 mt-70">
        <div className="flex justify-center">
          <div className="absolute inset-0 transform rotate-45 overflow-hidden shadow-lg">
            <img
              src="glass_buildings.jpg"
              alt="Our Mission"
              className="rounded-lg shadow-lg"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
