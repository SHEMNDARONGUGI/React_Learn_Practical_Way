import React from "react";
import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";

function App() {
  const myName = "Shem Ndaro Ngugi";

  const specialClass = "simple-class";

  const multiply = (a, b) => a * b;
  return (
    <div>
      <h1>My name is: {myName}</h1>
      <p>My Friends List: {["Alex", "John", "Waheed", "Jordan"]}</p>
      <p>2 * 2 = {multiply(2, 2)}</p>
      <p className={specialClass}>This is a special class</p>

      <Greeting />
      <ProductInfo />
    </div>
  );
}

export default App;
