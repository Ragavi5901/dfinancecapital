import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import bcrypt from "bcryptjs"; 
import { v4 as uuidv4 } from "uuid"; 

const Signup = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    setError("");

    if (!phone || !password) {
      setError("Please enter phone number and password.");
      return;
    }

    try {
      // ✅ Generate unique UID
      const uid = uuidv4();

      // ✅ Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      await setDoc(doc(db, "users", uid), {
        uid: uid,
        phone: phone,
        password: hashedPassword,
        role: "user",          // 👈 Normal users only
        createdAt: new Date(),
      });

      navigate("/login");
    } catch (err) {
      setError("Error signing up. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-900">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('Hero.webp')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/90"></div>

      {/* Card */}
      <div className="relative z-10 bg-white rounded-lg shadow-lg p-10 w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <img src="logo.png" alt="Logo" className="h-12" />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign Up</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Phone */}
        <div className="flex items-center border-b border-gray-300 mb-6">
          <FaUser className="text-gray-500 mr-3" />
          <input
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full py-2 focus:outline-none"
          />
        </div>

        {/* Password */}
        <div className="flex items-center border-b border-gray-300 mb-6">
          <FaLock className="text-gray-500 mr-3" />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full py-2 focus:outline-none"
          />
        </div>

        {/* Signup Button */}
        <button
          onClick={handleSignup}
          className="w-full bg-white border-2 border-black text-black font-medium py-2 rounded-full hover:bg-black hover:text-white transition"
        >
          Sign Up
        </button>

        {/* Link to Login */}
        <div className="text-end text-gray-500 mt-6 text-sm">
          <Link
            to="/login"
            className="flex items-end font-bold hover:text-yellow-400 transition"
          >
            Log In <IoIosArrowForward className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
