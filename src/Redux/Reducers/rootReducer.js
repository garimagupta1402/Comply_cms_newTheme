import { combineReducers } from "redux";
import { getAllPagesReducer } from "./reducer";

const rootReducer = combineReducers({
  getAllPagesReducer,
});
export default rootReducer;
