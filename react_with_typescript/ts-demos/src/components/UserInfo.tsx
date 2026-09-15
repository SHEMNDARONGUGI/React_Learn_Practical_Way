import type { Info } from "../types.js";
const UserInfo = ({ id, name, email }: Info) => {
  return (
    <>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
        </tr>

        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{email}</td>
        </tr>
      </table>
    </>
  );
};

export default UserInfo;
