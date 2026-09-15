import { useState } from "react";
import Button from "./components/Button";
import User from "./components/User";
import UserInfo from "./components/UserInfo";
import AdminInfo from "./components/AdminInfo";
const App = () => {
  const [count, setCount] = useState(0);

  const addCount = () => setCount(count + 1);
  return (
    <div>
      <User name="Shem" age={20} isStudent={true} />

      <Button onClick={addCount} label="Add Count" disabled={false} />

      <Button onClick={addCount} label="Disabled Button" disabled={true} />

      <h2>{count}</h2>

      <UserInfo id="P001" name="Stephenson" email="stephenson@gmail.com" />

      <AdminInfo
        adminId="SX001"
        name="Shem Ndaro Ngugi"
        email="admin@shemtechnologies.gmail.com"
        phoneNo="0711221133"
        role="IT Manager"
        isActive={true}
      />
    </div>
  );
};

export default App;
