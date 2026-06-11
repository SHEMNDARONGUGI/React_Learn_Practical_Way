const Button = () => {
  return <button onClick={() => console.log("You clicked me")}>Click</button>;
};

const App = () => {
  return (
    <section>
      <Button />
    </section>
  );
};

export default App;
