const Button = ({ style }) => {
  const handleClick = () => console.log(Math.round(Math.random() * 10));
  return (
    <button onClick={handleClick} style={style}>
      Click
    </button>
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
    </section>
  );
};

export default App;
