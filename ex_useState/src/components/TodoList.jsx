import { useState } from "react";

function TodoList() {
  const [input, setInput] = useState("");
  const [items, setItem] = useState([]);

  const addItem = () => {
    if (!input.trim()) return;
    setItem([...items, input]);
    setInput("");
  };

  return (
    <div>
      <br />
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
      </ul>
    </div>
  );
}

export default TodoList;
