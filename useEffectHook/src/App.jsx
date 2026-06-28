// we setup useEffect hook to run some code When
// 👉 Component renders for the First Time
// & whenever it re-renders
// & some data in our component changed
import { useState, useEffect } from "react";

export default function App() {
  const [value, setValue] = useState(0);
  const [something, setSomething] = useState(0);

  useEffect(() => {
    if (value > 0) {
      console.log("call useEffect");
      document.title = `Increment ${value}`;
    }
    // [] is known as empty dependency array
  }, [value]);
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>Click Me</button>
      <button onClick={() => setSomething(value + 1)}>
        Increment by Something
      </button>
    </div>
  );
}
