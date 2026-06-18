const Move = () => {
  const moveHandler = () => {
    alert("Mouse move event fired");
    console.warn("Mouse move event fired");
  };
  return (
    <p onMouseMove={moveHandler}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odio
      maiores unde, nobis expedita debitis dicta nam rerum officia ipsum, quas
      quam voluptas asperiores aliquam repellendus adipisci architecto!
      Cupiditate, accusantium.
    </p>
  );
};

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

      <Move />
    </section>
  );
};

export default App;
