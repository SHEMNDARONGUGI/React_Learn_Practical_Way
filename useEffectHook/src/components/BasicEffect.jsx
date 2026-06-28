import { useEffect } from "react";

function BasicEffect() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);
  return <div>BasicEffect</div>;
}

export default BasicEffect;
