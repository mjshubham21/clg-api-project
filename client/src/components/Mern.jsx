import React from "react";
import mongo from "../assets/mongo.png";
import expressjs from "../assets/express.png";
import react from "../assets/react.png";
import node from "../assets/node.png";

function Mern() {
  return (
    <div className="mern-info">
      <h2 className="mern-heading">MERN Stack</h2>
      <div className="mern-description">
        <p>
          The MERN stack is a JavaScript-based technology stack used for
          building modern web applications. It consists of the following
          technologies:
        </p>
      </div>
      <div className="technology">
        <div className="technology-info">
          <img src={mongo} alt="MongoDB Logo" className="logo" />
          <h3>MongoDB</h3>
          <p>
            MongoDB is a NoSQL database that provides high scalability and
            flexibility for storing and managing data in a JSON-like format.
          </p>
        </div>
        <div className="technology-info">
          <img src={expressjs} alt="Express Logo" className="logo" />
          <h3>Express</h3>
          <p>
            Express is a minimalist web application framework for Node.js. It
            provides a simple and flexible way to handle HTTP requests and build
            APIs for your application.
          </p>
        </div>
        <div className="technology-info">
          <img src={react} alt="React Logo" className="logo" />
          <h3>React</h3>
          <p>
            React is a JavaScript library for building user interfaces. It
            allows you to create reusable UI components and efficiently update
            the user interface based on data changes.
          </p>
        </div>
        <div className="technology-info">
          <img src={node} alt="Node.js Logo" className="logo" />
          <h3>Node.js</h3>
          <p>
            Node.js is a JavaScript runtime environment that allows you to run
            JavaScript on the server-side. It provides a powerful set of
            libraries and tools for building scalable and efficient web
            applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mern;
