import React from "react";

const TeamSection = () => {
  return (
    <section className="bg-[#0B2D5B] text-white py-16 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* Subtitle */}
        <p className="text-xs uppercase tracking-widest text-gray-300 mb-2">
          — Our Team
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Team</h2>

        {/* Description */}
        <p className="text-sm md:text-base leading-relaxed text-gray-300 max-w-3xl mx-auto">
          D Finance Capital comes from a pedigree of hedge fund management with over 250 years of
          combined professional asset management industry experience and represents the next
          generation of managers with an integrated global infrastructure, cutting edge technology
          and cost effective solution.
        </p>
      </div>

      {/* Diamond Image */}
      <div className="mt-12 flex justify-center">
        <div className="rotate-45 w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-xl shadow-lg">
          <img
            src="/office.jpg"
            alt="Team"
            className="-rotate-45 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
