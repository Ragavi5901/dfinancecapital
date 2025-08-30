import React from "react";
import { IoArrowBack } from "react-icons/io5";

import { useNavigate } from "react-router-dom";

const LoanProgress = () => {
      const navigate = useNavigate();
  const loanDetails = [
    { label: "Order No", value: "1118815361987383296" },
    { label: "Name", value: "" },
    { label: "Amount", value: "10000" },
    { label: "Months", value: "24 Months" },
    { label: "Monthly supply", value: "467" },
    { label: "Application time", value: "2025-08-22 15:49:39" },
    { label: "Loan Type", value: "Personal loan (0.5%)" },
  ];

  return (
   <div className="bg-white h-screen flex items-center justify-center px-6">
         <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
           {/* Header with Back Arrow */}
           <div className="bg-[#0B2D5B] text-white py-3 rounded-t-lg font-semibold mb-6 flex items-center">
                   <button
          onClick={() => navigate(-1)}
          className="ml-3 mr-4 text-white text-xl"
        >
          <IoArrowBack />
        </button>
              <h1 className="flex-1 text-center font-semibold">Loan Progress</h1>
      </div>

      {/* Form Container */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-6 w-full max-w-md">
        {loanDetails.map((item, index) => (
          <div key={index} className="flex justify-between border-b py-2">
            <span className="font-medium">{item.label}</span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default LoanProgress;
