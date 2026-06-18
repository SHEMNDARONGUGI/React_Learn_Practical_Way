import { useState } from "react";

const App = () => {
  // const [count, setCount] = useState(0);
  // console.log(count);
  // const increment = () => setCount(count + 1);
  // const decrement = () => setCount(count - 1);
  const [friends, setFriends] = useState(["Alex", "John"]);

  function addOneFriend() {
    setFriends([...friends, "Shem Ndaro"]);
  }

  const removeFriend = () => setFriends(friends.filter((f) => f !== "John"));

  const updateOneFriend = () => {
    setFriends(friends.map((f) => (f === "Alex" ? "Alex Smith" : f)));
  };

  return (
    <section>
      {/* <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button> */}

      <ul>
        {friends.map((f, id) => (
          <li key={id}>{f}</li>
        ))}
      </ul>

      <button onClick={addOneFriend}>Add New Friend</button>
      <button onClick={removeFriend}>Remove Friend</button>
      <button onClick={updateOneFriend}>Update One Friend</button>
    </section>
  );
};

export default App;
