import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";

//STORE - globalized state

//ACTION- describes what you wanna do
//INCREMENT
// a f that returns an object
const increment = () => {
  return {
    type: "INCREMENT",
  };
};
const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

//REDUCER -describes how your ACTIONS transf the state into the next state
//- checks which Action you used and based on it it's gonna moddify the STORE
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

let store = createStore(counter);

//Display it in the console
store.subscribe(() => console.log(store.getState()));

//DISPATCH -how we actually execute that action- dispatch action to reducer, reducer checks what to do and store gets changed
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
