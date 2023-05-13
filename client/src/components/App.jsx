// import React, { useEffect } from "react";
// import ToDo from "./ToDo";
// import Weather from "./Weather";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import About from "./About";
// import Navbar from "./Navbar";
// import Welcome from "./Welcome";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   useEffect(() => {
//     AOS.init({
//       duration: 2000,
//     });
//   }, []);
//   return (
//     <Router>
//       <Navbar />
//       <Welcome />
//       <Routes>
//         <Route path="/" element={<ToDo />} />
//         <Route path="/weather" element={<Weather />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Router>
//   );
// }
// export default App;
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
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToDo from "./ToDo";
import Weather from "./Weather";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./About";
import Navbar from "./Navbar";

function App() {
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
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
