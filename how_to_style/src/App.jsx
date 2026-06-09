import "./index.css";
import { TiShoppingCart } from "react-icons/ti";
import { FaComputer } from "react-icons/fa6";
const App = () => {
  // const styles = {
  //   color: "red",
  //   backgroundColor: "teal",
  //   padding: "2rem",
  // };
  return (
    <section>
      <TiShoppingCart />
      <FaComputer />

      {/* <h1 style={styles}>Inline Style</h1> */}
      <h1>Separate file for styling</h1>
    </section>
  );
};

export default App;
