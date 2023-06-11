// import { createStore, applyMiddleware } from "redux"
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Redux/Reducers/rootReducer";
import { legacy_createStore as createStore } from "redux";

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
   