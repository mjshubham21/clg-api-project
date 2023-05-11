import React, { useEffect } from "react";
import ToDo from "./ToDo";
import Weather from "./Weather";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./About";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <ToDo />
      <Weather />
      <About />
    </>
  );
}

export default App;
