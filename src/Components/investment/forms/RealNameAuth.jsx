import React from "react";
import { FaIdCard } from "react-icons/fa";

const RealNameAuth = () => {
  const fields = ["ID Front", "ID Back", "ID Hand Hold Selfie"];

  return (
    <div className="bg-white">
      <div className="flex items-center p-4 border-b">
        <FaIdCard className="text-[#0B2D5B] mr-3" />
        <span className="font-medium">Real name authentication</span>
      </div>
      {fields.map((field, i) => (
        <div key={i} className="p-4 border-b text-gray-800">
          {field}
        </div>
      ))}
    </div>
  );
};

export default RealNameAuth;
