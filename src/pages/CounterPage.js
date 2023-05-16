/* import { useState } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

export default function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [valToAdd, setValtoAdd] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleChange = (evt) => {
    const value = parseInt(evt.target.value) || 0;
    setValtoAdd(value);
    console.log(value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setCount(count + valToAdd);
    setValtoAdd(0);
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Deccrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="num">Add a lot!</label>
        <input
          value={valToAdd || " "}
          type="number"
          id="num"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          onChange={handleChange}
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
} */
/**
 * Using useReducer
 */

import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const reducer = (state, action) => {
  return {
    ...state,
    count: state.count + 1,
  };
};
export default function CounterPage({ initialCount }) {
  /*   const [count, setCount] = useState(initialCount);
  const [valToAdd, setValtoAdd] = useState(0); */

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valToAdd: 0,
  });
  const increment = () => {
    dispatch(); //inc by 1 no need to pass any arg
    //recat will find reducer func
  };

  const decrement = () => {
    dispatch()
  };

  const handleChange = (evt) => {
    const value = parseInt(evt.target.value) || 0;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Deccrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="num">Add a lot!</label>
        <input
          value={state.valToAdd || " "}
          type="number"
          id="num"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          onChange={handleChange}
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}
