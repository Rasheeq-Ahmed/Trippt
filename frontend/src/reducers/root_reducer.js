import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import trips from "./trip_reducer"
import attractions from "./attraction_reducer"
import restaurants from "./restaurant_reducer"
import nightlife from "./nightlife_reducer"
import ui from "./ui_reducer"

const RootReducer = combineReducers({
  errors,
  session,
  trips,
  attractions,
  restaurants,
  nightlife,
  ui
});

export default RootReducer;
