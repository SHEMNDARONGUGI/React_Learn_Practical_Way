import React from "react";

const Greeting = () => {
  const name = "John";
  const date = new Date();
  const currentDate = date.toLocaleDateString();
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>{currentDate}</p>
    </div>
  );
};

export default Greeting;
