import { useEffect } from "react";

function BasicEffect() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);
  return (
    <div>
      <h1>Check console to see the changes</h1>
    </div>
  );
}

export default BasicEffect;
