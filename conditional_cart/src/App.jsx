const Cart = () => {
  const items = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoodie"];
  return (
    <div>
      <h1>Cart 🛒</h1>
      {items.length > 0 && <h2>You have {items.length} items in your cart</h2>}
    </div>
  );
};

const App = () => {
  return <Cart />;
};

export default App;
