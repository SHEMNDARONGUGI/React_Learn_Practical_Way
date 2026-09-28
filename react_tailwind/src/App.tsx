import Card from "./components/Card";

const App = () => {
  return (
    <div className="p-10 bg-slate-950">
      <div className="flex flex-col gap-10 sm:grid sm:grid-cols-2 sm:justify-center lg:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default App;
