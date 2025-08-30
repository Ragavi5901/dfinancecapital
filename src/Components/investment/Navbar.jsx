import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = ({ menus, showLoanProgress, setShowLoanProgress }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <header className="relative z-20 flex items-center justify-between px-6 py-4 bg-[#0a2540] text-white">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <img src="logo.png" alt="Logo" className="w-30 h-10 object-contain" />
      </div>

      {/* Middle: Buttons (hidden on mobile) */}
      <div className="hidden md:flex items-center space-x-4">
  <Link
    to="/loanform"
    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
  >
    Apply
  </Link>

</div>


      {/* Right: Hamburger Menu */}
      <button
        className="p-2 rounded-md bg-white/20"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Dropdown */}
      <div
        ref={menuRef}
        className={`absolute top-16 left-0 w-full bg-[#0a2540] text-white p-6 space-y-4 z-30 transform transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        {menus?.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className="block hover:text-blue-400 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}

        
      </div>
    </header>
  );
};

export default Navbar;
