import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa"; // 👈 Added
import Hero from "./Components/Hero";
import OurMission from "./Components/OurMission";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import About from "./Components/About";
import Signup from "./Components/Signup";
import InvestHero from "./Components/investment/InvestHero";
import Navbar from "./Components/investment/Navbar";
import AboutSection from "./Components/investment/AboutSection";
import InvestmentBanking from "./Components/investment/InvestmentBanking";
import AIMgpSection from "./Components/investment/AIMgpSection";
import TeamSection from "./Components/investment/TeamSection";
import PersonalInfo from "./Components/investment/forms/PersonalInfo";
import LoanProgress from "./Components/investment/forms/LoanProgress";
import Wallet from "./Components/investment/forms/Wallet";
import Accountdetails from "./Components/investment/Accountdetails";
import ChangePassword from "./Components/investment/forms/ChangePassword";
import LoanForm from "./Components/investment/forms/loanform/LoanForm";
import AdminLayout from "./Components/Dashboard/AdminLayout";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import LoansList from "./Components/Dashboard/LoansList";
import UsersList from "./Components/Dashboard/UsersList";
import ProtectedAdminRoute from "./Components/Dashboard/ProtectedAdminRoute";

function App() {
  const menus = [
    { name: "Personal Info", path: "/personal-info" },
    { name: "Loan Progress", path: "/loan-progress" },
    { name: "Account Details", path: "/accountdetails" },
    { name: "Wallet", path: "/wallet" },
    { name: "Update Password", path: "/change-password" },
    
    { name: "Log Out", path: "/" },
  ];

  const [showLoanProgress, setShowLoanProgress] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <OurMission />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/investHero"
          element={
            <>
              <Navbar
                menus={menus}
                showLoanProgress={showLoanProgress}
                setShowLoanProgress={setShowLoanProgress}
              />
              <InvestHero />
              <AboutSection />
              <AIMgpSection />
              <InvestmentBanking />
              <TeamSection />
            </>
          }
        />

        {/* User Pages */}
        <Route path="/loanform" element={<LoanForm />} />
        <Route path="/personal-info" element={<PersonalInfo />} />
        <Route path="/loan-progress" element={<LoanProgress />} />
        <Route path="/accountdetails" element={<Accountdetails />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/change-password" element={<ChangePassword />} />

        {/* 🔒 Protected Admin Routes */}
        <Route element={<ProtectedAdminRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/loans" element={<LoansList />} />
            <Route path="/users" element={<UsersList />} />
          </Route>
        </Route>
      </Routes>

      {/* 📌 Floating WhatsApp & Email Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        {/* WhatsApp */}
        <a
          href="https://wa.me/971554083690"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <FaWhatsapp size={28} />
        </a>

        {/* Email */}
        <a
          href="mailto:info@dfinancecapital.org"
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <FaEnvelope size={28} />
        </a>
      </div>
    </Router>
  );
}

export default App;
