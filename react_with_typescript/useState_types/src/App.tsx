import { useState } from "react";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import TodoList from "./components/TodoList";

const App = () => {
  const [age, setAge] = useState<number>(0);

  const newAge = () => setAge(age + 10);
  return (
    <div>
      <Counter />

      <p>Age: {age}</p>
      <button onClick={newAge}>Get Age</button>

      <UserProfile />
      <TodoList />
    </div>
  );
};

export default App;
