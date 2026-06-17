const Button = ({ style }) => {
  return (
    <button onClick={() => console.log("You clicked me")} style={style}>
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
