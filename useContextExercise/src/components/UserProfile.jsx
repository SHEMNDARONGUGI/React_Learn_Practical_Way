import { useContext } from "react";
import UserProvider from "./UserContext";
function UserProfile() {
  const userName = useContext(UserProvider);
  return (
    <div>
      <h1>{userName}</h1>
    </div>
  );
}

export default UserProfile;
