import React from "react";

const AIMgpSection = () => {
  return (
    <section className="relative bg-white text-left py-12 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl font-bold text-[#113061] mb-6">AIMgp</h2>

        {/* Intro paragraph */}
        <p className="text-gray-700 leading-relaxed mb-6">
          AIMgp Accelerator allows portfolio managers to maximise alpha
          generation with the Alternative Investment Management Global Platform
          (AIMgp), with a unique three-pillar approach of providing:
        </p>

        {/* Numbered list */}
        <ol className="list-decimal list-inside text-gray-800 font-medium space-y-2 mb-6">
          <li>Legal, regulatory and compliance infrastructure</li>
          <li>Institutional operational and technological infrastructure</li>
          <li>Capital introduction and asset raising network</li>
        </ol>

        {/* Body text */}
        <p className="text-gray-700 text-xl leading-relaxed mb-4">
          This provides a complete, fully integrated solution for hedge funds,
          private equity, venture capital and family offices to efficiently
          launch, manage and grow funds in a cost effective manner.
        </p>

        <p className="text-gray-700 text-xl leading-relaxed">
          At D Finance Capital, we believe the key to alpha generation is having
          an edge. This is the one consistent factor for outperforming managers
          across asset class, strategy and geographies. We are asset class,
          region and strategy agnostic and only work with those managers who can
          demonstrate a durable edge in their market or strategy. We specialize
          in the management of Hedge Funds, Private Equity Funds and Private
          Debt Funds.
        </p>
      </div>
    </section>
  );
};

export default AIMgpSection;
