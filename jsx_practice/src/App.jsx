import JSXRules from "./components/JSXRules";
import WelcomeMessage from "./components/WelcomeMessage";

export default function App() {
  return (
    <div>
      <WelcomeMessage />
      <form>
        <label htmlFor="name">Name: </label>
        <input type="text" placeholder="Enter your name" />
      </form>

      <JSXRules />
    </div>
  );
}
