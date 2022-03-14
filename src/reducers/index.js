import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer, // or counterReducer that means the property: value is the same name
  isLogged: loggedReducer,
});

export default allReducers;
