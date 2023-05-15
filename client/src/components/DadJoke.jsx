import React, { useState } from "react";
import axios from "axios";

function DadJoke() {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    try {
      const response = await axios.get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      setJoke(response.data.joke);
    } catch (error) {
      console.log("Error fetching joke:", error);
    }
  };

  return (
    <div className="dad-joke">
      <h2 className="dad-joke-heading">Dad Joke</h2>
      <button onClick={fetchJoke} className="dad-joke-button">
        Click for Dad Joke
      </button>
      {joke && <p className="dad-joke-content">{joke}</p>}
    </div>
  );
}

export default DadJoke;
