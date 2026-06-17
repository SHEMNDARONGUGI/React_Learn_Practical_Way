const Button = ({ style }) => {
  const handleClick = () => console.log(Math.round(Math.random() * 10));
  return (
    <button onClick={handleClick} style={style}>
      Click
    </button>
  );
};

const copyHandler = () => {
  console.log("Stop stealing my content");
};

const Copy = () => {
  return (
    <p onCopy={copyHandler}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quo sit
      debitis, aliquid rem distinctio tenetur tempore ducimus nemo omnis libero
      veniam corrupti recusandae dicta totam reiciendis amet dignissimos id.
    </p>
  );
};
const App = () => {
  return (
    <section>
      <Button
        style={{
          backgroundColor: "green",
          color: "white",
          borderRadius: "5px",
        }}
      />
      <Copy />
    </section>
  );
};

export default App;
