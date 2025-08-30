import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import bcrypt from "bcryptjs"; // ✅ compare hashed passwords

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");

    if (!phone || !password) {
      setError("Please enter both phone number and password.");
      return;
    }

    try {
      // 🔍 Search Firestore for matching phone
      const q = query(collection(db, "users"), where("phone", "==", phone));
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        setError("Phone number not found.");
        return;
      }

      const userData = snapshot.docs[0].data();

      // ✅ Compare entered password with hashed one
      const isMatch = await bcrypt.compare(password, userData.password);
      if (!isMatch) {
        setError("Incorrect password.");
        return;
      }

      // 🗂️ Store user session
      localStorage.setItem("user", JSON.stringify(userData));

      // 🚀 Redirect based on role
      if (userData.role === "admin" || userData.role === "super-admin") {
        navigate("/dashboard");
      } else {
        navigate("/investHero");
      }
    } catch (err) {
      setError("Error logging in. Please try again.");
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

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login</h2>

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

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full flex items-center justify-center bg-white border-2 border-black text-black font-medium py-2 rounded-full hover:bg-black hover:text-white transition"
        >
          Login <span className="ml-2">→</span>
        </button>

        {/* Sign up */}
        <div className="text-end text-gray-500 mt-6 text-sm">
          <Link
            to="/signup"
            className="flex items-end font-bold hover:text-yellow-400 transition"
          >
            Sign up <IoIosArrowForward className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
