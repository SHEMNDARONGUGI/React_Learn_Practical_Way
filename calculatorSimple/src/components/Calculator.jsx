import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleAdd = () => {
    setResult((num1 + num2).toFixed(4));
  };
  const handleSubtract = () => {
    setResult((num1 - num2).toFixed(4));
  };
  const handleMultiplication = () => {
    setResult((num1 * num2).toFixed(4));
  };
  const handleDivision = () => {
    if (num2 === 0) return alert(`Division by ${num2} is not allowed`);
    setResult((num1 / num2).toFixed(4));
  };

  const handleClear = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  return (
    <div
      style={{
        margin: "auto",
        width: "70%",
        backgroundColor: "darkblue",
        padding: "5px",
      }}
    >
      <h1 style={{ textAlign: "center", color: "yellow" }}>
        My Calculator App
      </h1>
      <div style={{ textAlign: "center", color: "white" }}>
        <label>
          Input first Number:
          <input
            type="number"
            style={{ margin: "20px" }}
            value={num1}
            onChange={(e) => setNum1(Number(e.target.value))}
          />
        </label>{" "}
        <br />
        <label>
          Input second Number:
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(Number(e.target.value))}
          />
        </label>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px" }}
      >
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubtract}>Substract</button>
        <button onClick={handleMultiplication}>Multiply</button>
        <button onClick={handleDivision}>Division</button>
        <button onClick={handleClear}>Clear</button>
      </div>

      <div>
        <h1 style={{ textAlign: "center", color: "yellow" }}>
          Result: {result}
        </h1>
      </div>
    </div>
  );
}

export default Calculator;
