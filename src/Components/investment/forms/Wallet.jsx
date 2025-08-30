import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const Wallet = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        {/* Header with back arrow */}
        <div className="bg-[#0B2D5B] text-white py-3 rounded-t-lg font-semibold mb-6 flex items-center">
          <IoArrowBack
            className="text-xl cursor-pointer mr-3"
            onClick={() => navigate(-1)}
          />
          Wallet
        </div>

        <div className="text-center">
          <div className="text-gray-700 text-lg mb-2">Total amount</div>
          <div className="text-4xl font-bold mb-6">0</div>
          <input
            type="text"
            placeholder="Please enter the bank OTP"
            className="border p-3 w-full rounded mb-6 focus:outline-none focus:ring-2 focus:ring-[#0B2D5B]"
          />
          <button className="bg-[#0B2D5B] text-white w-full py-3 rounded hover:bg-[#0a264d] transition">
            Withdrawal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
