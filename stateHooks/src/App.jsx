import { useState } from "react";

const App = () => {
  // useState working with an array of objects

  // const [movies, setMovies] = useState([
  //   { id: 1, title: "Spider Man", ratings: 3 },
  //   { id: 2, title: "Superman", ratings: 6 },
  // ]);

  // const handleClick = () => {
  //   setMovies(
  //     movies.map((m) =>
  //       m.id === 1 ? { ...movies, title: "Transformers 5" } : m,
  //     ),
  //   );
  // };

  // const [movie, setMovie] = useState({
  //   title: "Chinese Zodiac",
  //   ratings: 7,
  // });

  // const handleClick = () => {
  // const copyMovie = {
  //   ...movie,
  //   ratings: 5,
  // };

  //   setMovie({ ...movie, ratings: 5 });
  // };
  // const [count, setCount] = useState(0);
  // console.log(count);
  // const increment = () => setCount(count + 1);
  // const decrement = () => setCount(count - 1);
  // const [friends, setFriends] = useState(["Alex", "John"]);

  // function addOneFriend() {
  //   setFriends([...friends, "Shem Ndaro"]);
  // }

  // const removeFriend = () => setFriends(friends.filter((f) => f !== "John"));

  // const updateOneFriend = () => {
  //   setFriends(friends.map((f) => (f === "Alex" ? "Alex Smith" : f)));
  // };

  return (
    <section>
      {/* working with an array of objects with useState */}
      {/* {movies.map((m, id) => (
        <li key={id}>{m.title}</li>
      ))}

      <button onClick={handleClick}>Change Name</button> */}

      {/* <h1>Title: {movie.title}</h1>
      <p>ratings: {movie.ratings}</p>

      <button onClick={handleClick}>Change Rating</button> */}
      {/* <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button> */}
      {/* <ul>
        {friends.map((f, id) => (
          <li key={id}>{f}</li>
        ))}
      </ul>

      <button onClick={addOneFriend}>Add New Friend</button>
      <button onClick={removeFriend}>Remove Friend</button>
      <button onClick={updateOneFriend}>Update One Friend</button> */}
    </section>
  );
};

export default App;
