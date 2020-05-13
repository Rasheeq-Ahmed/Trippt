import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import trip from "./trip_reducer"
import attraction from "./attraction_reducer"

const RootReducer = combineReducers({
  errors,
  session,
  trip,
  attraction
});

export default RootReducer;
