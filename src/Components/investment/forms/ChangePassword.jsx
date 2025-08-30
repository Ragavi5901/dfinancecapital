import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const ChangePassword = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        {/* Header with Back Arrow */}
        <div className="bg-[#0B2D5B] text-white py-3 rounded-t-lg font-semibold mb-6 flex items-center">
          <IoArrowBack
            className="text-xl cursor-pointer mr-3"
            onClick={() => navigate(-1)}
          />
          Change Password
        </div>

        {/* Form */}
        <input
          type="password"
          placeholder="Please enter the old password"
          className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-[#0B2D5B]"
        />
        <input
          type="password"
          placeholder="Please enter the new password"
          className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-[#0B2D5B]"
        />
        <input
          type="password"
          placeholder="Please confirm the new password"
          className="border p-3 w-full mb-6 rounded focus:outline-none focus:ring-2 focus:ring-[#0B2D5B]"
        />
        <button className="bg-[#0B2D5B] text-white w-full py-3 rounded hover:bg-[#0a264d] transition">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
