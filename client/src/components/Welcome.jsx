import React from "react";

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
