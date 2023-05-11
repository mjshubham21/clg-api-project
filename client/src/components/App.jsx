import React, { useEffect } from "react";
import ToDo from "./ToDo";
import Weather from "./Weather";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./About";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <Router>
      <Navbar />
      <Welcome />
      <Routes>
        <Route path="/" element={<ToDo />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
