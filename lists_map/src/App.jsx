import usersInfo from "./userInfo";
export default function App() {
  return (
    <main>
      {usersInfo.map(({ username, email, location }) => (
        <ul key={Math.random()}>
          <li>{username}</li>
          <li>{email}</li>
          <li>{location}</li>
        </ul>
      ))}
    </main>
  );
}

{
  /* <main>
  {usersInfo.map((user) => (
    <ul key={Math.random()}>
      <li>{user.username}</li>
      <li>{user.email}</li>
      <li>{user.location}</li>
    </ul>
  ))}
</main>; */
}
