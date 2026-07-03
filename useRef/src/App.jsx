import { useRef } from "react";
import FocusInput from "./components/FocusInput";
import Timer from "./components/Timer";

const App = () => {
  // const inputElement = useRef(null);
  // const focusInput = () => {
  //   inputElement.current.focus();
  //   inputElement.current.value = "Shem";
  // };
  return (
    <div>
      <FocusInput />
      <Timer />
    </div>

    // <div>
    //   <input type="text" ref={inputElement} />
    //   <button onClick={() => focusInput()}>Focus and Write Shem</button>
    // </div>
  );
};

export default App;
