import { createStore, combineReducers } from "redux";
import { getDataReducer } from "../reducers/dataReducer";
import middleware from "../middleware/Middleware";

const reducers = combineReducers({ data: getDataReducer });
const store = createStore(reducers, middleware);
export default store;
