import { createPortal } from "react-dom";
function PopupContent({ copied }) {
  return createPortal(
    <section
      style={{
        position: "absolute",
        bottom: "3rem",
        fontFamily: "sans-serif",
        fontWeight: "bold",
      }}
    >
      {copied && <div>Copied to Clipboard</div>}
    </section>,
    document.querySelector("#popup-content"),
  );
}

export default PopupContent;
