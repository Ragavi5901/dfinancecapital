import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 sm:py-12 px-4 sm:px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start sm:items-center text-center sm:text-left">
        {/* Logo & Info */}
        <div className="flex flex-col items-center sm:items-start">
          <img
            src="logo.png"
            alt="D Finance Capital"
            className="h-10 sm:h-12 mb-4"
          />
          <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
            By continuing to browse, use or access this Site, you accept the{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Privacy Policy
            </a>
            , out of your free will and consent. D Finance Capital Management
            Ltd is regulated by the Dubai Financial Services Authority (DFSA
            Ref. F002345).
          </p>
        </div>

        {/* Middle Info */}
        <div className="text-sm flex flex-col justify-center">
          <p>
            D Finance Capital Management Limited is part of{" "}
            <a href="#" className="text-blue-400 hover:underline">
              D Finance Group
            </a>
            .
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} D Finance Capital. All Rights Reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center sm:justify-end space-x-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl sm:text-2xl hover:text-blue-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl sm:text-2xl hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
