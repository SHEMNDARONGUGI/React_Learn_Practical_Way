import { useState } from "react";
import Button from "./components/Button";
import User from "./components/User";
const App = () => {
  const [count, setCount] = useState(0);

  const addCount = () => setCount(count + 1);
  return (
    <div>
      <User name="Shem" age={20} isStudent={true} />

      <Button onClick={addCount} label="Add Count" disabled={false} />

      <Button onClick={addCount} label="Disabled Button" disabled={true} />

      <h2>{count}</h2>
    </div>
  );
};

export default App;
