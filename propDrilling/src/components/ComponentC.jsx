import { useContext } from "react";
import { Data, Data1 } from "../App";

function ComponentC() {
  const userName = useContext(Data);
  const age = useContext(Data1);
  return (
    <h1>
      My name is: {userName} and I'm {age} years old.
    </h1>
  );
}

export default ComponentC;
