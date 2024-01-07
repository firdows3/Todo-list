import { combineReducers } from "redux";
import todoListReducer from "./todoListReducers";

const rootReducer = combineReducers({
    todo: todoListReducer
})

export default rootReducer