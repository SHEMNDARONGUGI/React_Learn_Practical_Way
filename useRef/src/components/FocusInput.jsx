import { useRef } from "react";

const FocusInput = () => {
  const inputElement = useRef();
  const focusElement = () => {
    inputElement.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusElement()}>Focus on Input</button>
    </div>
  );
};

export default FocusInput;
