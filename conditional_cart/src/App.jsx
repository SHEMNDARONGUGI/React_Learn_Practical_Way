import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";
import Greeting from "./components/Greeting";

const Cart = () => {
  const items = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoodie"];
  return (
    <div>
      <h1>Cart 🛒</h1>
      {items.length > 0 && <h2>You have {items.length} items in your cart</h2>}

      <ul>
        <h4>
          {items.map((i) => (
            <li key={Math.random()}>{i}</li>
          ))}
        </h4>
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Cart />
      <Greeting />
      <Weather temperature={27} />
      <UserStatus loggedIn={true} isAdmin={true} />
    </div>
  );
};

export default App;
