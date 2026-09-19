import { useReducer } from "react";
import { counterReducer, type CounterState } from "../reducers/counterReducer";

const initialState: CounterState = { count: 0 };
const SecondCounter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default SecondCounter;
