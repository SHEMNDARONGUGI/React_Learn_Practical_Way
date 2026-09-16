import type React from "react";
import type { Info } from "../types";

type UserInfoProp = {
  user: Info;
};

const UserInfo: React.FC<UserInfoProp> = ({ user }) => {
  return (
    <div>
      <h2>User Information</h2>
      <p>ID: {user.id}</p>
      <p>ID: {user.name}</p>
      <p>ID: {user.email}</p>
    </div>
  );
};

export default UserInfo;
