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
import { produce } from "immer";

import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "change-value-to-add";
const ADD_VALUE_TO_COUNT = "add_Value_to_count";

const reducer = (state, action) => {
  //when using immer produce
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count += 1;
      return;
    case DECREMENT_COUNT:
      state.count -= 1;
      return;
    case SET_VALUE_TO_ADD:
      state.valToAdd = action.payload;
      return;
    case ADD_VALUE_TO_COUNT:
      state.count += state.valToAdd;
      state.valToAdd = 0;
      return;
    default:
      return state;
  }

  /*   switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valToAdd: action.payload,
      };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valToAdd,
        valToAdd: 0,
      };
    default:
      return state;
  } */
  /*   if (action.type === INCREMENT_COUNT) {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  if (action.type === DECREMENT_COUNT) {
    return {
      ...state,
      count: state.count - 1,
    };
  }

  if (action.type === SET_VALUE_TO_ADD) {
    return {
      ...state,
      valToAdd: action.payload,
    };
  } */
};
export default function CounterPage({ initialCount }) {
  /*   const [count, setCount] = useState(initialCount);
  const [valToAdd, setValtoAdd] = useState(0); */

  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valToAdd: 0,
  });
  const increment = () => {
    dispatch({ type: INCREMENT_COUNT }); //inc by 1 no need to pass any arg
    //recat will find reducer func
  };

  const decrement = () => {
    dispatch({ type: DECREMENT_COUNT });
  };

  const handleChange = (evt) => {
    const value = parseInt(evt.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };
  //console.log(state);
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
          value={state.valToAdd || ""}
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
