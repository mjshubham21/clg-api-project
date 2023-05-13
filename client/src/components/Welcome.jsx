// import React from "react";
// import { Link, Routes, Route } from "react-router-dom";
// import Login from "./Login";
// import Signup from "./Signup";

// const Welcome = ({ setLoggedIn }) => {
//   return (
//     <div className="welcome-container">
//       <h1>Welcome to clg-api-project</h1>
//       <div className="button-container">
//         <Link to="/login" className="button">
//           Login
//         </Link>
//         <Link to="/signup" className="button signup">
//           Signup
//         </Link>
//       </div>
//       {/* Render the Login and Signup components based on the route */}
//       <Routes>
//         <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </div>
//   );
// };

// export default Welcome;

import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome">
      <h1 className="welcome__heading">Welcome to clg-api-project</h1>
      <div className="welcome__buttons">
        <button className="welcome__button">Login</button>
        <button className="welcome__button">Signup</button>
      </div>
    </div>
  );
};

export default Welcome;
