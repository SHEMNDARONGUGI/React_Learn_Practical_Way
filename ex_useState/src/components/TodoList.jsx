import { useState } from "react";

function TodoList() {
  // const [input, setInput] = useState("");
  // const [items, setItem] = useState([]);

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // const addItem = () => {
  //   if (!input.trim()) return;
  //   setItem([...items, input]);
  //   setInput("");
  // };

  return (
    <div>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          placeholder="Add a new Todo"
          onChange={handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      {/* <br />
      <input
        type="text"
        value={input}
        placeholder="Add Task"
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default TodoList;
