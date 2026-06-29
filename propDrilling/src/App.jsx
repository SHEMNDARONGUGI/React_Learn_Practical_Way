import ComponentA from "./components/ComponentA";

const App = () => {
  const name = "Shem";
  return (
    <div>
      <ComponentA name={name} />
    </div>
  );
};

export default App;
