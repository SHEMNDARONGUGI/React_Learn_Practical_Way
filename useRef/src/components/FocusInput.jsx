import { useRef } from "react";

const FocusInput = () => {
  const inputElement = useRef(null);
  const focusElement = () => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  };

  return (
    <div>
      <input
        type="text"
        ref={inputElement}
        placeholder="Click button to focus"
      />
      <button onClick={() => focusElement()}>Focus on Input</button>
    </div>
  );
};

export default FocusInput;
