import { produce } from "immer";
import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "change-value";
const ADD_VALUE = "add-value";
function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  // immer's produce() way to handle reducer action type rules for state mutation
  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT_COUNT:
        state.count = state.count + 1;
        return;
      case DECREMENT_COUNT:
        state.count = state.count - 1;
        return;
      case SET_VALUE_TO_ADD:
        state.valueToAdd = action.payload;
        return;
      case ADD_VALUE:
        state.count = state.count + state.valueToAdd;
        state.valueToAdd = 0;
        return;

      default:
        // throw new Error("unexpected action type: " + action.type);
        return;
    }

    // if (action.type === INCREMENT_COUNT) {
    //   return { ...state, count: state.count + 1 };
    // }
    // if (action.type === DECREMENT_COUNT) {
    //   return { ...state, count: state.count - 1 };
    // }
    // if (action.type === SET_VALUE_TO_ADD) {
    //   return { ...state, valueToAdd: action.payload };
    // }
    // if (action.type === ADD_VALUE) {
    //   return { ...state, count: state.count + state.valueToAdd };
    // }
    // return state;
  };
  // 'produce()' of immer library to mutate state
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });
  const increment = () => dispatch({ type: INCREMENT_COUNT });
  const decrement = () => dispatch({ type: DECREMENT_COUNT });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ADD_VALUE });
    // setCount(valueToAdd + count);
    // setValueToAdd(0);
  };
  const handleChange = (event) => {
    // to be '0' instead of NaN when we delete the '0' using backspace
    const value = parseInt(event.target.value) || 0;
    // setValueToAdd(value);

    dispatch({ type: SET_VALUE_TO_ADD, payload: value });
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          // asking if we have a '0' as value to add, make value to be ""
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
