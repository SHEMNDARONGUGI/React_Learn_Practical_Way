// we setup useEffect hook to run some code When
// 👉 Component renders for the First Time
// & whenever it re-renders
// & some data in our component changed
import { useState, useEffect } from "react";
import BasicEffect from "./components/BasicEffect";
import CounterEffect from "./components/CounterEffect";
import FetchDataEffect from "./components/FetchDataEffect";

export default function App() {
  // useEffect example for data fetching
  const [data, setData] = useState([]);

  // site used https://jsonplaceholder.typicode.com/
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      if (data && data.length) setData(data);
    }

    getData();
  }, []);
  // const [value, setValue] = useState(0);
  // const [something, setSomething] = useState(0);

  // useEffect(() => {
  //   if (value > 0) {
  //     console.log("call useEffect");
  //     document.title = `Increment ${value}`;
  //   }
  // [] is known as empty dependency array
  // }, [value]);
  return (
    <div>
      {/*EXERCISE ONE FROM THE ASSIGNMENT */}
      <BasicEffect />

      {/*EXERCISE TWO FROM THE ASSIGNMENT */}
      <CounterEffect />

      {/*EXERCISE THREE FROM THE ASSIGNMENT */}
      <FetchDataEffect />
      <ol>
        {data.map((todo) => (
          <li key={todo.id}>
            userId: {todo.userId} - Title: {todo.title} <br />
            <strong>Body</strong>
            <br />
            {todo.body}
          </li>
        ))}
      </ol>
      {/* <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>Click Me</button>
      <button onClick={() => setSomething(value + 1)}>
        Increment by Something
      </button> */}
    </div>
  );
}
