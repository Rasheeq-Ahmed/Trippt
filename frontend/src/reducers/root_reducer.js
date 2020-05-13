import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import trip from "./trip_reducer"

const RootReducer = combineReducers({
  errors,
  session,
  trip
});

export default RootReducer;
