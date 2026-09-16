import { useState } from "react";
import Button from "./components/Button";
import User from "./components/User";
import UserInfo from "./components/UserInfo";
import AdminInfo from "./components/AdminInfo";

import type { Info, AdminInfoList } from "./types";
const App = () => {
  const [count, setCount] = useState(0);

  const addCount = () => setCount(count + 1);

  const user: Info = {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
  };

  const admin: AdminInfoList = {
    id: 2,
    name: "Jane Doe",
    email: "jane@gmail.com",
    role: "admin",
    lastLogin: new Date(),
  };
  return (
    <div>
      <User name="Shem" age={20} isStudent={true} />

      <Button onClick={addCount} label="Add Count" disabled={false} />

      <Button onClick={addCount} label="Disabled Button" disabled={true} />

      <h2>{count}</h2>

      <UserInfo user={user} />

      <AdminInfo admin={admin} />
    </div>
  );
};

export default App;
