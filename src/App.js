import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter); // from redux dev tools State has all states
  // takes out  counter from all Reducers (index.js)
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(10))}>+</button>{" "}
      {/* if i wanna pass an arg like increm by 5 */}
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Private information</h3> : "Go log in pls!"}
    </div>
  );
}

export default App;

//STORE - globalized state

//ACTION- describes what you wanna do
//INCREMENT
// a f that returns an object

//REDUCER -describes how your ACTIONS transf the state into the next state
//- checks which Action you used and based on it it's gonna moddify the STORE

//DISPATCH -how we actually execute that action- dispatch action to reducer, reducer checks what to do and store gets changed

//Dispatch checks actions see what to do, actions look into reducers to see how to do
