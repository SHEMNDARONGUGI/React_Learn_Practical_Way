import type { AdminInfoList } from "../types.js";

const AdminInfo = ({
  adminId,
  name,
  email,
  phoneNo,
  role,
  isActive,
}: AdminInfoList) => {
  return (
    <div>
      <h1>
        {adminId}: {name}
      </h1>
      <h3>Email: {email}</h3>
      <p>Phone: {phoneNo}</p>
      <p>role: {role}</p>
      <span>{isActive}</span>
    </div>
  );
};

export default AdminInfo;
