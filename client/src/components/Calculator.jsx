import React, { useState, useEffect } from "react";

function Calculator() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");

  const handleNumberClick = (number) => {
    setInput((prevInput) => prevInput + number);
  };

  const handleOperatorClick = (operator) => {
    if (input !== "") {
      setInput((prevInput) => prevInput + operator);
    }
  };

  const handleClearClick = () => {
    setInput("");
    setResult(0);
  };

  const handleCalculate = () => {
    setResult(eval(input));
    setInput("");
  };

  const handleKeyPress = (event) => {
    const key = event.key;
    if (key === "Enter") {
      handleCal();
    } else if (key === "Backspace") {
      handleDelete();
    } else if (/[0-9+\-*/.=]/.test(key)) {
      handleButtonClick(key);
    }
  };

  const handleButtonClick = (value) => {
    // Handle the button click logic here
    setInput((prevInput) => prevInput + value);
  };

  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleCal = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="calculator">
      <h2 className="calculator-heading">Calculator</h2>
      <div className="calculator-input">{input}</div>
      <div className="calculator-buttons">
        <div className="calculator-row">
          <button onClick={() => handleNumberClick("7")}>7</button>
          <button onClick={() => handleNumberClick("8")}>8</button>
          <button onClick={() => handleNumberClick("9")}>9</button>
          <button onClick={() => handleOperatorClick("/")}>/</button>
        </div>
        <div className="calculator-row">
          <button onClick={() => handleNumberClick("4")}>4</button>
          <button onClick={() => handleNumberClick("5")}>5</button>
          <button onClick={() => handleNumberClick("6")}>6</button>
          <button onClick={() => handleOperatorClick("*")}>*</button>
        </div>
        <div className="calculator-row">
          <button onClick={() => handleNumberClick("1")}>1</button>
          <button onClick={() => handleNumberClick("2")}>2</button>
          <button onClick={() => handleNumberClick("3")}>3</button>
          <button onClick={() => handleOperatorClick("-")}>-</button>
        </div>
        <div className="calculator-row">
          <button onClick={() => handleNumberClick("0")}>0</button>
          <button onClick={() => handleOperatorClick("+")}>+</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={handleClearClick}>C</button>
        </div>
      </div>
      <div className="calculator-result">Result: {result}</div>
    </div>
  );
}

export default Calculator;
