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

import { React, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
// import { useGoogleScript } from "gapi-script";

const clientId =
  "815051058611-opnbo140tojg1rpru10oklii8ohmnaa0.apps.googleusercontent.com";

const Welcome = (setLoggedIn) => {
  // Load the Google Sign-In API script
  // useGapiScript();

  const loadGoogleScript = async () => {
    const scriptId = "google-api-script";

    // Check if the script is already loaded
    if (document.getElementById(scriptId)) {
      return;
    }

    // Load the Google API script
    await window.gapi.load("client:auth2");

    // Insert the script tag dynamically
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://apis.google.com/js/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  };

  useEffect(() => {
    loadGoogleScript();
  }, []);

  const handleGoogleLogin = (response) => {
    // Handle successful login/signup with Google
    console.log(response);
  };

  const handleGoogleFailure = (error) => {
    // Handle Google login/signup failure
    console.error(error);
  };

  const onSuccess = (res) => {
    console.log("Login Successful!!! Current User: ", res.profileObj);
    setLoggedIn(true);
  };
  const onFailure = (res) => {
    console.log("Login Failed!!! Current User: ", res);
  };

  return (
    <div className="welcome">
      <h1 className="welcome__heading">Welcome to clg-api-project</h1>
      <div className="welcome__buttons">
        {/* <button className="welcome__button">Login</button>
        <button className="welcome__button">Signup</button> */}

        <GoogleLogin
          clientId={clientId}
          buttonText="Login with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy="single_host_origin"
          isSignedIn={true}
        />
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign Up with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy="single_host_origin"
        />
      </div>
    </div>
  );
};

export default Welcome;
