import type React from "react";
import type { AdminInfoList } from "../types";

type adminInfoProp = {
  admin: AdminInfoList;
};

const AdminInfo: React.FC<adminInfoProp> = ({ admin }) => {
  return (
    <div>
      <h2>Admin Information</h2>
      <p>AdminId: {admin.id}</p>
      <p>Name: {admin.name}</p>
      <p>Email: {admin.email}</p>
      <p>Role: {admin.role}</p>
      <p>Last Login: {admin.lastLogin.toLocaleString()}</p>
    </div>
  );
};

export default AdminInfo;
