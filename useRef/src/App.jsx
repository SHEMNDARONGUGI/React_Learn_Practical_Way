import { useRef } from "react";
import FocusInput from "./components/FocusInput";

const App = () => {
  // const inputElement = useRef(null);
  // const focusInput = () => {
  //   inputElement.current.focus();
  //   inputElement.current.value = "Shem";
  // };
  return (
    <FocusInput />
    // <div>
    //   <input type="text" ref={inputElement} />
    //   <button onClick={() => focusInput()}>Focus and Write Shem</button>
    // </div>
  );
};

export default App;
