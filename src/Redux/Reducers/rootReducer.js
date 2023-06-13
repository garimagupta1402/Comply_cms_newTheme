import { combineReducers } from "redux";
import { getAllPagesReducer } from "./reducer";
import  Reducer  from "../../reducers";

const rootReducer = combineReducers({
  getAllPagesReducer,
  Reducer,
});
export default rootReducer;
