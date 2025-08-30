import React from "react";

const AboutSection = () => {
  return (
    <section className="relative bg-white text-center py-16 px-30  ">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/pattern1.jpg')] bg-center bg-cover opacity-10 pointer-events-none"></div>

      <div className="relative max-w-2xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl font-bold text-[#113061] mb-6">
          D Finance Capital
        </h2>

        {/* Paragraph */}
        <p className="text-gray-700 text-xl leading-relaxed mb-4">
          D Finance Capital is a global alternative investment platform and
          accelerator focused on alpha generating strategies with an inherent
          edge in emerging investment strategies and markets.
        </p>
        <p className="text-gray-700 text-xl leading-relaxed">
          Established in 2011 and headquartered in the Dubai International
          Financial Centre, D Finance Capital’s goal is to identify the next
          generation of alpha generating ‘edge’ fund managers, strategies and
          opportunities.
        </p>

        {/* Diamond Image Section */}
        <div className="mt-20 mb-32 flex justify-center">
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
      </div>
    </section>
  );
};

export default AboutSection;
