import React from "react";

const InvestHero = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('Hero.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-[80vh] px-6">
        <h2 className="text-3xl md:text-5xl font-bold">
          D Finance Capital Investment Group
        </h2>
        <p className="mt-4 text-lg md:text-2xl font-semibold">
          HELPS PIERRE GASLY BUILD HIS FINANCIAL FUTURE
        </p>
      </div>
    </div>
  );
};

export default InvestHero;
