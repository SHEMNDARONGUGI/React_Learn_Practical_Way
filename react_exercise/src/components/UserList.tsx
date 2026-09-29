import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import { type userData } from "../types";

const UserList = () => {
  const [userList, setUserList] = useState<userData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) throw new Error("Failed to fetch users");
        const data: userData[] = await response.json();
        setUserList(data);

        console.log(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Failed to load users...",
        );
        console.log("Error message: ", error);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="flex items-center gap-2">
          <MoonLoader color="#36d7b7" size={30} speedMultiplier={0.75} />
          <p className="text-[#36d7b7]">Loading...</p>
        </span>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  return (
    <div className="p-8">
      <div>
        <h1 className="text-[#36d7b7] font-bold text-center m-5">User Data</h1>

        <table className="bg-gray-400 border mx-auto">
          <thead>
            <tr className="border">
              <th className="border  bg-gray-300  p-4">#id</th>
              <th className="border bg-emerald-200">name</th>
              <th className="border bg-emerald-200">username</th>
              <th className="border bg-emerald-200">email</th>
              <th className="border bg-emerald-200">phone</th>
            </tr>
          </thead>
          <tbody>
            {userList.map(({ id, name, username, email, phone }) => (
              <tr key={id} className="border">
                <td className="border p-5 bg-gray-300">{id}</td>
                <td className="border p-5 font-bold">{name}</td>
                <td className="border p-5">{username}</td>
                <td className="border p-5">{email}</td>
                <td className="border p-5 text-right">{phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
