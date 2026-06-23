import React from "react";

function ComponentTwo({ count, onClickHandler }) {
  const handleCount = () => onClickHandler();
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleCount}>Decrement</button>
    </div>
  );
}

export default ComponentTwo;
