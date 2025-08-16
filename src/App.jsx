import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import HeroSectionTwo from "./Components/HeroSectionTwo";
import OurMission from "./Components/OurMission";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import About from "./Components/About";
import Signup from "./Components/Signup";

function App() {
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
      </Routes>
    </Router>
  );
}

export default App;
