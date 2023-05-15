//  chatgpt code:
// import React, { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import ToDo from "./ToDo";
// import Weather from "./Weather";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import About from "./About";
// import Navbar from "./Navbar";
// import Welcome from "./Welcome";
// import Login from "./Login";
// import Signup from "./Signup";

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);

//   useEffect(() => {
//     AOS.init({
//       duration: 2000,
//     });
//   }, []);

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Welcome setLoggedIn={setLoggedIn} />} />
//         <Route
//           path="/todos"
//           element={loggedIn ? <ToDo /> : <Navigate to="/" />}
//         />
//         <Route
//           path="/weather"
//           element={loggedIn ? <Weather /> : <Navigate to="/" />}
//         />
//         <Route path="/about" element={<About />} />
//         <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
//         <Route path="/signup" element={<Signup setLoggedIn={setLoggedIn} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToDo from "./ToDo";
import Weather from "./Weather";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./About";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Mern from "./Mern";
// import { gapi } from "gapi-script";
import Vite from "./Vite";
import DadJoke from "./DadJoke";
// const clientId =
//   "815051058611-opnbo140tojg1rpru10oklii8ohmnaa0.apps.googleusercontent.com";

function App() {
  // const [isLoggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: "",
  //     });
  //   }

  //   gapi.load("client:auth2", start);
  // });

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ToDo />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/mern" element={<Mern />} />
        <Route path="/vite" element={<Vite />} />
        <Route path="/dad" element={<DadJoke />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
