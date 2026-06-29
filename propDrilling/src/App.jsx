import ComponentA from "./components/ComponentA";
import ComponentC from "./components/ComponentC";

const App = () => {
  const name = "Shem";
  return (
    <div>
      <ComponentA name={name} />
    </div>
  );
};

export default App;
