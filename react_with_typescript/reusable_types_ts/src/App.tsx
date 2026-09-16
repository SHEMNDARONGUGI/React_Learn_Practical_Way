import AdminInfo from "./components/AdminInfo";
import UserInfo from "./components/UserInfo";

const App = () => {
  return (
    <div>
      <h1>User Info</h1>
      <UserInfo
        username="Alex"
        email="alex@gmail.com"
        age={21}
        location={["Kenya", "Nairobi"]}
      />

      <h1>Admin Info</h1>

      <AdminInfo
        username="Alex"
        email="alex@gmail.com"
        age={21}
        location={["Kenya", "Nairobi"]}
        admin="Yes"
      />
    </div>
  );
};

export default App;
