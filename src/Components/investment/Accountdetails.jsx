import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

function Accountdetails() {
  const navigate = useNavigate();
  const [selectedBank, setSelectedBank] = useState("");

  const banks = [
    "ADCB",
    "ADIB",
    "Al Maryah Bank",
    "Commercial Bank",
    "DIB",
    "ENBD",
    "FAB",
    "Mashreq",
    "Wio"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Bank:", selectedBank);
    // You can send selectedBank to backend or handle further logic here
  };

  return (
    <div className="bg-white h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        
        {/* Header with back arrow */}
        <div className="bg-[#0B2D5B] text-white py-3 rounded-t-lg font-semibold mb-6 flex items-center">
          <IoArrowBack
            className="text-xl cursor-pointer mr-3"
            onClick={() => navigate(-1)}
          />
          Account Details
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Bank
            </label>
            <select
              value={selectedBank}
              onChange={(e) => setSelectedBank(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0B2D5B]"
              required
            >
              <option value="">-- Select Bank --</option>
              {banks.map((bank, index) => (
                <option key={index} value={bank}>
                  {bank}
                </option>
              ))}
            </select>
          </div>

          {/* Submit button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#0B2D5B] text-white w-full py-3 rounded hover:bg-[#0a264d] transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Accountdetails;
