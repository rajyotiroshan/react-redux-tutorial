import { useState } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

export default function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Deccrement</Button>
      </div>

      <form action="#">
        <label htmlFor="num">Add a lot!</label>
        <input
          type="number"
          id="num"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}
