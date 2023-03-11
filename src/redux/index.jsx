import { combineReducers } from "redux";
import { chatReducers } from "./reducers";

const reducers = combineReducers({
    allReducers: chatReducers,
})

export default reducers;