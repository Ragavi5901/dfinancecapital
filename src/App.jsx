import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import HeroSectionTwo from "./Components/HeroSectionTwo";
import OurMission from "./Components/OurMission";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import About from "./Components/About";

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
      </Routes>
    </Router>
  );
}

export default App;
