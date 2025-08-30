import React, { useState, useEffect } from "react";
import { FaUser, FaIdCard, FaCreditCard } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../../Firebase/firebase"; 

const PersonalInfo = () => {
  const [openSection, setOpenSection] = useState(null);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Fetch user data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = auth.currentUser;
        if (!user) return;

        const docRef = doc(db, "users", user.uid); 
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("No user data found.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md">
        {/* Header with back button */}
        <div className="bg-[#0B2D5B] text-white py-3 px-4 flex items-center rounded-t-lg">
          <button onClick={() => navigate(-1)} className="mr-3">
            <IoArrowBack size={20} />
          </button>
          <span className="font-semibold">Personal Info</span>
        </div>

        {/* Dropdown Sections */}
        <div className="divide-y">
          {/* Basic Information */}
          <div>
            <div
              className="flex items-center justify-between p-4 cursor-pointer"
              onClick={() => toggleSection("basic")}
            >
              <div className="flex items-center">
                <FaUser className="text-[#0B2D5B] mr-3" />
                <span>Basic information</span>
              </div>
              <span>{openSection === "basic" ? "▲" : "▼"}</span>
            </div>
            {openSection === "basic" && (
              <div className="px-6 pb-4 text-sm text-gray-600">
                <p>Full Name: {userData.fullName || "-"}</p>
                <p>Emirates ID: {userData.emiratesId || "-"}</p>
                <p>Company Name: {userData.companyName || "-"}</p>
                <p>Occupation: {userData.occupation || "-"}</p>
                <p>Monthly Income: {userData.monthlyIncome || "-"}</p>
                <p>Full Address: {userData.address || "-"}</p>
                <p>Parents/Spouse Name: {userData.relativeName || "-"}</p>
                <p>Parents/Spouse Number: {userData.relativeNumber || "-"}</p>
                <p>Friend's Name: {userData.friendName || "-"}</p>
                <p>Friend's Number: {userData.friendNumber || "-"}</p>
              </div>
            )}
          </div>

          {/* Real Name Authentication */}
          <div>
            <div
              className="flex items-center justify-between p-4 cursor-pointer"
              onClick={() => toggleSection("realname")}
            >
              <div className="flex items-center">
                <FaIdCard className="text-[#0B2D5B] mr-3" />
                <span>Real name authentication</span>
              </div>
              <span>{openSection === "realname" ? "▲" : "▼"}</span>
            </div>
            {openSection === "realname" && (
              <div className="px-6 pb-4 text-sm text-gray-600">
                <p>Upload ID / Passport: {userData.idDocumentUrl ? <a href={userData.idDocumentUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View</a> : "-"}</p>
              </div>
            )}
          </div>

          {/* Bank Card Information */}
          <div>
            <div
              className="flex items-center justify-between p-4 cursor-pointer"
              onClick={() => toggleSection("bank")}
            >
              <div className="flex items-center">
                <FaCreditCard className="text-[#0B2D5B] mr-3" />
                <span>Bank card information</span>
              </div>
              <span>{openSection === "bank" ? "▲" : "▼"}</span>
            </div>
            {openSection === "bank" && (
              <div className="px-6 pb-4 text-sm text-gray-600">
                <p>Bank Name: {userData.bankName || "-"}</p>
                <p>Account Number: {userData.accountNumber || "-"}</p>
                <p>IBAN: {userData.iban || "-"}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
