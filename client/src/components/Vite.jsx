import React from "react";
import vite from "../assets/vite.png";

function Vite() {
  return (
    <div className="vite-info">
      <h2 className="vite-heading">Vite</h2>
      <div className="vite-description">
        <p>
          Vite is a build tool that significantly improves the development
          experience for modern web projects.
        </p>
        <p>
          It provides fast development server, instant hot module replacement
          (HMR), and optimized building for production.
        </p>
      </div>
      <div className="vite-advantages">
        <h3>Advantages of Vite for ReactJS:</h3>
        <ul>
          <li>Lightning-fast startup</li>
          <li>Instantaneous hot module replacement (HMR)</li>
          <li>Efficient module bundling and tree shaking</li>
          <li>On-demand compilation and lazy loading</li>
          <li>Optimized build for production</li>
          <li>Support for TypeScript and JSX out of the box</li>
          <li>Simple configuration with minimal boilerplate</li>
          <li>Flexible plugin system for customization</li>
          <li>Developer-friendly error reporting</li>
        </ul>
      </div>
      <div className="vite-logos">
        <img src={vite} alt="Vite Logo" className="logo" />
      </div>
    </div>
  );
}

export default Vite;
